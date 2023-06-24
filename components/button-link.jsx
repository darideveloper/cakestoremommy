import PropTypes from 'prop-types'

export default function ButtonLink({ text, href, type, iconPath, extraClasses = "" }) {

  const textColor = type === 'primary' ? 'text-brown' : ' text-white'
  const bgColor = type === 'primary' ? 'bg-white' : ' bg-green'
  const fillColor = type === 'primary' ? 'fill-brown' : 'fill-white'

  return (
    <div className={`
        button-wrapper inline-block w-64
        md:w-72
      `}>
      <a
        href={href}
        className={`
          group
          flex items-center justify-between 
          text-md font-bold uppercase
          w-full py-3
          rounded-2xl shadow-lg ${textColor} ${bgColor}
          hover:shadow-xl hover:bg-opacity-90 duration-200
          md:py-6 md:text-lg md:rounded-3xl
        `}>
        <div className={`
            text-wrapper w-full
            md:w-64
          `}>
          <span className='mr-5 text-center w-full inline-block'>{text}</span>
        </div>
        <div className="icon w-12">
          <svg viewBox="0 0 24 24" className={`
            w-8 px-2 
            ${fillColor}
            group-hover:-translate-x-3
            duration-200
            `}>
            {iconPath}
          </svg>
        </div>
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