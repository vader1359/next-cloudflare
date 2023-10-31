import { useKeenSlider } from "keen-slider/react"
import Link from "next/link"
import { useState } from "react"
import MaxWidth from "../layout/MaxWidth"
import Designer from "./Designer"
import HighlightDesigner from "./HighlightDesigner"

const highlightDesigners = [
  {
    name: "Poul Kjærholm",
    birthdate: "1829 - 1980",
    designer_cldr_id_portrat:
      "website/auto/21/1697414400000/crfQQz-wCFClmHDu9Zsx5w/UG4d3GlFo2iy7hkQjuQON80ZN3qx34uDlqQQepB3GAwfLNmB0JDich5sv6Bqweb03PCYGAGJXKWVhIYJwpqeuQ/sjUQynMpNuvdZ_NslHtF0TeFYjXYO89O3GqDR9RG2Hg",
    description:
      "Poul Kjærholm, a Danish designer, made significant contributions to modern furniture design. Known for his use of steel and natural materials, he created minimalist pieces with a harmonious blend of form and function.",
    link: "/designers/recucmwyxlwZGeEQR/poul-kjærholm",
  },
  {
    name: "Arne Jacobsen",
    birthdate: "1902 - 1971",
    designer_cldr_id_portrat:
      "website/auto/21/1697414400000/irobOXbymhsRU50l6sU8xw/wUM0ljL6RLwsYvwMROguV9PufEDg055weNqxZBdHXNnCmDHKLBra8-MtYb5M1I-ZMglyabxHdhi_3v9fTy3j2w/nqkvsrXtDqp3PdCiW9rRSgNhwAalxWQCwUAIn5Q7Ab8",
    description:
      "Arne Jacobsen, Danish architect and designer, left an indelible mark with iconic furniture like the Egg Chair. His functionalist style and innovative designs continue to shape modern architecture and interior design.",
    link: "/designers/rectpyvrsvB3qpSXS/arne-jacobsen",
  },
  {
    name: "Poul Henningsen",
    birthdate: "1894 - 1967",
    designer_cldr_id_portrat:
      "website/auto/21/1697414400000/TRwmCE5340MNW1VYLp21eQ/wsE5tmeRbMrOYbGGBk5tT5Cxd15auJ1VDKW4r1YsHX9cpMSDg0WTOX48TgypmTsXbBPGOcO9ePJdf9iGMwsX1g/9ccfzkvsZ-OuFyWV7sjG9HzuUhRhyOmVB5TlTTJ0xdg",
    link: "/designers/rec7YCGVjmEaJNiif/poul-henningsen",
    description:
      "Poul Henningsen revolutionized lighting design with his innovative use of layered shades to diffuse and direct light. His timeless fixtures, including the PH Artichoke and PH5, showcase his mastery of both aesthetics and illumination.",
  },
  {
    name: "Salvador Dalí",
    birthdate: "1904 - 1989",
    designer_cldr_id_portrat:
      "website/auto/21/1697414400000/RFzIz_nltsaF-d6Xv6zsbA/s93jal7jEBogjFMxbqN1OSsDNqZErep0PxUopF4Ns_GzMEWVEx5djcXC1xr7Oza0f5LAJrfh6RissI98rf7ATQ/RJ5Ufp_OzEAAAbF9yJRpgCw8ILyIuN3N-431CWPI_n0",

    description:
      "Salvador Dalí, a Spanish surrealist artist, pushed the boundaries of imagination with his eccentric and dreamlike paintings. Renowned for his melting clocks in The Persistence of Memory his art merged reality and fantasy.",
    link: "/designers/recVDnB1RnrJ0bdgC/salvador-dali",
  },
  {
    name: "Jaime Hayon",
    birthdate: "1974",
    designer_cldr_id_portrat:
      "website/auto/21/1697414400000/Qnpkw-mUo5xv0HaiMpmR3w/W8edpugMvDEMhic-y25EKnKjBL3YMzg8DyUvFAeDiDdWJOWjfrdtdaC-T0YARkW39exJQwNjHGVUgqngovcwZw/ihKa8rJ45zBaIRJPOkWas6VPme7IrJ7MVqSx1ukfxU8",
    link: "/products?filter_collection_jaime=1",
    description:
      "Jaime Hayon, a Spanish designer, is celebrated for his whimsical and innovative approach to design. His creations blend traditional craftsmanship with contemporary aesthetics, resulting in unique furniture, lighting, and decorative pieces.",
    link: "/designers/recn0VvRBsXeWeqAT/jaime-hayon",
  },
]

const HighlightDesigners = () => {
  const [opacities, setOpacities] = useState([])
  const [zIndices, setZIndices] = useState([])

  const [sliderRef] = useKeenSlider(
    {
      slides: 5,
      loop: true,
      renderMode: "performance",
      detailsChanged(s) {
        const new_opacities = s.track.details.slides.map(
          (slide) => slide.portion
        )
        const new_zindex = s.track.details.slides.map((slide) => slide.portion)
        setOpacities(new_opacities)
        setZIndices(new_zindex)
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
    <MaxWidth title="Highlight Designers">
      <S.HighlightDesigners>
        <S.Carousel ref={sliderRef} className="fader">
          {highlightDesigners.map((designer, idx) => (
            <S.HighlightDesigner
              key={idx}
              className="fader__slide"
              style={{ opacity: opacities[idx], zIndex: zIndices[idx] }}
            >
              <HighlightDesigner
                name={designer.name}
                birthdate={designer.birthdate}
                description={designer.description}
                portrait={designer.designer_cldr_id_portrat}
                link={designer.link}
              />
            </S.HighlightDesigner>
          ))}
        </S.Carousel>

        <S.List>
          <Link href="/designers/rec7YCGVjmEaJNiif/poul-henningsen">
            <Designer
              portrait="website/auto/21/1697414400000/TRwmCE5340MNW1VYLp21eQ/wsE5tmeRbMrOYbGGBk5tT5Cxd15auJ1VDKW4r1YsHX9cpMSDg0WTOX48TgypmTsXbBPGOcO9ePJdf9iGMwsX1g/9ccfzkvsZ-OuFyWV7sjG9HzuUhRhyOmVB5TlTTJ0xdg"
              name="Poul Henningsen"
            />
          </Link>
          <Link href="/designers/recn0VvRBsXeWeqAT/jaime-hayon">
            <Designer
              portrait="website/auto/21/1697414400000/Qnpkw-mUo5xv0HaiMpmR3w/W8edpugMvDEMhic-y25EKnKjBL3YMzg8DyUvFAeDiDdWJOWjfrdtdaC-T0YARkW39exJQwNjHGVUgqngovcwZw/ihKa8rJ45zBaIRJPOkWas6VPme7IrJ7MVqSx1ukfxU8"
              name="Jaime Hayon"
            />
          </Link>
          <Link href="/designers/recVDnB1RnrJ0bdgC/salvador-dali">
            <Designer
              portrait="website/auto/21/1697414400000/RFzIz_nltsaF-d6Xv6zsbA/s93jal7jEBogjFMxbqN1OSsDNqZErep0PxUopF4Ns_GzMEWVEx5djcXC1xr7Oza0f5LAJrfh6RissI98rf7ATQ/RJ5Ufp_OzEAAAbF9yJRpgCw8ILyIuN3N-431CWPI_n0"
              name="Salvador Dalí"
            />
          </Link>
          <Link href="/designers/recucmwyxlwZGeEQR/poul-kjærholm">
            <Designer
              portrait="website/auto/21/1697414400000/crfQQz-wCFClmHDu9Zsx5w/UG4d3GlFo2iy7hkQjuQON80ZN3qx34uDlqQQepB3GAwfLNmB0JDich5sv6Bqweb03PCYGAGJXKWVhIYJwpqeuQ/sjUQynMpNuvdZ_NslHtF0TeFYjXYO89O3GqDR9RG2Hg"
              name="Poul Kjærholm"
            />
          </Link>
          <Link href="/designers/rectpyvrsvB3qpSXS/arne-jacobsen">
            <Designer
              portrait="website/auto/21/1697414400000/irobOXbymhsRU50l6sU8xw/wUM0ljL6RLwsYvwMROguV9PufEDg055weNqxZBdHXNnCmDHKLBra8-MtYb5M1I-ZMglyabxHdhi_3v9fTy3j2w/nqkvsrXtDqp3PdCiW9rRSgNhwAalxWQCwUAIn5Q7Ab8"
              name="Arne Jacobsen"
            />
          </Link>
          <Link href="/designers/recasQ8t21zyfG4FX/achille-castiglioni">
            <Designer
              portrait="website/auto/21/1697414400000/2-TdWu2iX0hNoaqEcKhH6Q/QLfNFLftWOlQHtlqWGOnzQUBakx6yW0DjMEy_Enq7m69aBunC0Qz9mqpNah0BtnCEXghIHr8x8xh7_CAWQO4XA/4TwbbetWlwN18TPADaC4PNJT6TEXT6aNa2TpANa9b8Q"
              name="Achille Castiglioni"
            />
          </Link>
          <Link href="/designers/recA81xEA4l2FyyUr/philippe-starck">
            <Designer
              portrait="website/auto/21/1697414400000/oqUBl9Huoj1fZcHY5Vasvg/Vg-9bO8Ss2R3VtQlSnQ8vYLpPOiyzV8vmrZqbM3OQmp5YjA1jnpdaZqgMo3S2_0TpKrrWHdmMXJDfbGOdJGuBA/Q8rbt9fxpIHQ_PWZxRopbegqBCrq0h-9M10aBeUoDQQ"
              name="Philippe Starck"
            />
          </Link>
          <Link href="/designers/recfY2HbNGYX88Npf/hee-welling">
            <Designer
              portrait="website/auto/21/1697414400000/qiokShUP_faloaMaUgjwMQ/xSTt_3U07MhLOhvZM30YD9P5f7xD-VyPWcXIzp-lH3fWrkS3XiHkEP_8KsZm0i2JPABDC05p8rRzPN2TodKp8g/M6_i862zBaV5liw_Ypq6nwak08Fm4VqEu5YLzSgp6l8"
              name="Hee Welling"
            />
          </Link>
        </S.List>
      </S.HighlightDesigners>
    </MaxWidth>
  )
}

const S = {}

S.HighlightDesigners = tw.div`flex flex-col grid-cols-2 gap-y-16 xl:grid`

S.HighlightDesigner = tw.div`absolute top-0 w-full h-full `

S.Carousel = tw.div`relative overflow-hidden h-35r md:h-[32rem] lg:h-[31rem] xl:h-[33rem]`
S.List = tw.div`grid w-full grid-cols-2 grid-rows-2 xl:pl-16 md:grid-cols-4 gap-x-12 gap-y-12 lg:border-l-[1px]`

S.Designers = tw.div``

S.Designer = tw.div``

export default HighlightDesigners
