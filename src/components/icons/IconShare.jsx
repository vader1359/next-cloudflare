import React from "react"

function IconShare(props) {
  const width = props.width || "100%"
  const height = props.height || "100%"
  const title = props.title || "link"

  return (
    <svg
      height={height}
      width={width}
      viewBox="0 0 24 24"
      className={props.className}
      xmlns="http://www.w3.org/2000/svg"
      onClick={props.onClick}
    >
      <title>{title}</title>
      <g
        fill="green"
        stroke="green"
        strokeLinecap="square"
        strokeLinejoin="miter"
        strokeMiterlimit="10"
        strokeWidth="2"
      >
        <path
          d="M11,6l2.575-2.575a5.011,5.011,0,0,1,7,0h0a5.011,5.011,0,0,1,0,7L18,13"
          fill="none"
          stroke="green"
        />
        <path
          d="M13,18l-2.575,2.575a5.011,5.011,0,0,1-7,0h0a5.011,5.011,0,0,1,0-7L6,11"
          fill="none"
          stroke="green"
        />
        <line fill="none" x1="8" x2="16" y1="16" y2="8" />
      </g>
    </svg>
  )
}

export default IconShare
