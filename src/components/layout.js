import Drawer from "react-modern-drawer"


const Layout = ({ className, children }) => {
 

  return (
    <S.Layout className={className}>
      <S.Children>{children}</S.Children>
    </S.Layout>
  )
}

const S = {}

S.Layout = tw.div`z-10`
S.Children = tw.div`z-0 min-h-screen py-28 lg:py-32`
S.SearchMenu = tw(Drawer)``
S.Cart = tw(Drawer)`fixed h-auto top-[72px] bottom-[64p]`

export const runtime = "edge"
export default Layout
