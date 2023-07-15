import PropTypes from 'prop-types'
import { titleFont } from '@/lib/fonts'

export default function CategoryBtn ({text, onClick, isActive}) {

  const btnColor = isActive ? "bg-white" : "bg-pink"

  return (
    <button
      onClick={onClick}
      className={`
        category-btn
        flex items-center justify-between flex-col-reverse
        px-5 py-2 mx-1 my-2
        rounded-2xl
        shadow-xl
        hover:shadow-2xl hover:-translate-y-2 duration-300
        xs:flex-row
        ${titleFont.className}
        capitalize
        ${btnColor}
        border-2 border-pink
        shadow-md
        duration-300 hover:shadow-xl hover:-translate-y-1
      `}>
      <p>
        {text}
      </p>
    </button>
  )
}

CategoryBtn.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}