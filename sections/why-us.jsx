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

  console.log(cardsData)

  return (
    <div
      className={`
        wrapper-section
        bg-pink
        w-screen
      `}>
      <Wave
        extraClasses="fill-white"
        flip={true}
      />
      <Section
        title="Why Us"
        extraClasses=""
      >

        {cardsData.map((card, index) => 
          <Card
            key={index}
            title={card.title}
            body={card.body}
            image={card.image}
          />
        )}
        
      </Section>
      <Wave
        extraClasses="fill-white"
      />
    </div>
  )
}