import Cart from "@/components/cart/Cart"
import CartInfo from "@/components/cart/CartInfo"
import { CartProvider, useCart } from "react-use-cart"
import dynamic from "next/dynamic"
import MaxWidth from "@/components/layout/MaxWidth"
import Iframe from "react-iframe"
import { formatCartItems } from "@/utilities/formatCartItems"
import { useAtom } from "jotai"
import { guestAtom } from "@/lib/atoms"
import Space from "@/components/layout/Space"

const DynamicCartInfo = dynamic(() => import("../components/cart/CartInfo"), {
  ssr: false,
})

const Checkout = ({ className }) => {
  const [guest, setGuest] = useAtom(guestAtom)
  const { items } = useCart()
  const cartItems = formatCartItems(items)
  console.log(cartItems)
  console.log(guest)
  const tallyURL =
    `https://tally.so/embed/n08MqB?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1&items=${cartItems}` +
    (guest
      ? `&name=${guest.name || ""}&phone=${guest.phoneNum || ""}&email=${
          guest.email || ""
        }`
      : "")

  return (
    <>
      <MaxWidth>
        <S.Checkout className={className}>
          <DynamicCartInfo tw="hidden pr-12 md:block border-b-[1px] xl:border-r-[1px] xl:border-b-0" />
          <S.Iframe
            className="tally-form" // Changed 'clasName' to 'className'
            url={tallyURL}
            width="100%"
            frameBorder="1"
            lazy
            marginHeight="0"
            marginWidth="0"
            title="nanoHome Promotion"
            style={{
              background: "transparent",
              border: "1px solid #ccc",
              position: "sticky",
              top: "0", // Make it sticky at the top
              overflow:"hidden"
            }}
          ></S.Iframe>
        </S.Checkout>
      </MaxWidth>
    </>
  )
}

const S = {}

S.Checkout = tw.div`grid h-100% grid-cols-1 lg:grid-cols-2 gap-12 h-auto`
S.Iframe = tw(Iframe)`sticky h-[1280px] md:h-[880px] lg:h-[1280px] xl:h-[960px] top-24`

export default Checkout
