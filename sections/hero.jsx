import PropTypes from "prop-types"
import Section from "@/sections/section"
import ButtonLink from "@/components/button-link"
import Image from "next/image"
import Wave from "@/components/wave"

export default function Hero({ btnSecondaryText, btnSecondaryTexts }) {

  const arrowIcon = (
    <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
  )

  return (
    <Section
      title="Hero"
      titleVisible={false}
      container={false}
      extraClasses={`
        flex flex-col justify-center
        relative
        w-full
      `}
      id="hero"
    >

      <img
        src="/images/hero.gif"
        className={`
          w-full mx-auto mb-32 max-w-4xl
          -z-20
        `}
      />

      {/* Background image */}
      <Image
        src="/images/hero-bg.svg"
        alt="Hero background image"
        width={640}
        height={640}
        className={`w-full xs:hidden absolute -bottom-28 left-0 -z-10`}
      />

      {/* Separators */}
      <Wave
        extraClasses="fill-pink h-10 w-full hidden sm:block"
        type="opacity"
        flip={true}
      />

      <div className={`
        buttons 
        bg-pink
        flex flex-col items-center justify-between gap-4
        sm:flex-row sm:justify-center sm:gap-5
        sm:py-16
      `}>

        {/* Sepàrator */}
        <Wave
          extraClasses="fill-white w-full hidden xs:block sm:hidden"
          type="circle"
          flip={true}
        />

        <ButtonLink
          href="/order"
          content={btnSecondaryText}
          type="primary"
          iconPath={arrowIcon}
        />

        <ButtonLink
          href="/order"
          content={
            <>
              <span>
                {btnSecondaryTexts[0]}
              </span>
              <span
                className={`
                  p-2 text-2xl
                `}
              >
                {btnSecondaryTexts[1]}
              </span>
            </>
          }
          type="secondary"
          iconPath={arrowIcon}
        />

        {/* Sepàrator */}
        <Wave
          extraClasses="fill-white w-full hidden xs:block sm:hidden"
          type="circle"
          flip={false}
        />
      </div>

      {/* Separators */}
      <Wave
        extraClasses="fill-pink h-10 w-full hidden sm:block"
        type="opacity"
        flip={false}
      />


    </Section>
  )
}

Hero.propTypes = {
  btnSecondaryText: PropTypes.node.isRequired,
  btnSecondaryTexts: PropTypes.arrayOf(PropTypes.string).isRequired,
}