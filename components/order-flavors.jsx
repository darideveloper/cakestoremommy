import propTypes from 'prop-types'
import Image from 'next/image'
import { titleFont } from '@/lib/fonts'
import { useState, useEffect } from 'react'

import Loading from '@/components/loading'
import OrderFlavorButtons from '@/components/order-flavors-buttons'
import OrderFlavorCard from '@/components/order-flavor-card'

export default function OrderFlavors({ title, langId, options }) {

  const flavorsAllStatus = Object.keys(options)
  const [flavorStatus, setFlavorStatus] = useState(flavorsAllStatus[0])
  const [isLoading, setIsLoading] = useState(true)

  const flavorOptions = options[flavorStatus]["options"]

  // Detect when flavorStatus changes
  useEffect(() => {
    // Hide loading after 1 second
    setTimeout(() => {
      if (isLoading) {
        setIsLoading(false)
      }
    }, 2000)
  }, [flavorStatus, isLoading])

  return (
    <div className={`
      flavors 
      container 
      text-brown`
    }>
      <Image
        src="/images/order/flavors/hero.webp"
        width={200}
        height={200}
        className={`
          w-full 
          mx-auto
          p-5
          mt-10
          max-w-md
        `}
      />

      <h2
        className={`
          text-3xl
          text-center
          ${titleFont.className}
          my-2
        `}
      >
        {title}
      </h2>

      {/* Flavor category selector */}
      <OrderFlavorButtons
        langId={langId}
        options={options}
        status={flavorStatus}
        onClick={(flavor) => {
          setIsLoading(true)
          setTimeout(() => {
            setFlavorStatus (flavor)
          }, 100)
        }}
        flavorsAllStatus={flavorsAllStatus}
        isLoading={isLoading}
      />

      {/* Flavor cards */}
      <div
        className={`
          flavors-category-wrapper
          relative
          pb-5
          mb-10
        `}
      >

        <Loading
          isVisible={isLoading}
          bgColor="bg-white"
          extraClasses="z-10 items-start pt-10"
        />

        {Object.keys(flavorOptions).map((category, categoryIndex) => (
          <div
            key={categoryIndex}
            className={`flavors-category mt-10`}
          >

            <h3
              className={`
                text-2xl
                text-center
                ${titleFont.className}
                my-6
                uppercase
              `}
            >
              {flavorOptions[category].name[langId]}
            </h3>

            <div
              className={`
                flavors-cards-wrapper
                grid 
                grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6
                gap-2
                w-11/12
                mx-auto
              `}>

              {flavorOptions[category].options.map((flavor, flavorIndex) => (
                <OrderFlavorCard
                  key={`${categoryIndex}-${flavorIndex}`}
                  flavor={flavor[0]}
                  onClick={() => {
                    console.log(`Clicked ${flavor[0]}`)
                  }}
                  text={flavor[langId]}
                  category={category}
                  flavorStatus={flavorStatus}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

OrderFlavors.propTypes = {
  title: propTypes.string.isRequired,
  langId: propTypes.number.isRequired,
  options: propTypes.object.isRequired,
}