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
        container mx-auto
      `}>
      <Wave
        extraClasses="fill-white"
        flip={true}
      />
      <Section
        title="Why Us"
        extraClasses={`
          lg:-my-14
          xl:-my-20
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
        extraClasses="fill-white"
      />
    </div>
  )
}