import Messenger from "../icons/IconMessenger"
import { useAtom } from "jotai"
import { isMessengerAtom } from "@/lib/atoms"
import Spinning from "../icons/IconSpinning"

const FacebookFakeButton = ({ className }) => {
  const [facebookMessenger, setFacebookMessenger] = useAtom(isMessengerAtom)

  const triggerFacebookMessenger = () => {
    setFacebookMessenger(true)
  }

  return (
    <>
      <S.FacebookFakeButton
        className={className}
        onClick={triggerFacebookMessenger}
        css={facebookMessenger ? tw`hidden` : tw`fixed`}
      >
        <S.Messenger />
      </S.FacebookFakeButton>
    </>
  )
}

const S = {}

S.FacebookFakeButton = tw.div`z-50 cursor-pointer w-[44px] h-[44px] bottom-[88px] right-[24px]`

S.Messenger = tw(Messenger)``
S.Spinning = tw(Spinning)``

export default FacebookFakeButton
