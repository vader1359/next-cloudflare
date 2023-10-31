import { useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Card from "./Card"
import MaxWidth from "@/components/layout/MaxWidth"
import CarouselArrow from "@/components/common/CarouselArrow"

const CardsSimilar = ({ products }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    mode: "free-snap",
    renderMode: "performance",
    slides: { perView: "auto", spacing: 72 },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  const carouselTapNext = (e) => {
    e.stopPropagation() || instanceRef.current.next()
  }
  const carouselTapPrev = (e) => {
    e.stopPropagation() || instanceRef.current.prev()
  }

  return (
    <S.CardsSimilar
      title={`You may like...`} 
      component={
        loaded &&
        instanceRef.current && (
          <CarouselArrow
            onClickPrev={carouselTapPrev}
            onClickNext={carouselTapNext}
          />
        )
      }
    >
      <S.Carousel ref={sliderRef} className="keen-slider">
        {products.map((product) => (
          <Card
            className="keen-slider__slide"
            variant={product}
            key={product.id}
            css={
              product.fields.packshot_size == 2
                ? tw`min-w-[343px] md:min-w-[480px]xl:min-w-[640px]`
                : tw`min-w-[170px] md:min-w-[240px] lg:min-w-[320px] xl:min-w-[360px]`
            }
          />
        ))}
      </S.Carousel>
    </S.CardsSimilar>
  )
}

const S = {}

S.Carousel = tw.div`w-full overflow-hidden`
S.CardsSimilar = tw(MaxWidth)``

export default CardsSimilar
