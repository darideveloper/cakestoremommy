import PropTypes from 'prop-types';

import Image from 'next/image';

export default function GalleryImage({ src, category }) {

  let galleryPath = `/images/gallery/${category}/${src}`
  if (category == "all") {
    galleryPath = `/images/gallery/${src}`
  }

  return (
    <div className={`
        img-wrapper
        flex items-center justify-center
        bg-pink-light
        rounded-xl
        p-2
        shadow-md
      `}>
      <Image
        className={`
          gallery-image
        `}
        src={galleryPath}
        width={500}
        height={500}
        alt={`imagen de pastel de ${category}`}
      />
    </div>
  )
  
}

GalleryImage.propTypes = {
  src: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
}