import { titleFont } from "@/lib/fonts"

/**
 * Description
 * @param {string} {text}
 * @returns {JSX.Element}
 */
export default function H2 ({title, displayTitle = ""}) {
  return (
    <h2 className={`
          ${displayTitle}
          ${titleFont.className}
          text-2xl uppercase text-center font-medium text-brown
          mb-5
        `
      }>{title}</h2>
  )
}