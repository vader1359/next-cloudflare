import React from "react"

function IconMenu(props) {
  const width = props.width || "100%"
  const height = props.height || "100%"
  const title = props.title || "q7nx0fub37hm0w11frm3"

  return (
    <svg
      height={height}
      width={width}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g
        fill="none"
        stroke="gray"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <path d="M1 12h22" stroke="gray" />
        <path d="M1 5h22" />
        <path d="M1 19h22" />
      </g>
    </svg>
  )
}

export default IconMenu
