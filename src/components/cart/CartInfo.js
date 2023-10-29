import { isCartOpenAtom } from "@/lib/atoms"
import { useAtom } from "jotai"
import Link from "next/link"
import { useCart } from "react-use-cart"
import { formatVND } from "@/utilities/formatCurrency"
import Button from "../common/Button"
import localFont from "next/font/local"
const myFont = localFont({ src: "../../fonts/iCielRams-Light.otf" })
import { CldImage } from "next-cloudinary"

const S = {
  Title: tw.div`text-xl font-medium text-gray-900`,
  Panel: tw.div`h-full`,
  Counter: tw.div`relative flex flex-row w-20 h-6 mt-1 space-x-2 bg-transparent rounded-lg`,
  Price: tw.div`space-y-1`,
  ProductInfo: tw.div``,
  SubTotal: tw.div`space-y-1`,
  SubTotalInfo: tw.div`space-y-2`,
}

const formItems = (items) => {
  const formItems = items
    .map((item) => {
      const quantity = item.quantity
      const sku = item.sku
      const itemTotal = item.itemTotal
      const discountPercentage = item.discount_percentage || 0

      // Calculate the discounted price if discount percentage is greater than 0
      const price =
        discountPercentage > 0
          ? itemTotal * (1 - discountPercentage)
          : itemTotal

      // Format the string
      const formattedString = `${quantity}*${sku}@${price.toFixed(0)}`

      // Append the discount percentage if it's greater than 0
      return discountPercentage > 0
        ? `${formattedString}%${discountPercentage * 100}`
        : formattedString
    })
    .join("+")
  return formItems
}

const CartInfo = ({ className }) => {
  const [isCartOpen, setIsCartOpen] = useAtom(isCartOpenAtom)
  const {
    isEmpty,
    items,
    updateItemQuantity,
    removeItem,
    cartTotal,
    emptyCart,
  } = useCart()

  console.log(formItems(items))

  /**
   * Calculate the cart's total price.
   * @param {number} total - Accumulated total price.
   * @param {Object} item - Cart item.
   * @param {number} item.quantity - Quantity of the item.
   * @param {number} item.price - Price of the item.
   * @param {number} item.discounted_price - Discounted price of the item.
   * @returns {number} Accumulated total price.
   */
  const calculatedCartTotal = items.reduce((total, item) => {
    const itemTotal = item.discounted_price
      ? item.discounted_price * item.quantity
      : item.price * item.quantity
    return total + itemTotal
  }, 0)

  /**
   * Handle decrementing the quantity of an item.
   * @param {string} itemId - ID of the item to decrement.
   */
  const handleDecrement = (itemId) => {
    updateItemQuantity(
      itemId,
      items.find((item) => item.id === itemId).quantity - 1
    )
  }

  /**
   * Handle incrementing the quantity of an item.
   * @param {string} itemId - ID of the item to increment.
   */
  const handleIncrement = (itemId) => {
    updateItemQuantity(
      itemId,
      items.find((item) => item.id === itemId).quantity + 1
    )
  }

  /**
   * Handle removing an item from the cart.
   * @param {string} itemId - ID of the item to remove.
   */
  const handleRemoveItem = (itemId) => {
    removeItem(itemId)
  }

  return (
    <S.CartInfo className={className}>
      {" "}
      <div tw="flex-1 px-4 py-6 overflow-y-auto sm:px-6">
        <S.Title>YOUR CART</S.Title>
        <div tw="flex justify-between mt-6 text-sm text-center text-gray-500">
          <button
            type="button"
            tw="font-medium text-red-600 hover:text-red-500"
            onClick={() => {
              emptyCart()
            }}
          >
            Remove all items
          </button>
          <p>
            <button
              type="button"
              tw="font-medium text-green-600 hover:text-green-500"
              onClick={() => setIsCartOpen(false)}
            >
              Continue Shopping
              <span aria-hidden="true"> &rarr;</span>
            </button>
          </p>
        </div>
        {isEmpty && (
          <p tw="mt-4 text-gray-400">There is no item in your wishlist.</p>
        )}

        <div tw="mt-8">
          <div tw="flow-root">
            <ul role="list" tw="-my-6 divide-y divide-gray-200">
              {items.map((item) => (
                <li key={item.id} tw="flex py-6">
                  <div tw="flex items-center justify-center w-24 h-24 overflow-hidden border border-gray-200 rounded-md 1flex-shrink-0">
                    <CldImage
                      src={item.cldr_id_packshot}
                      alt={item.name}
                      width={72}
                      height={72}
                      tw="self-center object-contain object-center w-[72px] h-[72px]"
                    />
                  </div>

                  <div tw="flex flex-col flex-1 ml-4">
                    <div>
                      <div tw="flex justify-between text-base font-medium font-semibold text-green-600">
                        <S.ProductInfo>
                          <h3 tw="text-sm max-w-[240px]">
                            <a href={item.href}>{item.name}</a>
                          </h3>
                          <p tw="mt-2 mb-6 text-xs italic text-gray-500">
                            {`SKU: ${item.sku}`}
                          </p>
                        </S.ProductInfo>
                        <S.Price>
                          <p
                            css={
                              item.discounted_price
                                ? tw`ml-4 text-xs text-right text-black line-through md:text-sm`
                                : tw`ml-4 text-sm text-right text-black md:text-base`
                            }
                          >
                            {item.discounted_price
                              ? formatVND(item.price * item.quantity)
                              : formatVND(item.price * item.quantity)}
                          </p>
                          <p tw="ml-4 text-sm text-right text-black md:text-base">
                            {item.discounted_price
                              ? `${formatVND(
                                  item.discounted_price * item.quantity
                                )} (${item.discount_percentage * 100}% OFF)`
                              : ""}
                          </p>
                        </S.Price>
                      </div>
                    </div>
                    <div tw="flex items-end justify-between flex-1 text-sm">
                      <S.Counter>
                        <button
                          data-action="decrement"
                          tw="w-20 h-full text-gray-600 bg-gray-300 rounded outline-none cursor-pointer hover:text-gray-700 hover:bg-gray-400"
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity - 1)
                          }
                        >
                          <span tw="m-auto text-lg font-thin">−</span>
                        </button>
                        <input
                          type="number"
                          tw="flex items-center w-full font-semibold font-bold text-center text-gray-700 boutline-none focus:outline-none text-md hover:text-black focus:text-black md:text-basecursor-default"
                          name="custom-input-number"
                          value={item.quantity}
                        ></input>
                        <button
                          data-action="increment"
                          tw="w-20 h-full text-gray-600 bg-gray-300 rounded cursor-pointer hover:text-gray-700 hover:bg-gray-400"
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity + 1)
                          }
                        >
                          <span tw="m-auto text-lg font-thin">+</span>
                        </button>
                      </S.Counter>

                      <div tw="flex">
                        <button
                          type="button"
                          tw="font-medium text-red-600 hover:text-red-500"
                          onClick={() => handleRemoveItem(item.id)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </S.CartInfo>
  )
}

S.CartInfo = tw.div``

export default CartInfo
