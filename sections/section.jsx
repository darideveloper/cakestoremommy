import PropTypes from 'prop-types'
import { titleFont } from '@/lib/fonts'

export default function Section ({children, title, titleVisible = true, extraClasses = ""}) {
  return (
    <section className={extraClasses}>
      <h2 className={titleVisible ? "" : "hidden " + `${titleFont.className}`}>{title}</h2>
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