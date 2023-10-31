import { useKeenSlider } from "keen-slider/react"
import { useState } from "react"
import MaxWidth from "../layout/MaxWidth"
import Collection from "./Collection"
import CarouselArrow from "../common/CarouselArrow"

const collections = [
  {
    name: "Poul Kjærholm Collection",
    designer: "Poul Kjærholm",
    image: "website-fixed/collections/pk-collection.jpg",
    link: "/products?filter_collection_pk=1",
    description:
      " A piece of Poul Kjærholm furniture is like an elegant written character that gives the room in which it stands solidity and calm.",
    designer_cldr_id_portrait:
      "website/auto/21/1697414400000/crfQQz-wCFClmHDu9Zsx5w/UG4d3GlFo2iy7hkQjuQON80ZN3qx34uDlqQQepB3GAwfLNmB0JDich5sv6Bqweb03PCYGAGJXKWVhIYJwpqeuQ/sjUQynMpNuvdZ_NslHtF0TeFYjXYO89O3GqDR9RG2Hg",
  },
  {
    name: "Balcony Collection",
    designer: "Ronan & Erwan Bouroullec",
    link: "/products?filter_collection_balcony=1",
    image: "website-fixed/collections/balcony-collection.jpg",
    description:
      "Balcony is a collection of outdoor furniture for HAY in powder coated or hot galvanised steel.",
    designer_cldr_id_portrait:
      "website/auto/21/1697414400000/7DvKYx7uXjGCDxTVS-ZCIQ/0nfUMJqOqakLeKl7x_Fav3otYgH3uuy_NlVlnyxrqoOEIySPPDj31S_KvYZrK_fUbJqbeZpRcVkLRA0cYzVidg/_z65RrcdDlSBza4oe1IQKrsQjcBoovtpEoJBwIqGmAQ",
  },
  {
    name: "Jaime Hayon Collection",
    designer: "Jaime Hayon",
    image: "website-fixed/collections/jaime-collection.jpg",
    link: "/products?filter_collection_jaime=1",
    description:
      "Jaime Hayon, is a Spanish artist and designer known for his designs, interiors, urban installations, sculptures, and paintings.",
    designer_cldr_id_portrait:
      "website/auto/21/1697414400000/Qnpkw-mUo5xv0HaiMpmR3w/W8edpugMvDEMhic-y25EKnKjBL3YMzg8DyUvFAeDiDdWJOWjfrdtdaC-T0YARkW39exJQwNjHGVUgqngovcwZw/ihKa8rJ45zBaIRJPOkWas6VPme7IrJ7MVqSx1ukfxU8",
  },
  {
    name: "PH Collection",
    designer: "Poul Henningsen",
    image: "website-fixed/collections/ph-collection.jpg",
    link: "/products?filter_collection_ph=1",
    description:
      "The shape of light creates space and our products should live harmoniously within the space they define - indirect, soft and inviting.",
    designer_cldr_id_portrait:
      "website/auto/21/1697414400000/TRwmCE5340MNW1VYLp21eQ/wsE5tmeRbMrOYbGGBk5tT5Cxd15auJ1VDKW4r1YsHX9cpMSDg0WTOX48TgypmTsXbBPGOcO9ePJdf9iGMwsX1g/9ccfzkvsZ-OuFyWV7sjG9HzuUhRhyOmVB5TlTTJ0xdg",
  },
]

const Collections = () => {
  const [opacities, setOpacities] = useState([])
  const [zIndices, setZIndices] = useState([])

  const [loaded, setLoaded] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  const [sliderRef, instanceRef] = useKeenSlider(
    {
      slides: 4,
      loop: true,
      renderMode: "performance",
      initial: 0,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel)
      },
      created() {
        setLoaded(true)
      },
      detailsChanged(s) {
        const new_opacities = s.track.details.slides.map(
          (slide) => slide.portion
        )
        const new_zindex = s.track.details.slides.map((slide) => slide.portion)
        setOpacities(new_opacities)
        setZIndices(new_zindex)
      },
    },
    [
      (slider) => {
        let timeout
        let mouseOver = false
        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => {
            slider.next()
          }, 3000)
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      },
    ]
  )

  const carouselTapNext = (e) => {
    e.stopPropagation() || instanceRef.current.next()
  }
  const carouselTapPrev = (e) => {
    e.stopPropagation() || instanceRef.current.prev()
  }

  return (
    <S.Collections>
      <S.Carousel ref={sliderRef} className="fader">
        {collections.map((collection, idx) => (
          <S.Collection
            key={collection.name}
            className="fader__slide"
            style={{ opacity: opacities[idx], zIndex: zIndices[idx] }}
          >
            <Collection
              onClickNext={carouselTapNext}
              onClickPrev={carouselTapPrev}
              collection={collection}
              active={opacities[idx]}
            />
          </S.Collection>
        ))}
      </S.Carousel>
      {loaded && instanceRef.current && (
        <CarouselArrow
          tw="justify-center mt-6 md:hidden"
          onClickPrev={carouselTapPrev}
          onClickNext={carouselTapNext}
        />
      )}
    </S.Collections>
  )
}

const S = {}

S.Collections = tw(MaxWidth)`w-full xl:w-1/2 2xl:w-1/3`

S.Collection = tw.div`absolute top-0 w-full h-full `

S.Carousel = tw.div`relative overflow-hidden h-30r`

export default Collections
