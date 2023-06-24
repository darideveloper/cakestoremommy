import PropTypes from 'prop-types'

export default function Wave ({extraClasses, flip = false}) {

  const flipClass = flip ? "transform rotate-180" : ""

  return (
    <svg  
      viewBox="0 0 1200 120" 
      preserveAspectRatio="none" 
      className={`${flipClass}`}
    >
      <path  
        d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" 
        className={`${extraClasses}`}
        fillOpacity="1" />
      </svg>
  )
}

Wave.propTypes = {
  extraClasses: PropTypes.string.isRequired,
  flip: PropTypes.bool
}