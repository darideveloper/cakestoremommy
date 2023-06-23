import PropTypes from 'prop-types'
import { titleFont } from '@/lib/fonts'

export default function Section ({children, title, titleVisible = true}) {
  return (
    <section>
      <h2 className={titleVisible ? "" : "hidden " + titleFont.className}>{title}</h2>
      {children}
    </section>
  )
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  titleVisible: PropTypes.bool
}