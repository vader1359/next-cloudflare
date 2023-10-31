import FadeIn from "react-fade-in/lib/FadeIn"
import MaxWidth from "../layout/MaxWidth"
import StylistPickStack from "./StylistPickStack"
import { splitArray } from "@/utilities/splitArray"
import { useKeenSlider } from "keen-slider/react"
import { useState, useRef } from "react"
import IconArrowRight from "../icons/IconArrowRight"

import CarouselArrow from "../common/CarouselArrow"

const StylistPicks = ({ variants }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    breakpoints: {
      "(min-width: 480px)": {
        slides: { perView: 2, spacing: 64 },
      },
      "(min-width: 672px)": {
        slides: { perView: 3, spacing: 128 },
      },
      "(min-width: 896px)": {
        slides: { perView: 4, spacing: 128 },
      },
      "(min-width: 1280)": {
        slides: { perView: 4, spacing: 64 },
      },
    },
    slides: { perView: 1, spacing: 24 },
    renderMode: "performance",
    loop: true,
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  const splittedStylistPicks = splitArray(
    variants.sort((a, b) => a.priority - b.priority),
    2
  )

  const carouselTapNext = (e) => {
    e.stopPropagation() || instanceRef.current.next()
  }
  const carouselTapPrev = (e) => {
    e.stopPropagation() || instanceRef.current.prev()
  }

  return (
    <S.StylistPicks
      title="Stylist's Picks"
      className="navigation-wrapper"
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
      <FadeIn>
        <S.Carousel ref={sliderRef} className="keen-slider">
          {splittedStylistPicks.map((items, idx) => (
            <StylistPickStack
              key={idx}
              className="keen-slider__slide"
              items={items}
            />
          ))}
        </S.Carousel>
      </FadeIn>
    </S.StylistPicks>
  )
}

const S = {}

S.StylistPicks = tw(MaxWidth)`w-full`

S.Icon = tw.div`w-12 h-12`

S.Carousel = tw.div`flex w-full overflow-hidden h-40r`

S.Item = tw.div``

S.Arrow = tw.div``

export default StylistPicks
