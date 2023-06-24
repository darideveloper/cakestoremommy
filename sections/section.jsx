import PropTypes from 'prop-types'
import { titleFont } from '@/lib/fonts'

export default function Section ({children, title, titleVisible = true, extraClasses = ""}) {
  
  const displayTitle = titleVisible ? "" : "hidden"
  const titleClass = title.toLowerCase().replace(" ", "-")

  return (
    <section className={`${titleClass} ${extraClasses} mb-20`}>
      <h2 className={`
          ${displayTitle}
          ${titleFont.className}
          text-3xl uppercase text-center font-medium text-brown
          mb-14

        `
      }>{title}</h2>
      {children}
    </section>
  )
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  titleVisible: PropTypes.bool,
  extraClasses: PropTypes.string
}