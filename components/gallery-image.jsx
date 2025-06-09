import PropTypes from 'prop-types'

import Image from 'next/image'
import Loading from '@/components/loading'

import { useState } from 'react'	

/**
 * GalleryImage component displays an image with a loading state and handles click events.
 * @param {Object} props - Component properties.
 * @param {string} props.src - The source URL of the image.
 * @param {string} props.category - The category of the image, used for alt text.
 * @param {Function} props.onClick - Function to call when the image is clicked.
 * @param {string} props.extraClasses - Additional CSS classes to apply to the button.
 * @param {string} props.loading - Loading strategy for the image, default is 'lazy'.
 */
export default function GalleryImage({ src, category, onClick, extraClasses, loading='lazy' }) {

  const [isLoading, setIsLoading] = useState(true)

  return (
    <button 
      className={`
        w-full
        relative
        overflow-hidden
        bg-yellow
        ${extraClasses}
      `}
      onClick={() => onClick(src)}
    >
      <Loading 
        isVisible={isLoading}
        bgColor="bg-pink-light"
        extraClasses="z-10 items-center"
        alternative={true}
        isRelative={true}
      />

      <div className="w-full h-auto min-h-[200px] flex items-center justify-center">
        <Image
          className={`
            max-w-full
            p-4
            duration-300
            ${isLoading ? "opacity-0" : "opacity-100"}
            !static
            !h-auto
            w-full
          `}
          src={src}
          alt={`imagen de pastel de ${category}`}
          onLoad={() => {setIsLoading(false)}}
          loading={loading}
          width={300}
          height={300}
        />
      </div>
    </button>
  )

}

GalleryImage.propTypes = {
  src: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  extraClasses: PropTypes.string,
}