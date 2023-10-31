import React from "react"

function IconArrowLeft(props) {
  const width = props.width || "100%"
  const height = props.height || "100%"
  const title = props.title || "left arrow"

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
          points="17,2 7,12 17,22 "
          stroke="black"
          transform="translate(0, 0)"
        />
      </g>
    </svg>
  )
}

export default IconArrowLeft
