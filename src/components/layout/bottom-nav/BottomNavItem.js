import Image from "next/image"
import Link from "next/link"

const BottomNavItem = ({ icon, name, href, onClick, active, colorful }) => {
  return (
    <S.BottomNavItem
      href={href}
      className={
        active || colorful ? "filter-none" : "filter grayscale hover:filter-none"
      }
      onClick={onClick}
    >
      <Image
        src={icon}
        width={24}
        height={24}
        tw="w-6 h-6 mb-2"
        alt={`${name} icon`}
      />
      <span tw="text-xs dark:text-gray-400 group-hover:text-green-600 dark:group-hover:text-green-500">
        {name}
      </span>
    </S.BottomNavItem>
  )
}

const S = {}

S.BottomNavItem = tw(
  Link
)`inline-flex flex-col items-center justify-center px-5 text-green-600 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 last:text-red-600`

export default BottomNavItem
