export const runtime = 'edge'
import { isCartOpenAtom, isMessengerAtom, isSearchOpenAtom } from "@/lib/atoms"
import { useAtom } from "jotai"
import dynamic from "next/dynamic"
import FadeIn from "react-fade-in/lib/FadeIn"
import Drawer from "react-modern-drawer"
import SearchMenu from "./header/SearchMenu"
import Loading from "./icons/IconLoading"
import Footer from "./layout/Footer"
import { FacebookChat } from "./social-network/FacebookChat"
import FacebookFakeButton from "./social-network/FacebookFakeButton"
import FacebookFakeSpinner from "./social-network/FacebookFakeSpinner"
import MessengerCustomerChat from "react-messenger-customer-chat"

const DynamicHeader = dynamic(() => import("../components/layout/Header"), {
  loading: () => <Loading />,
})

const DynamicBottomNav = dynamic(
  () => import("../components/layout/bottom-nav/BottomNav"),
  {
    loading: () => <Loading />,
  }
)

const DynamicCart = dynamic(() => import("../components/cart/Cart"), {
  ssr: false,
})

const Layout = ({ className, children }) => {
  const [isSearchOpen, setIsSearchOpen] = useAtom(isSearchOpenAtom)
  const [isCartOpen, setIsCartOpen] = useAtom(isCartOpenAtom)
  const [facebookMessenger, setFacebookMessenger] = useAtom(isMessengerAtom)

  return (
    <S.Layout className={className}>
      <FadeIn delay={200}>
        <DynamicHeader />
      </FadeIn>

      <S.SearchMenu
        open={isSearchOpen}
        customIdSuffix="search-menu"
        onClose={() => setIsSearchOpen(false)}
        direction="top"
        className="search-drawer"
        size="100vw"
        style={{ height: "100vh", top: "72px" }}
        zIndex={10}
        enableOverlay={false}
        lockBackgroundScroll
      >
        <SearchMenu />
      </S.SearchMenu>
      <S.Cart
        open={isCartOpen}
        customIdSuffix="cart-menu"
        onClose={() => setIsCartOpen(false)}
        direction="right"
        className="cart-drawer"
        size="auto"
        style={{
          position: "fixed",
          top: "72px",
          bottom: "64px",
          height: "auto",
        }}
        zIndex={10}
        enableOverlay={true}
        lockBackgroundScroll
      >
        <DynamicCart />
      </S.Cart>
      <div>{isSearchOpen}</div>

      <S.Children>{children}</S.Children>

      <Footer />
      <FadeIn tw="fixed bottom-0 left-0 z-50 w-full">
        <DynamicBottomNav />
      </FadeIn>
      <div css={isCartOpen && tw`hidden`}>
        {facebookMessenger && (
          <MessengerCustomerChat
            pageId="569751026848268"
            appId="1093786924297767"
            shouldShowDialog
          />
        )}
        <FacebookFakeButton />
        <FacebookFakeSpinner />
      </div>
    </S.Layout>
  )
}

const S = {}

S.Layout = tw.div`z-10`
S.Children = tw.div`z-0 min-h-screen py-28 lg:py-32`
S.SearchMenu = tw(Drawer)``
S.Cart = tw(Drawer)`fixed h-auto top-[72px] bottom-[64p]`

export default Layout
