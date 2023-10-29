import React from "react"

function Loading(props) {
  const width = props.width || "100%"
  const height = props.height || "100%"
  const title = props.title || "Loading"

  return (
    <svg
      height={48}
      width={48}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill="#338a38">
        <circle
          cx="8"
          cy="32"
          fill="#338a38"
          r="6"
          style={{
            animation: "nc-loop-dots-3-anim 0.8s infinite",
            animationDelay: "0s",
            transformOrigin: "50% 50%",
          }}
        />
        <circle
          cx="32"
          cy="32"
          r="6"
          style={{
            animation: "nc-loop-dots-3-anim 0.8s infinite",
            animationDelay: "0.1s",
            transformOrigin: "50% 50%",
          }}
        />
        <circle
          cx="56"
          cy="32"
          fill="#338a38"
          r="6"
          style={{
            animation: "nc-loop-dots-3-anim 0.8s infinite",
            animationDelay: "0.2s",
            transformOrigin: "50% 50%",
          }}
        />
      </g>
      <style>
        {`
          @keyframes nc-loop-dots-3-anim {
            0%, 100%, 60% {
              transform: translateY(0);
            }
            30% {
              transform: translateY(20%);
            }
          }
        `}
      </style>
    </svg>
  )
}

export default Loading
