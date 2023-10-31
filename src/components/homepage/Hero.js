import { useKeenSlider } from "keen-slider/react"
import { CldImage } from "next-cloudinary"
import { useState } from "react"
import MaxWidth from "../layout/MaxWidth"
import { shimmerImage } from "@/utilities/shimmerImage"
import { slugify } from "@/utilities/slugify"

const heroes = [
  {
    image: "website-fixed/heroes/desktop/desktop-1",
    alt: "A living room with a gray couch, a wooden coffee table, and a yellow USM Haller bookshelf in the background.",
  },
  {
    image: "website-fixed/heroes/desktop/desktop-2",
    alt: "A living room with blue walls, a blue couch, and blue chairs. There is a USM Haller credenza in the background.",
  },
  {
    image: "website-fixed/heroes/desktop/desktop-3",
    alt: "A USM Haller cabinet filled with vinyl records next to two speakers.",
  },
  {
    image: "website-fixed/heroes/desktop/desktop-4",
    alt: "A living room with Series 7 Chairs from Fritz hansen and a wooden dining table",
  },
  {
    image: "website-fixed/heroes/desktop/desktop-5",
    alt: "Collection of STOFF Nagel modular candle holder",
  },
  {
    image: "website-fixed/heroes/desktop/desktop-6",
    alt: "Pink Series 7 Chair with Super Elliptical dining table from Fritz Hansen",
  },
  {
    image: "website-fixed/heroes/desktop/desktop-7",
    alt: "Outdoor furniture Balcony chart and coffe table collection from HAY",
  },
  {
    image: "website-fixed/heroes/desktop/desktop-8",
    alt: "STOFF Nagel candle holder collection with candles on a dining table",
  },
  {
    image: "website-fixed/heroes/desktop/desktop-9",
    alt: "PH 5 Pendant collection from Louis Poulsen",
  },
  {
    image: "website-fixed/heroes/desktop/desktop-10",
    alt: "USM Haller Green cabinet in shining room",
  },
  {
    image: "website-fixed/heroes/desktop/desktop-11",
    alt: "Outdoor Furniture Balcony Collection from HAY with a table and chairs",
  },
  {
    image: "website-fixed/heroes/desktop/desktop-2",
    alt: "Fritz Hansen Egg Chair and Swan Chair and Alphabet Sofa and a coffee table in living room with glasss",
  },
]

const Heroes = () => {
  const [opacities, setOpacities] = useState([])

  const [sliderRef] = useKeenSlider(
    {
      slides: 12,
      loop: true,
      renderMode: "performance",
      detailsChanged(s) {
        const new_opacities = s.track.details.slides.map(
          (slide) => slide.portion
        )
        setOpacities(new_opacities)
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

  return (
    <S.Heroes>
      <S.Carousel ref={sliderRef} className="fader">
        {heroes.map((hero, idx) => (
          <S.Hero
            key={idx}
            className="fader__slide"
            style={{ opacity: opacities[idx] }}
          >
            <S.Image
              priority
              src={hero.image}
              // width={1440}
              // height={560}
              fill
              sizes="90vw"
              alt={hero.alt}
              placeholder={shimmerImage()}
              seoSuffix={slugify(hero.alt)}
              tw="rounded-xl"
            />
          </S.Hero>
        ))}
      </S.Carousel>
    </S.Heroes>
  )
}

const S = {}

S.Heroes = tw(MaxWidth)``

S.Hero = tw.div`absolute top-0 w-full h-full `

S.Carousel = tw.div`relative overflow-hidden h-15r md:h-96 lg:h-35r`

S.Image = tw(CldImage)`absolute object-cover w-full h-full bg-transparent `

export default Heroes
