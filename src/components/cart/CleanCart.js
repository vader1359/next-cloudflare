import { isCartOpenAtom } from "@/lib/atoms"
import { useAtom } from "jotai"
import Link from "next/link"
import { useCart } from "react-use-cart"
import { formatVND } from "@/utilities/formatCurrency"
import Button from "../common/Button"
import { CldImage } from "next-cloudinary"

export default function Cart() {
  const [isCartOpen, setIsCartOpen] = useAtom(isCartOpenAtom)
  const { isEmpty, items, updateItemQuantity, removeItem, cartTotal } =
    useCart()

  // Calculate the cartTotal as the sum of discounted_price (if available) or price
  const calculatedCartTotal = items.reduce((total, item) => {
    console.log(item)
    console.log("discounted_price", item.discounted_price)

    const itemTotal = item.discounted_price
      ? item.discounted_price * item.quantity
      : item.price * item.quantity
    console.log(itemTotal)
    return total + itemTotal
  }, 0)

  if (isEmpty)
    return (
      <S.Panel tw="w-screen max-w-md pointer-events-auto">
        <div tw="flex flex-col h-full overflow-y-scroll bg-white shadow-xl">
          <div tw="flex-1 px-4 py-6 overflow-y-auto sm:px-6">
            <S.Title tw="text-xl font-medium text-gray-900">YOUR CART</S.Title>
          </div>

          <div tw="px-4 py-6 border-t border-gray-200 sm:px-6">
            <div tw="flex justify-between text-base font-medium text-gray-900">
              <S.SubTotalInfo>
                <p tw="text-lg">Subtotal</p>
                <p tw="text-sm text-gray-500 mt-0.5">
                  Taxes are included. Delivery and installation fee are not
                  included.
                </p>
              </S.SubTotalInfo>
              <S.SubTotal>
                <p tw="text-sm text-right line-through">
                  {formatVND(cartTotal)}
                </p>
                <p tw="text-lg">{formatVND(calculatedCartTotal)}</p>
              </S.SubTotal>
            </div>

            <div tw="mt-6">
              <button
                href="#"
                tw="flex items-center justify-center w-full px-6 py-3 text-base font-medium text-white bg-green-600 border border-transparent rounded-md shadow-sm hover:bg-green-700 disabled:bg-gray-300"
                disabled
              >
                SEND ME QUOTE
              </button>
            </div>

            <Link href="/products">
              <div tw="flex justify-center mt-6 text-sm text-center text-gray-500">
                <button
                  type="button"
                  tw="font-medium text-green-600 cursor-pointer hover:text-green-500"
                  onClick={() => setIsCartOpen(false)}
                >
                  Add products to your wishlist
                  <span aria-hidden="true"> &rarr;</span>
                </button>
              </div>
            </Link>
          </div>
        </div>
      </S.Panel>
    )

  return (
    <S.Panel tw="w-screen max-w-md pointer-events-auto">
      <div tw="flex flex-col h-full overflow-y-scroll bg-white shadow-xl">
        <div tw="flex-1 px-4 py-6 overflow-y-auto sm:px-6">
          <S.Title tw="text-xl font-medium text-gray-900">YOUR CART</S.Title>

          <div tw="mt-8">
            <div tw="flow-root">
              <ul role="list" tw="-my-6 divide-y divide-gray-200">
                {items.map((item) => (
                  <li key={item.id} tw="flex py-6">
                    <div tw="relative flex-shrink-0 w-24 h-24 overflow-hidden border border-gray-200 rounded-md">
                      <CldImage
                        src={item.imageSrc}
                        alt={item.imageAlt}
                        tw="object-cover object-center w-full h-full"
                        fill
                      />
                    </div>

                    <div tw="flex flex-col flex-1 ml-4">
                      <div>
                        <div tw="flex justify-between text-base font-medium font-semibold text-green-600">
                          <S.ProductInfo>
                            <h3>
                              <a href={item.href}>{item.name}</a>
                            </h3>
                            <p tw="mt-1 text-sm italic text-gray-500">
                              {item.finish}
                            </p>
                          </S.ProductInfo>
                          <S.Price>
                            <p tw="ml-4 text-sm text-right text-black line-through">
                              {formatVND(item.price * item.quantity)}
                            </p>
                            <p tw="ml-4 text-right text-black ">
                              {`${formatVND(
                                item.discounted_price * item.quantity
                              )} (${item.discounted_percentage}% OFF)`}
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
                            onClick={() => removeItem(item.id)}
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
              <p tw="text-lg">Subtotal</p>
              <p tw="text-sm text-gray-500 mt-0.5">
                Taxes are included. Delivery and installation fee are not
                included.
              </p>
            </S.SubTotalInfo>
            <S.SubTotal>
              <p tw="text-sm text-right line-through">{formatVND(cartTotal)}</p>
              <p tw="text-lg">{formatVND(calculatedCartTotal)}</p>
            </S.SubTotal>
          </div>

          <div tw="mt-6">
            <a
              href="#"
              tw="flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-green-600 border border-transparent rounded-md shadow-sm hover:bg-green-700"
            >
              SEND ME QUOTE
            </a>
          </div>
          <div tw="flex justify-between mt-6 text-sm text-center text-gray-500">
            <button
              type="button"
              tw="font-medium text-red-600 hover:text-red-500"
              // onClick={() => removeItem(item.id)}
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
        </div>
      </div>
    </S.Panel>
  )
}

const S = {}

S.Title = tw.div``
S.Panel = tw.div`h-full`
S.Counter = tw.div`relative flex flex-row w-20 h-6 mt-1 space-x-2 bg-transparent rounded-lg`
S.Price = tw.div`space-y-1`
S.ProductInfo = tw.div``
S.SubTotal = tw.div`space-y-1`
S.SubTotalInfo = tw.div`space-y-2`
