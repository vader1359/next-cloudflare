import StylistPick from "./StylistPick"

const StylistPickStack = ({ className, items }) => {
  return (
    <S.StylistPickStack className={className}>
      <StylistPick item={items[0]} />
      <StylistPick item={items[1]} />
    </S.StylistPickStack>
  )
}

const S = {}

S.StylistPickStack = tw.div`grid w-full h-full grid-rows-2 gap-y-8`

export default StylistPickStack
