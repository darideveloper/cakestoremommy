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
        xs:flex-row
        capitalize
        border-2 border-pink
        shadow-sm
        duration-300 hover:shadow-md hover:-translate-y-1
        ${titleFont.className}
        ${btnColor}
      `}>
      <h3>
        {text}
      </h3>
    </button>
  )
}

CategoryBtn.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}