import PropTypes from 'prop-types'
import Link from 'next/link'

export default function ContactIcon({ link, icon, isLink, hideDesktop, iconColor="white", iconSmall=false }) {

  const svg = (
    <svg viewBox='0 0 24 24' className={`fill-${iconColor} w-full`}>
      {icon}
    </svg>
  )

  const className = `
    hover:-translate-y-1 duration-200
    ${
      iconSmall 
      ? 'w-6'
      : 'w-10'
    }
    md:w-5
    ${hideDesktop ? 'md:hidden' : ''}
  `

  return (
    <>
      {
        isLink
          ?
          <Link
            href={link}
            target='_blank'
            className={className}
          >
            {svg}
          </Link>
          :
          <a
            href={link}
            target='_blank'
            className={className}
          >
            {svg}
          </a>
      }
    </>
  )
}

ContactIcon.propTypes = {
  link: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  isLink: PropTypes.bool.isRequired,
  hideDesktop: PropTypes.bool.isRequired,
}