import propTypes from 'prop-types'
import Image from 'next/image'
import { titleFont } from '@/lib/fonts'
import { useState, useEffect } from 'react'

import Loading from '@/components/loading'
import OrderFlavorButtons from '@/components/order-flavors-buttons'
import OrderFlavorCard from '@/components/order-flavor-card'
import Button from '@/components/button'

export default function OrderFlavors({ title, langId, options, cakeFlavor, setCakeFlavor, cakeFlavorCategory, setCakeFlavorCategory, filling, setFilling, fillingCategory, setFillingCategory, frosting, frostingCategory, setFrosting, setFrostingCategory, changeStatus, initialFlavorStatus = null, isEditing }) {

  console.log ({isEditing})

  const flavorsAllStatus = Object.keys(options)
  const [flavorStatus, setFlavorStatus] = useState(initialFlavorStatus ? initialFlavorStatus : flavorsAllStatus[0])
  const [isLoading, setIsLoading] = useState(true)

  // Get flavor options
  const flavorOptions = options[flavorStatus]["options"]

  // Detect is a flavor is not selected
  const areFlavorsMissing = cakeFlavor === "" || filling === "" || frosting === ""

  // Get and clean active flavor
  const activeFlavorId = flavorStatus === "CakeFlavor" ? cakeFlavor : flavorStatus === "Filling" ? filling : frosting
  const activeFlavorCategory = flavorStatus === "CakeFlavor" ? cakeFlavorCategory : flavorStatus === "Filling" ? fillingCategory : frostingCategory

  // Main content wrapoper for custom scroll 
  
  // Detect when flavorStatus changes
  useEffect(() => {
    // Go to top smoothly
    const ViewScroll = document.querySelector(".view-scroll")
    if (flavorStatus != "CakeFlavor") {
      ViewScroll.scrollTo({ top: 100, behavior: "smooth" })
    }

    // Hide loading after 1 second
    setTimeout(() => {
      if (isLoading) {
        setIsLoading(false)
      }
    }, 2000)
  }, [flavorStatus, isLoading])

  return (
    <section className={`
      flavors 
      container 
      text-brown`
    }>
      <Image
        src="/images/order/flavors/hero.webp"
        alt="Flavors hero"
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
          uppercase
          font-bold
        `}
      >
        {title} {options[flavorStatus].names[langId]}
      </h2>

      {/* Flavor category selector */}
      <OrderFlavorButtons
        langId={langId}
        options={options}
        status={flavorStatus}
        onClick={(flavor) => {
          setIsLoading(true)
          setTimeout(() => {
            setFlavorStatus(flavor)
          }, 100)
        }}
        flavorsAllStatus={flavorsAllStatus}
        isLoading={isLoading}
        cakeFlavor={cakeFlavorCategory && options.CakeFlavor.options[cakeFlavorCategory].options[cakeFlavor][langId]}
        filling={fillingCategory && options.Filling.options[fillingCategory].options[filling][langId]}
        frosting={frostingCategory && options.Frosting.options[frostingCategory].options[frosting][langId]}
      />

      {/* Flavor cards */}
      <div
        className={`
          flavors-category-wrapper
          relative
          pb-5
          mb-14
          max-w-6xl
          mx-auto
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
                grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6
                gap-4
                w-11/12
                mx-auto
              `}>

              {flavorOptions[category].options.map((flavor, flavorIndex) => (
                <OrderFlavorCard
                  key={`${categoryIndex}-${flavorIndex}`}
                  flavor={flavor[0]}
                  onClick={() => {

                    // Save cake flavor
                    if (flavorStatus === "CakeFlavor") {
                      setCakeFlavor(flavorIndex)
                      setCakeFlavorCategory(category)
                      setIsLoading(true)
                    }

                    // Save filling
                    if (flavorStatus === "Filling") {
                      setFilling(flavorIndex)
                      setFillingCategory(category)
                      setIsLoading(true)
                    }

                    // Save frosting
                    if (flavorStatus === "Frosting") {
                      setFrosting(flavorIndex)
                      setFrostingCategory(category) 
                    }

                    if (isEditing) {
                      changeStatus("finalize")
                    }

                    // Go to next step
                    setTimeout(() => {

                      // Get next id
                      const nextFlavorStatusIndex = flavorsAllStatus.indexOf(flavorStatus) + 1

                      if (nextFlavorStatusIndex < flavorsAllStatus.length) {
                        // Move to next step
                        const nextFlavorStatus = flavorsAllStatus[nextFlavorStatusIndex]
                        setFlavorStatus(nextFlavorStatus)
                      } else {
                        // Move to next section
                        changeStatus("finalize")
                      }

                    }, 100)

                  }}
                  text={flavor[langId]}
                  category={category}
                  flavorStatus={flavorStatus}
                  isActive={flavorIndex === activeFlavorId && category === activeFlavorCategory}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}

OrderFlavors.propTypes = {
  title: propTypes.string.isRequired,
  langId: propTypes.number.isRequired,
  options: propTypes.object.isRequired,
  cakeFlavor: propTypes.number.isRequired,
  setCakeFlavor: propTypes.func.isRequired,
  cakeFlavorCategory: propTypes.string.isRequired,
  setCakeFlavorCategory: propTypes.func.isRequired,
  filling: propTypes.number.isRequired,
  setFilling: propTypes.func.isRequired,
  fillingCategory: propTypes.string.isRequired,
  setFillingCategory: propTypes.func.isRequired,
  frosting: propTypes.number.isRequired,
  setFrosting: propTypes.func.isRequired,
  frostingCategory: propTypes.string.isRequired,
  setFrostingCategory: propTypes.func.isRequired,
  changeStatus: propTypes.func.isRequired,
  initialFlavorStatus: propTypes.string,
  isEditing: propTypes.bool.isRequired,
}