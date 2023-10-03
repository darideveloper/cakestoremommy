import propTypes from 'prop-types'
import { titleFont } from '@/lib/fonts'

export default function Button ({text, onClick, extraClasses}) {
  return (
    <button
      className={`
        button
        bg-pink
        text-brown
        rounded-2xl
        px-8 py-4
        max-w-lg
        w-9/12
        inline-block
        text-xl
        uppercase
        hover:shadow-xl
        duration-300
        ${titleFont.className}
        ${extraClasses}
      `}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

Button.propTypes = {
  text: propTypes.string.isRequired,
  onClick: propTypes.func.isRequired,
  extraClasses: propTypes.string
}