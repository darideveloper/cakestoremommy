import PropTypes from 'prop-types'
import H2 from '@/components/h2'

export default function Section ({children, title, titleVisible = true, extraClasses = "", container = true, id}) {
  
  const displayTitle = titleVisible ? "" : "hidden"
  const titleClass = title.toLowerCase().replace(" ", "-")
  const containerClass = container ? "container mx-auto" : ""

  return (
    <section 
        className={`${titleClass} ${extraClasses} ${containerClass} mb-20`}
        id={id}
      >
        <H2 
          title={title}
          displayTitle={displayTitle}
        />
      
      {children}
    </section>
  )
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  titleVisible: PropTypes.bool,
  extraClasses: PropTypes.string,
  container: PropTypes.bool,
  id: PropTypes.string.isRequired,
}