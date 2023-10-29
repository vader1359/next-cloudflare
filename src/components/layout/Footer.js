import Link from "next/link"
import MaxWidth from "./MaxWidth"

export default function Footer() {
  return (
    <S.Footer>
      <MaxWidth>
        <S.Container>
          <S.Column>
            <S.Title>About Us</S.Title>
            <S.Links>
              <S.Link href="/about">About nanoHome</S.Link>
              <S.Link href="/policies">Policies</S.Link>
              {/* <S.Link href="/careers">Careers</S.Link> */}
              <S.Link href="/maintenance">Maintainance Guide</S.Link>
              <S.Link href="/news">News / Press</S.Link>
            </S.Links>
          </S.Column>
          <S.Column>
            <S.Title>Services</S.Title>
            <S.Links>
              <S.Link href="/services/interior-decoration">
                Interior Decoration
              </S.Link>
              <S.Link href="/services/lighting-design">Lighting Design</S.Link>
            </S.Links>
          </S.Column>
          <S.Column>
            <S.Title>Products</S.Title>
            <S.Links>
              <S.Link href="/products/category/usm">USM</S.Link>
              <S.Link href="/products/category/furniture">
                Furniture
              </S.Link>
              <S.Link href="/products/category/lighting">
                Lighting
              </S.Link>
              {/* <S.Link href="/products?categoryID=vHuLmZFynnw">
              Architectural Lighting
            </S.Link> */}
              <S.Link href="/products/category/accessories">
                Accessories
              </S.Link>
              {/* <S.Link href="/products?categoryID=DLcuTlhzv_x">Lifestyle</S.Link> */}
            </S.Links>
          </S.Column>

          <S.Column>
            <S.Title>Assets</S.Title>
            <S.Links>
              <S.Link href="/brands">Our Brands</S.Link>
              <S.Link href="/designers">Designers</S.Link>
              <S.Link href="/beautifulliving">#Beautifulliving</S.Link>
              <S.Link href="/catalogs">Catalogs</S.Link>
            </S.Links>
          </S.Column>
          <S.ShowroomContainer>
            <S.Showrooms>
              <S.Title>Our Showrooms</S.Title>
              <S.Showroom>
                <S.ShowroomName>nanoHome Gallery Saigon</S.ShowroomName>
                <S.Address>
                  675 - 677 Dien Bien Phu, Ward 25, Binh Thanh District, Ho Chi
                  Minh City
                </S.Address>
                <S.SocialIcons>
                  <S.Link href="https://www.instagram.com/nanohome.gallery">
                    <S.Icon src="https://ik.imagekit.io/w0czbilr09/website-next/icons/instagram-icon.svg?updatedAt=1626941700015" />
                  </S.Link>
                  <S.Link href="https://www.facebook.com/nanohome.gallery">
                    <S.Icon src="https://ik.imagekit.io/w0czbilr09/website-next/icons/facebook-icon.svg?updatedAt=1626941699391" />
                  </S.Link>
                </S.SocialIcons>
              </S.Showroom>
              <S.Showroom>
                <S.ShowroomName>House of Fritz Hansen</S.ShowroomName>
                <S.Address>
                  215G6 Nguyen Van Huong, Thao Dien Ward, District 2, Ho Chi
                  Minh City
                </S.Address>
                <S.SocialIcons>
                  <S.Link href="https://www.instagram.com/fritzhansenstore_vietnam">
                    <S.Icon src="https://ik.imagekit.io/w0czbilr09/website-next/icons/instagram-icon.svg?updatedAt=1626941700015" />
                  </S.Link>
                  <S.Link href="https://www.facebook.com/FritzHansenVN">
                    <S.Icon src="https://ik.imagekit.io/w0czbilr09/website-next/icons/facebook-icon.svg?updatedAt=1626941699391" />
                  </S.Link>
                </S.SocialIcons>
              </S.Showroom>
            </S.Showrooms>
          </S.ShowroomContainer>
          <S.InfoWrapper>
            <S.Title>Contacts</S.Title>
            <S.ContactInfo>
              <S.Icon src="https://ik.imagekit.io/w0czbilr09/website-next/icons/phone-icon-one-stroke.svg?updatedAt=1626939545057" />
              <S.Info>(+84) 33 948 7632</S.Info>
            </S.ContactInfo>
            <S.ContactInfo>
              <S.Icon src="https://ik.imagekit.io/w0czbilr09/website-next/icons/email-icon-one-stroke.svg?updatedAt=1626939544456" />
              <S.Info>info@nanohome.vn</S.Info>
            </S.ContactInfo>
            <S.ContactInfo>
              <S.Icon src="https://ik.imagekit.io/w0czbilr09/website-next/icons/web-icon-one-stroke.svg?updatedAt=1626939545945" />
              <S.Info>nanohome.vn</S.Info>
            </S.ContactInfo>
          </S.InfoWrapper>
        </S.Container>
      </MaxWidth>
    </S.Footer>
  )
}

const S = {}
S.Footer = tw.div`left-0 right-0 py-16 mb-16 bg-green-700 abottom-0 md:py-24 xl:py-16 z-1`

S.Link = tw(
  Link
)`text-sm font-light opacity-80 text-brand-white hover:opacity-100 hover:fotn-semibold`

S.Container = tw.div`grid grid-cols-2 gap-y-12 gap-x-8 md:grid-cols-4 2xl:grid-cols-8`

S.ShowroomContainer = tw.div`w-full max-w-xs col-span-2 md:grid-cols-2`

S.Column = tw.div`flex flex-col w-full `

S.Title = tw.div`mb-6 font-serif text-xl leading-snug lg:mb-8 text-brand-white`

S.Links = tw.div`flex flex-col pl-2 space-y-5 `

S.Icon = tw.img`object-contain w-5 h-5 `

S.InfoWrapper = tw.div`col-span-2 space-y-4 md:col-span-2`

S.Showrooms = tw.div`space-y-8 `

S.Showroom = tw.div`pl-2 `

S.ContactInfo = tw.div`flex items-center pl-2 space-x-5 `

S.Info = tw.div`text-sm font-light text-brand-white`

S.ShowroomName = tw.div`mb-3 text-base italic font-bold uppercase text-brand-white`

S.Address = tw.div`mb-4 text-sm leading-relaxed text-brand-white`

S.SocialIcons = tw.div`flex gap-3 `

S.Icon = tw.img`w-4 h-4 `

S.Divider = tw.div`hidden h-full opacity-50 bg-brand-white lg:block`
