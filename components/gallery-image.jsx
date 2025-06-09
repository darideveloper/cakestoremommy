import PropTypes from 'prop-types'

import Image from 'next/image'
import Loading from '@/components/loading'

import { useState } from 'react'	

export default function GalleryImage({ src, category, onClick, extraClasses }) {

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
          `}
          src={src}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          alt={`imagen de pastel de ${category}`}
          onLoad={() => {setIsLoading(false)}}
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