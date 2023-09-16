import PropTypes from "prop-types"
import Section from "@/sections/section"
import ButtonLink from "@/components/button-link"
import Image from "next/image"
import Wave from "@/components/wave"
import { useEffect } from "react"

export default function Hero({ btnPrimaryText, btnSecondaryTexts }) {

  const isBtnSecondaryTexts = btnSecondaryTexts.length != 0

  // Reize header-gradiant based in header wnd hero heigh
  function resizeHeaderGradiant() {
    const headerGradiant = document.querySelector('.header-gradiant')
    const header = document.querySelector('header')
    const hero = document.querySelector('.hero')
    const headerHeight = header.offsetHeight
    const heroHeight = hero.offsetHeight
    headerGradiant.style.height = `${headerHeight + heroHeight + 30}px`
  }

  useEffect(() => {

    // Add event listener when resize
    window.addEventListener('resize', () => {
      resizeHeaderGradiant()
    })

    // Resize header-gradiant when page is loaded
    resizeHeaderGradiant()
  })

  const arrowIcon = (
    <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
  )

  return (
    <>
      <div
        className={`
          header-gradiant
          w-full
          h-screen
          absolute top-0 left-0 -z-10
        `}>
      </div>

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

        <div
          className={`
          img-wrapper
          w-full
          overflow-hidden
        `}>

          <Image
            src="/images/hero.gif"
            width={1000}
            height={1000}
            alt="Hero gif"
            className={`
              hero-gif
              xs:w-full 
              mx-auto 
              xs:ml-auto
              max-w-2xl
              -z-20
              ${isBtnSecondaryTexts ? "mb-32" : "mb-72"}
            `}
            onLoad={e => {
              resizeHeaderGradiant()
            }}
          />
        </div>

        {/* Render single button */}
        {
          !isBtnSecondaryTexts
          &&
          <div className={`
            button-wrapper
            w-full
            flex items-center justify-center
            -mt-60
            mb-28 xs:mb-0
          `}>
            <ButtonLink
              href="/order"
              content={btnPrimaryText}
              type="primary"
              iconPath={arrowIcon}
              extraClasses={`
              `}
            />
          </div>
        }

        {/* Background image */}
        <Image
          src={isBtnSecondaryTexts ? `/images/hero-bg-large.svg` : `/images/hero-bg-small.svg`}
          alt="Hero background image"
          width={640}
          height={640}
          className={`
            w-full 
            xs:hidden 
            absolute 
            -bottom-28 left-0 -z-10
            inline-block
          `}
          
        />


        {/* Separators */}
        <Wave
          extraClasses={`
            fill-pink 
            h-10 
            w-full 
            hidden 
            sm:block
            ${!isBtnSecondaryTexts && 'xs:block mt-5'}
          `}
          type="opacity"
          flip={true}
        />


        <div className={`
          buttons 
          bg-pink
          flex flex-col items-center justify-between gap-4
          sm:flex-row sm:justify-center sm:gap-5
          sm:py-16
          ${!isBtnSecondaryTexts && 'xs:h-10 sm:py-10'}
        `}>


          {/* Sepàrator */}
          <Wave
            extraClasses={`
              fill-white 
              w-full 
              hidden 
              xs:block 
              sm:hidden
              ${!isBtnSecondaryTexts && 'xs:hidden'}
            `}
            type="circle"
            flip={true}
          />

          {/* Render double butttons */}
          {
            isBtnSecondaryTexts
            &&
            <>
              <ButtonLink
                href="/order"
                content={btnPrimaryText}
                type="primary"
                iconPath={arrowIcon}
              />

              <ButtonLink
                href="/order"
                content={
                  <>
                    <span>
                      {isBtnSecondaryTexts[0]}
                    </span>
                    <span
                      className={`
                      p-2 text-2xl
                    `}
                    >
                      {isBtnSecondaryTexts[1]}
                    </span>
                  </>
                }
                type="secondary"
                iconPath={arrowIcon}
              />
            </>
          }


          {/* Sepàrator */}
          <Wave
            extraClasses={`
              fill-white
              w-full
              hidden
              xs:block
              sm:hidden
              ${!isBtnSecondaryTexts && 'xs:hidden'}
            `}
            type="circle"
            flip={false}
          />
        </div>

        {/* Separators */}
        <Wave
          extraClasses={`
            fill-pink 
            h-10 
            w-full 
            hidden 
            sm:block
            ${!isBtnSecondaryTexts && 'xs:block -mb-32'}
          `}
          type="opacity"
          flip={false}
        />


      </Section>
    </>
  )
}

Hero.propTypes = {
  btnSecondaryText: PropTypes.node.isRequired,
  btnSecondaryTexts: PropTypes.arrayOf(PropTypes.string).isRequired,
}