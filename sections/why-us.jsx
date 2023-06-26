import PropTypes from "prop-types"
import Section from "@/sections/section"
import Wave from "@/components/wave"
import Card from "@/components/card"

export default function WhyUs({title, cardsData}) {

  return (
    <div
      className={`
        wrapper-section
        bg-pink
        w-full
      `}>
      <Wave
        extraClasses="fill-white md:hidden"
        flip={true}
      />
      <Wave
        extraClasses="fill-white h-10 w-full hidden md:block"
        opacity={true}
      />
      <Section
        title={title}
        extraClasses={`
          mb-0
          lg:my-5
        `} 
        container={false}
      >

        <div 
          className={`
            cards
            flex flex-col items-center justify-center
            w-10/12 mx-auto max-w-6xl
            md:flex-row md:justify-around md:items-start
          `}>
          {cardsData.map((card, index) => 
            <Card
              key={index}
              title={card.title}
              body={card.body}
              image={card.image}
            />
          )}
        </div>

        
      </Section>
      <Wave
        extraClasses="fill-white md:hidden"
      />
      <Wave
        extraClasses="fill-white h-10 w-full hidden md:block"
        flip={true}
        opacity={true}
      />
    </div>
  )
}

WhyUs.propTypes = {
  title: PropTypes.string.isRequired,
  cardsData: PropTypes.array.isRequired,
}