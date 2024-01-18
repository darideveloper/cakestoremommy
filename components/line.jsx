import PropTypes from 'prop-types'

export default function Line({width, extraClasses}) {
  return (
    <span 
      className={`
      h-1 w-${width} inline-block
      border-2 border-solid border-brown
      bg-brown
      rounded-full
      ${extraClasses}
    `} />
  )
}

Line.propTypes = {
  width: PropTypes.string.isRequired,
  extraClasses: PropTypes.string
}