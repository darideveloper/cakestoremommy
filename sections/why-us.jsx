import { useEffect, useState } from "react"
import Section from "@/sections/section"
import Wave from "@/components/wave"
import { getCardsData } from "@/database/why-us"
import Card from "@/components/card"

export default function WhyUs() {

  const [cardsData, setCardsData] = useState([])

  useEffect(() => {
    setCardsData(getCardsData())
  }, [])

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
        title="Why Us"
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
            w-10/12 mx-auto
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