function Button({
  children,
  size = "md",
  outline = false,
  color = "blue",
  width = "fit-content",
  height = "fit-content",
  pill = false,
  className = "",
}) {
  const baseClasses =
    "text-white font-medium rounded-lg text-sm focus:ring-1 focus:outline-none"

  const roundedClass = pill ? "rounded-full" : "rounded-lg"
  const sizeClasses = {
    xs: { padding: "px-4 pt-2.5 py-2", textSize: "text-xs" },
    sm: { padding: "px-6 pt-3.5 py-2.5", textSize: "text-sm" },
    md: { padding: "px-6 pt-4 py-3", textSize: "text-base" },
    lg: { padding: "px-7 pt-5 py-3.5", textSize: "text-lg" },
    xl: { padding: "px-8 pt-5 py-4", textSize: "text-xl" },
  }

  const colorClasses = {
    blue: "bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600  dark:hover:bg-blue-700 dark:focus:ring-blue-800 ring-0",
    green:
      "bg-green-700 hover:bg-green-800 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 ring-0",
    cyan: "bg-cyan-500 hover:bg-cyan-600 focus:ring-cyan-300 dark:bg-cyan-500 dark:hover:bg-cyan-600 dark:focus:ring-cyan-800 ring-0",
    teal: "bg-teal-400 hover:bg-teal-500 focus:ring-teal-300 dark:bg-teal-400 dark:hover:bg-teal-500 dark:focus:ring-teal-800 ring-0",
    lime: "bg-lime-200 hover:bg-lime-300 focus:ring-lime-300 dark:bg-lime-200 dark:hover:bg-lime-300 dark:focus:ring-lime-800 ring-0",
    red: "bg-red-400 hover:bg-red-500 focus:ring-red-300 dark:bg-red-400 dark:hover:bg-red-500 dark:focus:ring-red-800 ring-0",
    pink: "bg-pink-400 hover:bg-pink-500 focus:ring-pink-300 dark:bg-pink-400 dark:hover:bg-pink-500 dark:focus:ring-pink-800 ring-0",
    purple:
      "bg-purple-500 hover:bg-purple-600 focus:ring-purple-300 dark:bg-purple-500 dark:hover:bg-purple-600 dark:focus:ring-purple-800 ring-0",
    yellow:
      "bg-yellow-400 hover:bg-yellow-500 focus:ring-yellow-300 dark:bg-yellow-400 dark:hover:bg-yellow-500 dark:focus:ring-yellow-800 ring-0",
  }

  const sizeClass = sizeClasses[size] || sizeClasses.md

  const outlineClasses = outline
    ? `border border-${color}-700 hover:text-${color}-700 dark:border-${color}-500 dark:text-${color}-500 dark:hover:text-white dark:hover:bg-${color}-500 dark:focus:ring-${color}-800`
    : ""

  const lineHeightClass = pill ? "leading-4" : "" // Adjust line-height for pill buttons

  return (
    <button
      type="button"
      style={{ width, height }}
      className={`${baseClasses} ${roundedClass} ${sizeClass.padding} ${
        sizeClass.textSize
      } ${
        colorClasses[color] || colorClasses.blue
      } ${outlineClasses} ${lineHeightClass} ${className}`}
    >
      {children}
    </button>
  )
}

export default Button
