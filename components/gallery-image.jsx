import PropTypes from 'prop-types'
import Image from 'next/image'

export default function GalleryImage({ src, category, onClick, extraClasses }) {

  let imagePath = `/images/gallery/${category}/${src}`
  if (category == "all") {
    imagePath = `/images/gallery/${src}`
  }

  return (
    <button className={`
        img-wrapper
        flex items-center justify-center
        bg-pink-light
        rounded-xl
        p-2
        shadow-md
        ${extraClasses}
      `}
      onClick={() => onClick(imagePath)}
    >
      <Image
        className={`
          gallery-image
        `}
        src={imagePath}
        width={500}
        height={500}
        alt={`imagen de pastel de ${category}`}
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