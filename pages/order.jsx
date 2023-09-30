import PropTypes from "prop-types"

import { titleFont } from "@/lib/fonts"
import { useState, useEffect } from "react"

import RootLayout from "@/layouts/root-layout"

import OrderStatus from "@/components/order-status"

import { LangContext } from "@/context/lang"
import { useContext } from "react"

import Loading from "@/components/loading"

export default function Order({ data }) {

  const langs = ["en", "es"]
  const { lang } = useContext(LangContext)
  const langId = langs.indexOf(lang)

  const [statusName, setStatusName] = useState("size")
  const [isLoading, setIsLoading] = useState(false)

  // Detect when statusName changes
  useEffect(() => {
    // Hide loading
    setTimeout(() => {
      if (isLoading) {
        setIsLoading(false)
      }
    }, 1000)
  }, [statusName])

  return (
    <RootLayout>
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
        h-screen
      `}>
        
        <Loading 
          isVisible={isLoading}
          bgColor="bg-white"
          extraClasses="z-20 items-start pt-10"
        />

        <p>{statusName}</p>
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
          "sizes": [
            ['4" 2-4 servings', '4" 2-4 porciones'],
            ['6" 10-12 servings', '6" 10-12 porciones'],
            ['8" 15-22 servings', '8" 15-22 porciones'],
            ['10" 30-35 servings', '10" 30-35 porciones'],
            ['12" 40-50 servings', '12" 40-50 porciones'],
            ['14" 60-70 servings', '14" 60-70 porciones'],
          ]
        },
        {
          "layers": ["two layers", "dos pisos"],
          "sizes": [
            ['4" & 6" 15 servings', '4" & 6" 15 porciones'],
            ['6" & 8" 40 servings', '6" & 8" 40 porciones'],
            ['8" & 10" 60 servings', '8" & 10" 60 porciones'],
            ['10" & 12" 80 servings', '10" & 12" 80 porciones'],
          ]
        },
        {
          "layers": ["three layers", "tres pisos"],
          "sizes": [
            ['4", 6" & 8" 45 servings', '4", 6" & 8" 45 porciones'],
            ['6", 8" & 10" 75 servings', '6", 8" & 10" 75 porciones'],
            ['8", 10" & 12" 95 servings', '8", 10" & 12" 95 porciones'],
          ]
        },
        {
          "layers": ["four layers", "cuatro pisos"],
          "sizes": []
        }
      ]
    },
  }

  return {
    props: { data }
  }
}