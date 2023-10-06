import PropTypes from "prop-types"

import { useState, useEffect } from "react"

import RootLayout from "@/layouts/root-layout"

import OrderStatus from "@/components/order-status"
import OrderExit from "@/components/order-exit"
import OrderSize from "@/components/order-size"
import OrderFlavors from "@/components/order-flavors"

import { LangContext } from "@/context/lang"
import { useContext } from "react"

import Loading from "@/components/loading"

export default function Order({ data }) {

  const langs = ["en", "es"]
  const { lang } = useContext(LangContext)
  const langId = langs.indexOf(lang)

  const [statusName, setStatusName] = useState("flavors")
  const [isLoading, setIsLoading] = useState(false)
  const [layersId, setLayersId] = useState(1)
  const [diameterId, setDiameterId] = useState(1)

  // Detect when statusName changes
  useEffect(() => {
    // Hide loading after 1 second
    setTimeout(() => {
      if (isLoading) {
        setIsLoading(false)
      }
    }, 1000)
  }, [statusName, isLoading])

  // Render current order screen
  let currentScreen = null
  if (statusName === "size") {
    currentScreen = (
      <OrderSize
        layers={layersId}
        setLayers={setLayersId}
        diameter={diameterId}
        setDiameter={setDiameterId}
        langId={langId}
        title={data.size.title[langId]}
        subtitle={data.size.subtitle[langId]}
        sizesData={data.size.options}
        goNext = {() => {
          setIsLoading(true)
          setStatusName("flavors")
        }}
      />
    )
  } else if (statusName === "flavors") {
    currentScreen = (
      <OrderFlavors 
        title={data.flavors.title[langId]}
        langId={langId}
        options={data.flavors.options}
      />
    )

  }

  return (
    <RootLayout>

      <div className={`
        content
        flex md:flex-row
        flex-col items-center justify-center
        w-full
      `}>

        {/* Status bar in top */}
        <OrderStatus
          currentStatus={statusName}
          allStatus={data.status}
          onChangeStatus={setStatusName}
          langId={langId}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />

        <div className={`
          container 
          mx-auto 
          relative
        `}>

          {/* Loading modal */}
          <Loading
            isVisible={isLoading}
            bgColor="bg-white"
            extraClasses="z-20 items-start pt-10"
          />

          {/* Exit button in top right corner */}
          <OrderExit />

          {currentScreen}
          
        </div>
      </div>


    </RootLayout>
  )
}

Order.propTypes = {
  imagesData: PropTypes.arrayOf(PropTypes.object),
}

export async function getStaticProps() {
  const data = {
    "status": {
      "size": ["size", "tamaño"],
      "flavors": ["flavors", "sabores"],
      "finalize": ["finalize", "finalizar"],
    },
    "size": {
      "title": ["Size Selection", "Selección de tamaño"],
      "subtitle": ["Pick up a size from below", "Elige un tamaño a contunuación"],
      "options": [
        {
          "layers": ["one layer", "un piso"],
          "diameters": [
            ['4"  2-4 servings', '4"  2-4 porciones'],
            ['6"  10-12 servings', '6"  10-12 porciones'],
            ['8"  15-22 servings', '8"  15-22 porciones'],
            ['10"  30-35 servings', '10"  30-35 porciones'],
            ['12"  40-50 servings', '12"  40-50 porciones'],
            ['14"  60-70 servings', '14"  60-70 porciones'],
          ]
        },
        {
          "layers": ["two layers", "dos pisos"],
          "diameters": [
            ['4" & 6"  15 servings', '4" & 6"  15 porciones'],
            ['6" & 8"  40 servings', '6" & 8"  40 porciones'],
            ['8" & 10"  60 servings', '8" & 10"  60 porciones'],
            ['10" & 12"  80 servings', '10" & 12"  80 porciones'],
          ]
        },
        {
          "layers": ["three layers", "tres pisos"],
          "diameters": [
            ['4", 6" & 8"  45 servings', '4", 6" & 8"  45 porciones'],
            ['6", 8" & 10"  75 servings', '6", 8" & 10"  75 porciones'],
            ['8", 10" & 12"  95 servings', '8", 10" & 12"  95 porciones'],
          ]
        },
        {
          "layers": ["four layers", "cuatro pisos"],
          "diameters": [
            ["Custom", "Personalizado"],
          ]
        }
      ]
    },
    "flavors": {
      "title": ["PICK A CATEGORY", "ESCOGE UNA CATEGORÍA"],
      "options": {
        "CakeFlavor": {
          "names": ["Cake Flavor", "Sabor del pastel"],
          "options": {
            "basic": {
              "name": ["Basic", "Básico"],
              "options": [
                ["vanilla", "vainilla"],
                ["vanilla", "vainilla"],
                ["vanilla", "vainilla"],
                ["vanilla", "vainilla"],
                ["vanilla", "vainilla"],
              ],
            },
            "premium": {
              "name": ["Premium", "Premium"],
              "options": [
                ["vanilla", "vainilla"],
                ["vanilla", "vainilla"],
                ["vanilla", "vainilla"],
                ["vanilla", "vainilla"],
                ["vanilla", "vainilla"],
                ["vanilla", "vainilla"],
                ["vanilla", "vainilla"],
                ["vanilla", "vainilla"],
                ["vanilla", "vainilla"],
                ["vanilla", "vainilla"],
              ],
            }
          },
        },
        "Filling": {
          "names": ["Filling", "Relleno"],
          "options": {
            "basic": {
              "name": ["Basic", "Básico"],
              "options": [
                ["vanilla", "vainilla"],
                ["vanilla", "vainilla"],
                ["vanilla", "vainilla"],
                ["vanilla", "vainilla"],
                ["vanilla", "vainilla"],
                ["vanilla", "vainilla"],
                ["vanilla", "vainilla"],
                ["vanilla", "vainilla"],
                ["vanilla", "vainilla"],
                ["vanilla", "vainilla"],
                ["vanilla", "vainilla"],
              ],
            },
            "premium": {
              "name": ["Premium", "Premium"],
              "options": [
                ["vanilla", "vainilla"],
                ["vanilla", "vainilla"],
                ["vanilla", "vainilla"],
                ["vanilla", "vainilla"],
                ["vanilla", "vainilla"],
                ["vanilla", "vainilla"],
                ["vanilla", "vainilla"],
                ["vanilla", "vainilla"],
                ["vanilla", "vainilla"],
                ["vanilla", "vainilla"],
                ["vanilla", "vainilla"],
                ["vanilla", "vainilla"],
              ],
            }
          },
        },
        "Frosting": {
          "names": ["Frosting", "Cobertura"],
          "options": {
            "basic": {
              "name": ["Basic", "Básico"],
              "options": [
                ["vanilla", "vainilla"],
                ["vanilla", "vainilla"],
                ["vanilla", "vainilla"],
                ["vanilla", "vainilla"],
                ["vanilla", "vainilla"],
                ["vanilla", "vainilla"],
                ["vanilla", "vainilla"],
              ],
            },
          },
        }
      }
    }
  }

  return {
    props: { data }
  }
}