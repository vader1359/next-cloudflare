import Spinning from "../icons/IconSpinning"

const FacebookFakeSpinner = ({ className }) => {


  return (
    <>
      <S.FacebookFakeSpinner className={className}>
        <Spinning />
      </S.FacebookFakeSpinner>
    </>
  )
}

const S = {}

S.FacebookFakeSpinner = tw.div`fixed z-40 cursor-pointer w-[40px] h-[40px] bottom-[90px] right-[26px]`

S.Spinning = tw(Spinning)``

export default FacebookFakeSpinner
