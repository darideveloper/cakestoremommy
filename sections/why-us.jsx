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
        mt-24
      `}>
      <Wave
        extraClasses="fill-white md:hidden"
        flip={true}
        type="circle"
      />
      <Wave
        extraClasses="fill-white h-10 w-full hidden md:block"
        opacity={true}
        type="opacity"
      />
      <Section
        title={title}
        extraClasses={`
          mb-0
          lg:my-5
        `} 
        container={false}
        id="why-us"
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
              index={index}
            />
          )}
        </div>

        
      </Section>
      <Wave
        extraClasses="fill-white md:hidden"
        type="circle"
      />
      <Wave
        extraClasses="fill-white h-10 w-full hidden md:block"
        flip={true}
        type="opacity"
      />
    </div>
  )
}

WhyUs.propTypes = {
  title: PropTypes.string.isRequired,
  cardsData: PropTypes.array.isRequired,
}