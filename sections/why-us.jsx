import { useEffect, useState } from "react"
import Section from "./section"
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
        extraClasses="fill-white lg:hidden"
        flip={true}
      />
      <Wave
        extraClasses="fill-white h-10 w-full hidden lg:block"
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
            gap-10
            w-10/12 mx-auto
            lg:flex-row lg:justify-around lg:items-start
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
        extraClasses="fill-white lg:hidden"
      />
      <Wave
        extraClasses="fill-white h-10 w-full hidden lg:block"
        flip={true}
        opacity={true}
      />
    </div>
  )
}