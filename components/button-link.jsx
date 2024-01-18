import PropTypes from 'prop-types'
import Link from 'next/link'
import { titleFont } from '@/lib/fonts'

export default function ButtonLink({ content, href, type, iconPath, extraClasses = "", small = false }) {

  const textColor = type === 'primary' ? 'text-brown' : ' text-white'
  const textSize = small ? 'text-sm md:text-lg' : 'text-md md:text-lg'
  const bgColor = type === 'primary' ? 'bg-white' : ' bg-green'
  const fillColor = type === 'primary' ? 'fill-brown' : 'fill-white'
  const sizeWrapper = small ? 'w-56 md:w-64' : 'w-64 md:w-72'
  const paddingY = small ? 'py-3 md:py-4' : 'py-4 md:py-6'

  return (
    <div
      className={`
        button-wrapper inline-block
        ${sizeWrapper}
      `}
    >
      <Link
        href={href}
        className={`
          relative
          ${titleFont.className}
          group
          flex items-center justify-between 
          ${textSize} font-bold uppercase
          w-full ${paddingY}
          rounded-2xl shadow-lg ${textColor} ${bgColor}
          hover:shadow-xl hover:bg-opacity-90 duration-200
          md:rounded-3xl
          ${extraClasses}          
        `}>
        <div className={`
            text-wrapper w-full
          `}>
          <span
            className={`
              text-center w-full inline-block
              ${titleFont.className}
            `}
          >{content}</span>
        </div>

        {
          iconPath
          &&
          <div className={`
              icon w-12 ml-5
              absolute right-0 top-1/2 transform -translate-y-1/2
            `}>
            <svg viewBox="0 0 24 24"
              className={`
              w-8 px-2 
              ${fillColor}
              group-hover:-translate-x-3
              duration-200
            `}>
              {iconPath}
            </svg>
          </div>
        }
      </Link>
    </div>
  )
}

ButtonLink.propTypes = {
  content: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  iconPath: PropTypes.element,
  extraClasses: PropTypes.string,
  small: PropTypes.bool,
}