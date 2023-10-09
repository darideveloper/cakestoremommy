import propTypes from "prop-types"
import { useState, useEffect } from "react"

import Image from "next/image"


export default function Loading({ isVisible = true, bgColor, alternative = false, extraClasses = "" }) {
  
  const [display, setDisplay] = useState("flex")
  const [opacity, setOpacity] = useState("opacity-100")

  // Hide and show loading
  useEffect(() => {
    if (isVisible) {
      setDisplay("flex")
      setOpacity("opacity-100")
    } else {
      setOpacity("opacity-0")
      setTimeout(() => {
        setDisplay("hidden")
      }, 500)
    }
  }, [isVisible])


  return (
    <div
      className={`
        loadding
        absolute top-0 left-0 right-0 bottom-0
        width-full height-full
        loading
        justify-center
        duration-300
        ${opacity}
        ${display}
        ${bgColor}
        ${extraClasses}
      `}
    >
      <Image
        src={alternative ? "/images/spinner-white.png" : "/images/spinner.png"}
        width={30}
        height={30}
        alt="loading spinner"
        className={`
          w-32 h-32
          animate-spin
        `}
        priority={true}
      />
    </div>
  )
}

Loading.propTypes = {
  isVisible: propTypes.bool,
  bgColor: propTypes.string,
  alternative: propTypes.bool,
  extraClasses: propTypes.string,
}