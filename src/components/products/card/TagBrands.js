import MaxWidth from "@/components/layout/MaxWidth"
import { brandsAtom } from "@/lib/atoms"
import { useAtom } from "jotai"
import { CldImage } from "next-cloudinary"
import { useKeenSlider } from "keen-slider/react"
import { useState } from "react"
import "keen-slider/keen-slider.min.css"
import CarouselArrow from "@/components/common/CarouselArrow"

const TagBrands = ({ className, brands }) => {
  const [activeBrands, setActiveBrands] = useAtom(brandsAtom)
  const [loaded, setLoaded] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  const [sliderRef, instanceRef] = useKeenSlider({
    mode: "free-snap",
    renderMode: "performance",
    slides: { perView: "auto", spacing: 32 },
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  const toggleBrand = (brand) => {
    setActiveBrands(new Set([brand]))
    window.scrollTo(0, 0)
  }

  const carouselTapNext = (e) => {
    e.stopPropagation() || instanceRef.current.next()
  }
  const carouselTapPrev = (e) => {
    e.stopPropagation() || instanceRef.current.prev()
  }

  return (
    <S.TagBrands className={className}>
      <MaxWidth tw="w-screen">
        <div tw="flex items-center justify-between ">
          <S.Brands ref={sliderRef} className="keen-slider" tw="mr-8 max-w-screen">
            {brands.map((brand) => (
              <S.Brand
                className="keen-slider__slide"
                key={brand.id}
                onClick={() => toggleBrand(brand.fields.slug)}
                tw="flex justify-center"
                css={[
                  activeBrands.has(brand.fields.slug) && tw`opacity-100`,
                  brand.fields.logo_size == 1.5
                    ? tw`min-w-[48px] max-w-[48px]`
                    : tw`min-w-[128px] max-w-[128px]`,
                ]}
              >
                <CldImage
                  tw="object-contain w-auto max-h-[64px]"
                  src={brand.fields.cldr_id_logo}
                  width={160}
                  height={80}
                  priority
                />
              </S.Brand>
            ))}
          </S.Brands>

          {loaded && instanceRef.current && (
            <CarouselArrow
              onClickPrev={carouselTapPrev}
              onClickNext={carouselTapNext}
              tw="hidden lg:flex"
            />
          )}
        </div>
        <hr className="h-px my-4 mb-0 bg-gray-200 border-0 dark:bg-gray-700" />
      </MaxWidth>
    </S.TagBrands>
  )
}

const S = {}

S.TagBrands = tw.div`fixed flex flex-col justify-center pt-6 bg-white top-16 -f`
S.Brands = tw.div`flex`

S.Brand = tw.div`flex cursor-pointer opacity-20 hover:opacity-100`

export default TagBrands
