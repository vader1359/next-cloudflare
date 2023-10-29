import React from "react"

function IconArrowRight(props) {
  const width = props.width || "100%"
  const height = props.height || "100%"
  const title = props.title || "right arrow"

  return (
    <svg
      height={height}
      width={width}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g
        fill="black"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1"
        transform="translate(0.5 0.5)"
      >
        <polyline
          fill="none"
          points="7,2 17,12 7,22 "
          stroke="black"
          transform="translate(0, 0)"
        />
      </g>
    </svg>
  )
}

export default IconArrowRight
