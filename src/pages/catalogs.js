import Iframe from "react-iframe"
import MaxWidth from "@/components/layout/MaxWidth"

const BREAKPOINTS = { sm: 0, md: 768, lg: 1024, xl: 1440, xxl: 1536 }

const Catalogs = () => {
  return (
    <S.Iframe
      className="airtable-embed"
      url="https://airtable.com/embed/app0XxsP2fN5kyX9a/shrCnEQ2npfsGgtjO?backgroundColor=blueLight&viewControls=on"
      frameBorder="0"
      onmousewheel=""
      width="90%"
      height="1200"
      style="background: transparent; border: 1px solid #ccc;"
      display="block"
      position="relative"
    ></S.Iframe>
  )
}

const S = {}

S.Catalogs = tw(MaxWidth)``
S.Iframe = tw(Iframe)`m-auto h-[1200px] md:h-[1800px]`

export default Catalogs
