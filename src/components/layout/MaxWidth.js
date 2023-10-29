import Space from "./Space"

const MaxWidth = ({ className, children, title, component, space }) => {
  return (
    <S.MaxWidth className={className}>
      <S.SectionHeader>
        {title && (
          <S.Name>
            <S.H2>{title}</S.H2>
          </S.Name>
        )}
        {component && <S.Component>{component}</S.Component>}
      </S.SectionHeader>
      {title && <Space size={space || "small"} />}
      {children}
    </S.MaxWidth>
  )
}

const S = {}

S.MaxWidth = tw.section`max-w-xs m-auto sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl 3xl:max-w-3xl`

S.SectionHeader = tw.div`flex items-center justify-between w-full space-x-8 md:justify-start`

S.Name = tw.div`flex items-center justify-between gap-x-8 md:justify-start`

S.Component = tw.div`mb-2`

S.H2 = tw.h2`font-serif text-2xl lg:text-3xl`

export default MaxWidth
