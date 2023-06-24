import Section from "@/sections/section"
import Cta from "@/components/cta"

export default function CustomizeCake () {
  return (
    <Section
      title="Customize Cake"
      titleVisible={false}
    >
      <Cta 
        title="Customize Cake"
        description="Custom cake ordering form"
        image="cta-cake.png"
      />
    </Section>
  )
}