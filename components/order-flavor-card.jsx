import propTypes from 'prop-types'
import Image from 'next/image'

import { useState } from 'react'
import Loading from './loading'

export default function OrderFlavorCard({ flavor, onClick, text, category, flavorStatus, isActive}) {

  const imageName = flavor.replaceAll(" ", "-")
  const imagePath = `/images/order/flavors/${flavorStatus}/${category}/${imageName}.png`
  const [isLoading, setIsLoading] = useState(true)

  return (
    <button
      className={`
        button
        rounded-2xl
        px-5 py-2
        duration-200
        relative
        w-full
        shadow-md
        flex flex-col items-center justify-center
        overflow-hidden
        ${isActive ? 'bg-pink text-brown' : 'bg-white text-brown hover:shadow-xl'}
      `}
      onClick={onClick}
    >

      <Loading
        isVisible={isLoading}
        bgColor="bg-white"
        extraClasses="z-10 items-center pt-10"
      />

      <Image
        src={imagePath}
        alt={`${category} ${text}`}
        width={160}
        height={160}
        onLoad={() => setIsLoading(false)}
        className={`
          w-10/12
          h-10/12
        `}
      />
      <p
        className={`
          text-brown
          capitalize
          text-sm
          mt-5
        `}
      >
        {text}
      </p>
    </button>
  )
}

OrderFlavorCard.propTypes = {
  flavor: propTypes.string.isRequired,
  onClick: propTypes.func.isRequired,
  text: propTypes.string.isRequired,
  category: propTypes.string.isRequired,
  flavorStatus: propTypes.string.isRequired,
  isActive: propTypes.bool.isRequired,
}