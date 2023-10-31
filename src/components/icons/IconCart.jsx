import React from "react"
import { useCart } from "react-use-cart"

function IconCart({ className, onClick, ...props }) {
  const title = props.title || "shopping bag"
  const { totalUniqueItems } = useCart()


  return (
    <div
      tw="relative flex items-center scale-75"
      onClick={onClick}
      className={className}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        tw="cursor-pointer h-7 w-[40px]"
      >
        <title>bag-17</title>
        <g fill="gray">
          <path
            fill="gray"
            d="M26,0H6C3.8,0,2,1.8,2,4v27c0,0.6,0.4,1,1,1h26c0.6,0,1-0.4,1-1V4C30,1.8,28.2,0,26,0z M16,20 c-4.4,0-8-3.6-8-8c0-0.6,0.4-1,1-1s1,0.4,1,1c0,3.3,2.7,6,6,6s6-2.7,6-6c0-0.6,0.4-1,1-1s1,0.4,1,1C24,16.4,20.4,20,16,20z M26,6H6 C4.9,6,4,5.1,4,4s0.9-2,2-2h20c1.1,0,2,0.9,2,2S27.1,6,26,6z"
          ></path>
        </g>
      </svg>
      {totalUniqueItems > 0 && (
        <span class="absolute px-2 text-white bg-green-600 rounded-full lg:left-5 lg:text-[9px] -top-2 left-4 p-0.5">
          {totalUniqueItems}
        </span>
      )}
    </div>
  )
}

export default IconCart
