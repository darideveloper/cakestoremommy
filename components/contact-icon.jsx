import PropTypes from 'prop-types'
import Link from 'next/link'

export default function ContactIcon ({link, icon}) {

  return (
    <>
      <Link
        href={link} 
        target='_blank'
        className={`
          hover:-translate-y-1 duration-200
          w-10 
          md:w-5
        `}
      >
        <svg viewBox='0 0 24 24' className='fill-white w-full'>
          {icon}
        </svg>
      </Link>
    </>
  )
}

ContactIcon.propTypes = {
  link: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired
}