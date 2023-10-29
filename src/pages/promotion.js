import ModalPromotion from "@/components/common/ModalPromotion"
import MaxWidth from "@/components/layout/MaxWidth"
import Space from "@/components/layout/Space"
import Cards from "@/components/products/card/Cards"
import { fetchInitialVariants } from "@/hooks/useVariants"
import { guestAtom } from "@/lib/atoms"
import { useAtom } from "jotai"
import { useRouter } from "next/router"
import { useEffect, useRef, useState } from "react"
import Drawer from "react-modern-drawer"

let filters = { validated: 1, is_clearance_sale: 1 }
let fields = [
  "name",
  "packshot",
  "packshot_size",
  "brand_logo_link",
  "brand_logo_size",
  "brand_logo",
  "price",
  "slug",
  "discount_percentage",
  "discounted_price",
]

export async function getStaticProps() {
  const data = await fetchInitialVariants({
    is_clearance_sale: 1,
    validated: 1,
  })
  return { props: { products: data }, revalidate: 10 }
}

const Promotion = ({ products }) => {
  const [open, setOpen] = useState(true)
  const [guest, setGuest] = useAtom(guestAtom)
  const myRef = useRef(null)
  const router = useRouter()

  const onOpenModal = () => setOpen(true)
  const onCloseModal = () => setOpen(false)
  //

  useEffect(() => {
    const guestInfo = {
      id: router.query.id,
      name: router.query.name,
      email: router.query.email,
      phoneNum: router.query.phoneNum,
    }

    if (router.query.phoneNum) {
      setGuest(guestInfo)
    }

    if (!guest) {
      router.push("/promotion")
    }
  }, [guest, router, setGuest])

  const initialData = {
    pages: [products],
    pageParams: [null],
  }

  return (
    <S.Promotion>
      <Space size="medium" />
      <Cards
        initialRecords={initialData}
        filters={filters}
        fields={fields}
        isSale
      />

      <S.Modal
        open={!guest.phoneNum}
        direction="top"
        duration={0}
        zIndex={10}
        enableOverlay={false}
        customIdSuffix="promotion-signin-"
        className="policy-modal"
        size="100vw"
        style={{ height: "100vh", top: "72px" }}
      >
        <S.Scroll>
          <ModalPromotion />
        </S.Scroll>
      </S.Modal>
    </S.Promotion>
  )
}

const S = {}

S.Promotion = tw(MaxWidth)`overflow-y-auto`
S.Modal = tw(Drawer)`h-screen`
S.Scroll = tw.div`fixed top-0 w-screen overflow-y-auto bg-white bottom-20`

export default Promotion
