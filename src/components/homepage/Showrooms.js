import MaxWidth from "../layout/MaxWidth"
import Showroom from "./Showroom"
import CarouselArrow from "../common/CarouselArrow"

import { useKeenSlider } from "keen-slider/react"
import { useState } from "react"
import "keen-slider/keen-slider.min.css"

const BREAKPOINTS = { sm: 0, md: 768, lg: 1024, xl: 1440, xxl: 1536 }

export const showroomsData = {
  showrooms: [
    {
      id: "house",
      title: "House of Fritz Hansen",
      address:
        "215G6 Nguyen Van Huong, Thao Dien Ward, District 2, Thu Duc City, Vietnam",
      status: null,
      image: {
        id: "bo7gTB4Pa",
        imagePath:
          "website-fixed/showrooms/house",
        alt: "",
      },
    },
    {
      id: "gallery_saigon",
      title: "nanoHome Gallery Saigon",
      address:
        "Level 1 to 5, no.675 - 677 Dien Bien Phu Street, Ward 25, Binh Thanh District, Ho Chi Minh City, Vietnam",
      status: null,
      image: {
        id: "2eaXnyZrnR",
        imagePath:
          "website-fixed/showrooms/gallery-saigon",
        alt: "",
      },
    },
    {
      id: "gallery_hanoi",
      title: "nanoHome Gallery Hanoi",
      address:
        "83 Lang Street, Nga Tu So Ward, Dong Da District, Hanoi, Vietnam",
      status: "Opening Soon",
      image: {
        id: "3yY8v9xtGO",
        imagePath:
          "website-fixed/showrooms/gallery-hanoi",
        alt: "",
      },
    },
  ],
}

const Showrooms = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    breakpoints: {
      "(min-width: 480px)": {
        slides: { perView: 1 },
      },
      "(min-width: 672px)": {
        slides: { perView: 2, spacing: 24 },
      },
      "(min-width: 896px)": {
        slides: { perView: 3, spacing: 24 },
      },
      "(min-width: 1280)": {
        slides: { perView: 3, spacing: 64 },
      },
    },
    loop: true,
    renderMode: "performance",
    slides: {
      perView: 1,
      spacing: 24,
    },
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
    <S.Showrooms
      title="Our Showrooms"
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
        {showroomsData.showrooms.map((showroom) => {
          return (
            <Showroom
              key={showroom.id}
              showroom={showroom}
              className="keen-slider__slide"
              tw="h-30"
            />
          )
        })}
      </S.Carousel>
    </S.Showrooms>
  )
}

const S = {}

S.Showrooms = tw(MaxWidth)``
S.Carousel = tw.div`relative overflow-hidden `
S.Showroom = tw.div`bg-green-300`

export default Showrooms
