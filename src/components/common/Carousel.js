import { useState } from "react"
import { useKeenSlider } from "keen-slider/react"
const Carousel = ({ children }) => {
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
    <S.Carousel ref={sliderRef} className="fader">
      {children}
    </S.Carousel>
  )
}

const S = {}

S.Carousel = tw.div`relative w-full h-full overflow-hidden `

export default Carousel
