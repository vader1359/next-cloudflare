const Space = ({ className, size }) => {
  return (
    <S.Space
      className={className}
      css={
        (size == "large" && tw`h-20 md:h-28 xl:h-40`) ||
        (size == "medium" && tw`h-12 md:h-20 xl:h-28`) ||
        (size == "small" && tw`h-8 md:h-12 xl:h-16`) ||
        (size == "tiny" && tw`h-6 md:h-10`)
      }
    ></S.Space>
  )
}

const S = {}

S.Space = tw.div`w-full`

export default Space
