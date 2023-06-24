import Section from "@/sections/section"
import { alternativeFont } from "@/lib/fonts"
import PropTypes from 'prop-types'

export default function About({title, textDecoration, textA, textB}) { 
  return (
    <Section
      title={title}
      extraClasses="pt-14"
    >
      <div className="text w-10/12 max-w-4xl mx-auto text-sm text-brown">
        <p 
          className={`
            ${alternativeFont.className}
            text-xl text-right my-6 text-brown
          `}>{textDecoration}</p>
        <div 
          className={`
            content 
            flex flex-col items-center justify-center gap-5
            md:flex-row
          `}>
          <p>{textA}</p>
          <p>{textB}</p>
        </div>
      </div>
    </Section>
  )
}

About.propTypes = {
  title: PropTypes.string.isRequired,
  textDecoration: PropTypes.string.isRequired,
  textA: PropTypes.string.isRequired,
  textB: PropTypes.string.isRequired,
}