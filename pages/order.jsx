import PropTypes from "prop-types"

import { useState, useEffect } from "react"

import RootLayout from "@/layouts/root-layout"

import OrderStatus from "@/sections/order-status"
import OrderExit from "@/components/order-exit"
import OrderSize from "@/sections/order-size"
import OrderFlavors from "@/sections/order-flavors"
import OrderFinalize from "@/sections/order-finalize"

import { LangContext } from "@/context/lang"
import { useContext } from "react"

import Loading from "@/components/loading"

import { flavorsData } from "@/api/flavors"

export default function Order({ data }) {

  const { langId } = useContext(LangContext)

  const [statusName, setStatusName] = useState("size")
  const [isLoading, setIsLoading] = useState(false)
  const [layersId, setLayersId] = useState(1)
  const [diameterId, setDiameterId] = useState(1)
  const [cakeFlavorId, setCakeFlavorId] = useState(0)
  const [cakeFlavorCategory, setCakeFlavorCategory] = useState("")
  const [fillingId, setFillingId] = useState(0)
  const [fillingCategory, setFillingCategory] = useState("")
  const [frostingId, setFrostingId] = useState(0)
  const [frostingCategory, setFrostingCategory] = useState("")
  const [initialFlavorStatus, setInitialFlavorStatus] = useState("")
  const [isEditing, setIsEditing] = useState(false)

  // Main content wrapoper for custom scroll 

  // Detect when statusName changes
  useEffect(() => {
    // Go to top smoothly
    const ViewScroll = document.querySelector(".view-scroll")
    ViewScroll.scrollTo({ top: 100, behavior: "smooth" })

    // Hide loading after 1 second
    setTimeout(() => {
      if (isLoading) {
        setIsLoading(false)
      }
    }, 1000)
  }, [statusName, isLoading])

  function changeStatus(status) {
    setIsLoading(true)
    setTimeout(() => {
      setStatusName(status)
    }, 100)
  }

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
        changeStatus={changeStatus}
        faqText={data.size.faqText[langId]}
        faqLink={data.size.faqLink[langId]}
        isEditing={isEditing}
        labels={data.size.labels}
      />
    )
  } else if (statusName === "flavors") {
    currentScreen = (
      <OrderFlavors
        title={data.flavors.orderTitle[langId]}
        langId={langId}
        options={data.flavors.options}
        cakeFlavor={cakeFlavorId}
        setCakeFlavor={setCakeFlavorId}
        cakeFlavorCategory={cakeFlavorCategory}
        setCakeFlavorCategory={setCakeFlavorCategory}
        filling={fillingId}
        setFilling={setFillingId}
        fillingCategory={fillingCategory}
        setFillingCategory={setFillingCategory}
        frosting={frostingId}
        setFrosting={setFrostingId}
        frostingCategory={frostingCategory}
        setFrostingCategory={setFrostingCategory}
        changeStatus={changeStatus}
        initialFlavorStatus={initialFlavorStatus}
        isEditing={isEditing}
      />
    )
  } else if (statusName === "finalize") {
    currentScreen = (
      <OrderFinalize
        title={data.finalize.title[langId]}
        langId={langId}
        cakeFlavorId={cakeFlavorId}
        cakeFlavorCategory={cakeFlavorCategory}
        fillingId={fillingId}
        fillingCategory={fillingCategory}
        frostingId={frostingId}
        frostingCategory={frostingCategory}
        diameter={data.size.options[layersId - 1].diameters[diameterId - 1][langId]}
        layersId={layersId}
        flavorOptions={data.flavors.options}
        sizeOptions={data.size.options}
        subtitles={data.finalize.subtitles}

        // Sample data 
        // title={data.finalize.title[langId]}
        // langId={langId}
        // cakeFlavorId={1}
        // cakeFlavorCategory={"basic"}
        // fillingId={1}
        // fillingCategory={"basic"}
        // frostingId={1}
        // frostingCategory={"basic"}
        // diameter={data.size.options[0].diameters[diameterId-1][langId]}
        // layersId={1}
        // flavorOptions={data.flavors.options}
        // sizeOptions={data.size.options}
        // subtitles={data.finalize.subtitles}

        changeStatus={changeStatus}
        setInitialFlavorStatus={setInitialFlavorStatus}
        setIsEditing={setIsEditing}
        inputs={data.finalize.inputs}
        faqTextBefore={data.finalize.faqTextBefore[langId]}
        faqLink={data.finalize.faqLink[langId]}
        faqTextAfter={data.finalize.faqTextAfter[langId]}
      />
    )
  }

  return (
    <RootLayout customScroll={true}>

      <div className={`
        content
        flex md:flex-row
        flex-col items-center justify-center
        w-full
        relative
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
      "labels": {
        "layers": ["Select layers", "Elige los pisos"],
        "diameter": ["Select diameter", "Elige el diámetro"]
      },
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
      ],
      "faqText": ['The suggested serving quantity is based on a standard 5” tall cake and may vary depending on the cutting style. For more information, please', 'La cantidad sugerida de porciones se basa en un pastel estándar de 5" de alto y puede variar según el estilo de corte. Para más información, por favor'],
      "faqLink": ["click here", "haz click aquí"],
    },
    "flavors": {
      ...flavorsData
    },
    "finalize": {
      "title": ["Order Details", "Detalles del pedido"],
      "subtitles": {
        "size": ["Size", "Tamaño"],
        "cakeFlavor": ["Cake Flavor", "Sabor del pastel"],
        "filling": ["Filling", "Relleno"],
        "frosting": ["Frosting", "Cobertura"],
        "image": ["Upload photo references of the cake design", "Sube fotos de referencia del diseño del pastel"],
        "additional": ["Additional cake details", "Detalles adicionales del pastel"],
        "budget": ["Budget (optional)", "Presupuesto (opcional)"],
        "contact": ["Contact information", "Información de contacto"],
        "orderType": ["Choose Order Type", "Elige el tipo de pedido"],
        "pickUp": ["Choose Pick Up Date", "Elige la fecha de recogida"],
        "delivery": ["Choose Delivery Date", "Elige la fecha de entrega"],
      },
      "inputs": {
        "name": ["First Name", "Nombre"],
        "lastName": ["Last Name", "Apellido"],
        "phone": ["Phone Number", "Número de teléfono"],
        "email": ["Email Address", "Correo electrónico"],
        "pickUp": ["Pick Up", "Recoger"],
        "delivery": ["Delivery", "Entrega"],
        "deliveryAddress": ["Address", "Dirección"],
        "deliveryCity": ["City", "Ciudad"],
        "deliveryZipCode": ["Zip Code", "Código postal"],
        "date": ["Select Date", "Elige la fecha"],
        "time": ["Select Time", "Elige la hora"],
        "submit": ["Place Order", "Realizar pedido"],
      },
      "faqTextBefore": [
        "We will contact you with a price after reviewing the information provided. To begin your order, we kindly request a 50% deposit. The remaining balance is due on the delivery date. If you need tor reschedule your order, please do so at least 72 hours in advance. For more details on our policies, please refer to our FAQ section.",
        "Nos pondremos en contacto contigo con un precio después de revisar la información proporcionada. <br> Para comenzar tu pedido, solicitamos un depósito del 50%. El saldo restante se debe en la fecha de entrega. Si necesitas reprogramar tu pedido, hazlo al menos 72 horas antes. Para obtener más detalles sobre nuestras políticas, consulta nuestra sección de preguntas frecuentes."
      ],
      "faqLink": ["Click here", "Haz click aquí"],
      "faqTextAfter": ["to learn more", "para obtener más información"],

    }
  }

  return {
    props: { data }
  }
}