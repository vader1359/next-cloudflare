import MaxWidth from "@/components/layout/MaxWidth"
import { roomsAtom } from "@/lib/atoms"
import { useAtom } from "jotai"
import "keen-slider/keen-slider.min.css"
import { useKeenSlider } from "keen-slider/react"
import { useState } from "react"

const rooms = ["outdoor", "bedroom", "living-room", "office", "dining-room", "kitchen", "family-room"]

const Tags = ({ className }) => {
  const [activeRooms, setActiveRooms] = useAtom(roomsAtom)
  const [currentSlide, setCurrentSlide] = useState(0)

  const [sliderRef, instanceRef] = useKeenSlider({
    mode: "free-snap",
    renderMode: "performance",
    slides: { perView: "auto", spacing: 8 },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  const toggleRoom = (room) => {
    setActiveRooms((prevActiveRooms) => {
      const updatedRooms = new Set(prevActiveRooms)
      if (updatedRooms.has(room)) {
        updatedRooms.delete(room)
      } else {
        updatedRooms.add(room)
      }
      return updatedRooms
    })
    window.scrollTo(0, 0)
  }

  return (
    <S.Tags className={className}>
      <MaxWidth tw="w-screen">
        <S.Rooms ref={sliderRef} className="keen-slider" tw="max-w-screen">
          {rooms.map((room) => (
            <S.Room
              className="keen-slider__slide"
              key={room}
              css={activeRooms.has(room) && tw`text-white bg-green-600`}
              onClick={() => toggleRoom(room)}
            >
              {room}
            </S.Room>
          ))}
        </S.Rooms>
        <hr className="h-px my-4 mb-0 bg-gray-200 border-0 dark:bg-gray-700" />
      </MaxWidth>
    </S.Tags>
  )
}

const S = {}

S.Tags = tw.div`fixed flex flex-col justify-center pt-6 bg-white top-16`
S.Rooms = tw.div`flex`

S.Room = tw.div`flex justify-center py-1 text-xs text-green-600 border-gray-200 rounded-full cursor-pointer md:text-base border-[1px] hover:border-green-600 min-w-[88px] max-w-[88px] md:min-w-[112px] md:max-w-[112px]`

export default Tags
