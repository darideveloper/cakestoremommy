import PropTypes from "prop-types"
import Section from "@/sections/section"
import ButtonLink from "@/components/button-link"

export default function Hero({btnPrimaryText, btnSecondaryText}) {

  const arrowIcon = (
    <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
  )

  return (
    <Section
      title="Hero"
      titleVisible={false}
      extraClasses={`
        flex flex-col justify-center
      `}
    >

      <img
        src="/images/hero.gif"
        className={`
          w-full mx-auto mb-32 max-w-4xl
        `}
      />


      <div className={`
        buttons 
        flex flex-col items-center justify-between
        h-32
        sm:flex-row sm:justify-center sm:gap-5
      `}>
        <ButtonLink
          href="/comming-soon"
          text={btnPrimaryText}
          type="primary"
          iconPath={arrowIcon}
        />

        <ButtonLink
          href="/comming-soon"
          text={btnSecondaryText}
          type="secondary"
          iconPath={arrowIcon}
        />
      </div>

    </Section>
  )
}

Hero.propTypes = {
  btnPrimaryText: PropTypes.string.isRequired,
  btnSecondaryText: PropTypes.string.isRequired,
}