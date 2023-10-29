import React from "react"

function IconSearchClose(props) {
  const width = props.width || "100%"
  const height = props.height || "100%"
  const title = props.title || "icon search close"

  return (
    <svg
      height={height}
      width={width}
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill="gray">
        <path
          d="M8,0C3.6,0,0,3.6,0,8s3.6,8,8,8,8-3.6,8-8S12.4,0,8,0Zm3.182,9.768c.195,.195,.195,.512,0,.707l-.707,.707c-.195,.195-.512,.195-.707,0l-1.768-1.768-1.768,1.768c-.195,.195-.512,.195-.707,0l-.707-.707c-.195-.195-.195-.512,0-.707l1.768-1.768-1.768-1.768c-.195-.195-.195-.512,0-.707l.707-.707c.195-.195,.512-.195,.707,0l1.768,1.768,1.768-1.768c.195-.195,.512-.195,.707,0l.707,.707c.195,.195,.195,.512,0,.707l-1.768,1.768,1.768,1.768Z"
          fill="gray"
        />
      </g>
    </svg>
  )
}

export default IconSearchClose
