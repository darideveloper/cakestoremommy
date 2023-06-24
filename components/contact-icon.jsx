import PropTypes from 'prop-types'

export default function ContactIcon ({link, icon}) {

  return (
    <>
      <a 
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
      </a>
    </>
  )
}

// ContactIcon.PropTypes = {
//   link: PropTypes.string.isRequired,
//   icon: PropTypes.element.isRequired
// }