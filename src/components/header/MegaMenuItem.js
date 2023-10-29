import { CldImage } from "next-cloudinary"
import Link from "next/link"
import { shimmerImage } from "@/utilities/shimmerImage"
import { slugify } from "@/utilities/slugify"
const MegaMenuItem = ({ href, icon, name, className }) => {
  return (
    <S.MegaMenuItem className={className}>
      {icon && (
        <S.Icon
          src={icon}
          alt={`category-icon-${name}`}
          seoSuffix={slugify(`category-icon-${name}`)}
          width={96}
          height={96}
          placeholder={shimmerImage()}
        />
      )}

      <Link
        href={href}
        tw="block p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
        css={icon ? tw`col-span-3` : tw`col-span-4`}
      >
        <div tw="font-medium md:text-sm lg:text-lg md:font-medium">{name}</div>
      </Link>
    </S.MegaMenuItem>
  )
}

const S = {}

S.MegaMenuItem = tw.li`grid items-center h-32 grid-cols-4 py-4 border-b-[1px] md:w-3/4 flex-start just last:border-b-[1px] last:border-b-black md:last:border-b-[1px] first:pt-8`

S.Icon = tw(CldImage)`object-contain object-center w-20 h-20 col-span-1`

export default MegaMenuItem
