import IconArrowLeft from "../icons/IconArrowLeft"
import IconArrowRight from "../icons/IconArrowRight"

const CarouselArrow = ({
  className,
  onClickPrev,
  onClickNext,
  firstSlide,
  lastSlide,
}) => {
  return (
    <S.CarouselArrow className={className}>
      <S.Icon onClick={onClickPrev} css={firstSlide && tw`cursor-default opacity-20`}>
        <IconArrowLeft />
      </S.Icon>
      <S.Icon onClick={onClickNext} css={lastSlide && tw`cursor-default opacity-20`}>
        <IconArrowRight />
      </S.Icon>
    </S.CarouselArrow>
  )
}

const S = {}

S.CarouselArrow = tw.div`flex w-16 h-5 space-x-4 md:h-6`

S.Icon = tw.div`cursor-pointer`

export default CarouselArrow
