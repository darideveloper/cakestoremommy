import Section from "./section"
import ButtonLink from "@/components/button-link"

export default function Hero () {

  const arrowIcon = (
    <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"/>
  )

  return (
    <Section
      title="Hero"
      titleVisible={false}
      extraClasses={`
        flex flex-col justify-center
        sm:flex-row sm:justify-between sm:items-center sm:w-10/12 sm:mx-auto
        md:justify-center
      `}
    >

      <img 
        src="/images/hero.gif"
        className={`
          w-full mx-auto mb-32
          sm:w-6/12 sm:mx-0 sm:my-0
          md:-ml-8
        `}
      />


      <div className="buttons flex flex-col h-28 items-center justify-between">
        <ButtonLink
          href="/comming-soon"
          text="Order Now"
          type="primary"
          iconPath={arrowIcon}
        />

        <ButtonLink
          href="/comming-soon"
          text="Cakes for $100"
          type="secondary"
          iconPath={arrowIcon}
        />
      </div>

    </Section>
  )
}