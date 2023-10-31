import { isCartOpenAtom } from "@/lib/atoms"
import { useAtom } from "jotai"
import Link from "next/link"
import { useCart } from "react-use-cart"
import { formatVND } from "@/utilities/formatCurrency"
import Button from "../common/Button"
import localFont from "next/font/local"
const myFont = localFont({ src: "../../fonts/iCielRams-Light.otf" })
import { CldImage } from "next-cloudinary"

/**
 * Styled components object for cart elements.
 * @typedef {Object} CartStyledComponents
 * @property {string} Title - Styled component for the cart title.
 * @property {string} Panel - Styled component for the cart panel.
 * @property {string} Counter - Styled component for item quantity counter.
 * @property {string} Price - Styled component for item price.
 * @property {string} ProductInfo - Styled component for product information.
 * @property {string} SubTotal - Styled component for cart subtotal.
 * @property {string} SubTotalInfo - Styled component for cart subtotal information.
 */
const S = {
  Title: tw.div`text-xl font-medium text-gray-900`,
  Panel: tw.div`h-full`,
  Counter: tw.div`relative flex flex-row w-20 h-6 mt-1 space-x-2 bg-transparent rounded-lg`,
  Price: tw.div`space-y-1`,
  ProductInfo: tw.div``,
  SubTotal: tw.div`space-y-1`,
  SubTotalInfo: tw.div`space-y-2`,
}

/**
 * Cart component to display the user's wishlist.
 * @returns {JSX.Element} Cart JSX element.
 */
export default function Cart() {
  const [isCartOpen, setIsCartOpen] = useAtom(isCartOpenAtom)
  const {
    isEmpty,
    items,
    updateItemQuantity,
    removeItem,
    cartTotal,
    emptyCart,
  } = useCart()

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

  const shouldShowDiscountedPrice = (originalTotal, calculatedTotal) => {
    if (originalTotal === 0) {
      return false
    }

    if (originalTotal > 0 && originalTotal === calculatedTotal) {
      return false
    }

    return true
  }

  return (
    <S.Panel
      className={myFont.className}
      tw="w-screen max-w-md pointer-events-auto"
    >
      <div tw="flex flex-col h-full overflow-y-scroll bg-white shadow-xl">
        <div tw="flex-1 px-4 py-6 overflow-y-auto sm:px-6">
          <S.Title>YOUR CART</S.Title>
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

        <div tw="px-4 py-6 border-t border-gray-200 sm:px-6">
          <div tw="flex justify-between text-base font-medium text-gray-900">
            <S.SubTotalInfo>
              <p tw="text-lg">Sub Total</p>
              <p tw="text-sm text-gray-500 mt-0.5 w-[240px] ">
                Taxes are included. Delivery and installation fee are not
                included.
              </p>
            </S.SubTotalInfo>
            <S.SubTotal>
              {shouldShowDiscountedPrice(cartTotal, calculatedCartTotal) && (
                <p tw="text-sm text-right line-through">
                  {formatVND(cartTotal)}
                </p>
              )}
              <p tw="text-lg">{formatVND(calculatedCartTotal)}</p>
            </S.SubTotal>
          </div>

          <div tw="mt-6">
            <Link href="/checkout">
              <button
                href="#"
                tw="flex items-center justify-center w-full px-6 py-3 text-base font-medium text-white bg-green-600 border border-transparent rounded-md shadow-sm hover:bg-green-700 disabled:bg-gray-300"
                disabled={isEmpty}
              >
                SEND ME QUOTE
              </button>
            </Link>
          </div>
          {isEmpty ? (
            <div tw="flex justify-center mt-6 text-sm text-center text-gray-500">
              <Link href="/products">
                <button
                  type="button"
                  tw="font-medium text-green-600 hover:text-green-500"
                  onClick={() => setIsCartOpen(false)}
                >
                  Add some products to your wishlist
                  <span aria-hidden="true"> &rarr;</span>
                </button>
              </Link>
            </div>
          ) : (
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
          )}
        </div>
      </div>
    </S.Panel>
  )
}
