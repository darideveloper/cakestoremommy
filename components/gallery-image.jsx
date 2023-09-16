import PropTypes from 'prop-types'
import Image from 'next/image'
import Loading from './loading'
import { useState } from 'react'	

export default function GalleryImage({ src, category, onClick, extraClasses }) {

  const [isLoading, setIsLoading] = useState(true)

  let imagePath = `/images/gallery/${category}/${src}`
  if (category == "all") {
    imagePath = `/images/gallery/${src}`
  }

  return (
    <button className={`
        img-wrapper
        flex items-center justify-center
        bg-yellow
        rounded-xl
        shadow-xl hover:shadow-2xl
        duration-300
        relative
        ${extraClasses}
      `}
      onClick={() => onClick(imagePath)}
    >
      <Loading 
        isVisible={isLoading}
        bgColor="bg-pink-light"
        extraClasses="z-10 items-center rounded-xl"
        alternative={true}
      />
      <Image
        className={`
          gallery-image
          duration-300
          ${isLoading ? "opacity-0" : "opacity-100"}	
        `}
        src={imagePath}
        width={500}
        height={500}
        alt={`imagen de pastel de ${category}`}
        onLoad={() => {setIsLoading(false)}}
      />
    </button>
  )

}

GalleryImage.propTypes = {
  src: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  extraClasses: PropTypes.string,
}