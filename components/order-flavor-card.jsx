import propTypes from 'prop-types'
import Image from 'next/image'

export default function OrderFlavorCard({ flavor, onClick, text, category, flavorStatus }) {
  return (
    <button
      className={`
        button
        rounded-2xl
        px-5 py-2
        duration-200
        relative
        inline
        w-full
        shadow-md
      `}
      onClick={onClick}
    >
      <Image
        src={`/images/order/flavors/${flavorStatus}/${category}/${flavor}.webp`}
        width={150}
        height={150}
        className={`
          w-full
        `}
      />
      <p
        className={`
          text-brown
          capitalize
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