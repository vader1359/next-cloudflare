import React from "react"

function IconSearch(props) {
  const width = props.width || "100%"
  const height = props.height || "100%"
  const title = props.title || "q3lhp0cquilppixz9gui"

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
        <path d="M22 22l-6.344-6.344" stroke="gray" />
        <circle cx="10" cy="10" r="8" />
      </g>
    </svg>
  )
}

export default IconSearch
