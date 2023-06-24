import PropTypes from "prop-types"
import Section from "@/sections/section"
import Cta from "@/components/cta"

export default function CustomizeCake ({title, description}) {
  return (
    <Section
      title="Customize Cake"
      titleVisible={false}
    >
      <Cta 
        title={title}
        description={description}
        image="cta-cake.png"
      />
    </Section>
  )
}

CustomizeCake.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}