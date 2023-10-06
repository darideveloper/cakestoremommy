import propTypes from 'prop-types'
import Image from 'next/image'

export default function OrderFlavorCard({ flavor, onClick, text, category, flavorStatus }) {

  const imageName = flavor.replaceAll (" ", "-")
  const imagePath = `/images/order/flavors/${flavorStatus}/${category}/${imageName}.png`

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
      `}
      onClick={onClick}
    >
      <Image
        src={imagePath}
        width={150}
        height={150}
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
}