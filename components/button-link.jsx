import PropTypes from 'prop-types'

export default function ButtonLink({ text, href, type, iconPath, extraClasses = "" }) {

  const textColor = type === 'primary' ? 'text-brown' : ' text-white'
  const bgColor = type === 'primary' ? 'bg-white' : ' bg-green'
  const fillColor = type === 'primary' ? 'fill-brown' : 'fill-white'

  return (
    <div className="button-wrapper inline-block w-64">
      <a
        href={href}
        className={`
          flex items-center justify-between 
          text-md font-bold uppercase
          w-full py-3
          rounded-xl shadow-lg ${textColor} ${bgColor}
          hover:shadow-xl hover:bg-opacity-80 duration-200
        `}>
        <div className="text-wrapper w-48">
          <span className='mr-5 text-center w-full inline-block'>{text}</span>
        </div>
        <svg viewBox="0 0 24 24" className={`w-8 px-2 ${fillColor}`}>
          {iconPath}
        </svg>
      </a>
    </div>
  )
}

ButtonLink.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  iconPath: PropTypes.element.isRequired
}