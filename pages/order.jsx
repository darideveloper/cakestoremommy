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

export default function Order({ data }) {

  const langs = ["en", "es"]
  const { lang } = useContext(LangContext)
  const langId = langs.indexOf(lang)

  const [statusName, setStatusName] = useState("finalize")
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
        faqText={data.flavors.faqText[langId]}
        faqLink={data.flavors.faqLink[langId]}
        isEditing={isEditing}
      />
    )
  } else if (statusName === "flavors") {
    currentScreen = (
      <OrderFlavors
        title={data.flavors.title[langId]}
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
        // title={data.finalize.title[langId]}
        // langId={langId}
        // cakeFlavorId={cakeFlavorId}
        // cakeFlavorCategory={cakeFlavorCategory}
        // fillingId={fillingId}
        // fillingCategory={fillingCategory}
        // frostingId={frostingId}
        // frostingCategory={frostingCategory}
        // diameter={data.size.options[layersId - 1].diameters[diameterId - 1][langId]}
        // layersId={layersId}
        // flavorOptions={data.flavors.options}
        // sizeOptions={data.size.options}
        // subtitles={data.finalize.subtitles}

        // Sample data 
        title={data.finalize.title[langId]}
        langId={langId}
        cakeFlavorId={1}
        cakeFlavorCategory={"basic"}
        fillingId={1}
        fillingCategory={"basic"}
        frostingId={1}
        frostingCategory={"basic"}
        diameter={data.size.options[0].diameters[diameterId-1][langId]}
        layersId={1}
        flavorOptions={data.flavors.options}
        sizeOptions={data.size.options}
        subtitles={data.finalize.subtitles}

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
      "title": ["PICK A ", "ESCOGE UN "],
      "faqText": ['The suggested serving quantity is based on a standard 5” tall cake and may vary depending on the cutting style. For more information, please', 'La cantidad sugerida de porciones se basa en un pastel estándar de 5" de alto y puede variar según el estilo de corte. Para más información, por favor'],
      "faqLink": ["click here", "haz click aquí"],
      "options": {
        "CakeFlavor": {
          "names": ["Cake Flavor", "Sabor del pastel"],
          "options": {
            "basic": {
              "name": ["Basic", "Básico"],
              "options": [
                ["chocolate", "chocolate"],
                ["vanilla", "vainilla"],
                ["red velvet", "red velvet"],
                ["vanilla funfetti", "vailla funfetti"],
                ["chocolate funtetti", "chocolate funtetti"],
                ["vanilla oreo", "oreo de vainilla"],
                ["chocolate oreo", "oreo de chocolate"],
                ["chocolate chips", "chispas de chocolate"],
                ["vanilla chocolate chip", "chispas de chocolate de vainilla"],
                ["coconut", "coco"],
                ["carrot", "zanahoria"],
                ["banana", "plátano"],
                ["cinnamon", "canela"],
              ],
            },
            "premium": {
              "name": ["Premium", "Premium"],
              "options": [
                ["champange", "champaña"],
                ["vanilla funfetti oreo", "oreo de vainilla funfetti"],
                ["chocolate funfetti oreo", "oreo de chocolate funfetti"],
                ["vanilla funfetti chocolate chip", "chispas de chocolate y vainilla funfetti"],
                ["chocolate funfetti chocolate chip", "chispas de chocolate y chocolate funfetti"],
                ["red velvet oreo", "oreo de red velvet"],
                ["red velvet chocolate chip", "chispas de chocolate y red velvet"],
                ["chocolate peanut butter chip", "chispas de chocolate y mantequilla de maní"],
                ["chocolate peanut butter chip oreo", "oreo con chispas de chocolate y mantequilla de maní"],
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
                ["caramel buttercream", "crema de mantequilla de caramelo"],
                ["vanilla buttercream", "crema de mantequilla de vainilla"],
                ["chocolate buttercream", "crema de mantequilla de chocolate"],
                ["nutella buttercream", "crema de mantequilla de nutella"],
                ["oreo buttercream", "crema de mantequilla de oreo"],
                ["lemon buttercream", "crema de mantequilla de limón"],
                ["peanut buttercream", "crema de mantequilla de mantequilla de maní"],
                ["pianut butter oreo buttercream", "crema de mantequilla de mantequilla de maní y oreo"],
                ["cinnamon buttercream", "crema de mantequilla de canela"],
              ],
            },
            "premium": {
              "name": ["Premium", "Premium"],
              "options": [
                ["vanilla pudding", "pudding de vainilla"],
                ["chocolate pudding", "pudding de chocolate"],
                ["oreo pudding", "pudding de oreo"],
                ["banana pudding", "pudding de plátano"],
                ["strawberry mousse", "mousse de fresa"],
                ["chocolate mousse", "mousse de chocolate"],
                ["raspberry mousse", "mousse de frambuesa"],
                ["vanilla mousse", "mousse de vainilla"],
                ["oreo fresh whip cream", "crema batida de oreo"],
                ["marshmallow", "malvavisco"],
                ["chocolate fudge", "fudge de chocolate"],
                ["fresh whip cream", "crema batida fresca"],
                ["coconut pastry cream", "crema pastelera de coco"],
              ],
            },
            "luxury": {
              "name": ["Luxury", "De lujo"],
              "options": [
                ["canoli cream", "crema de canoli"],
                ["dulce de leche", "dulce de leche"],
                ["nutella", "nutella"],
                ["blueberry (cooked)", "arándano azul (cocinado)"],
                ["raspberry (cooked)", "frambuesa (cocinado)"],
                ["strawberry (cooked)", "fresa (cocinado)"],
                ["mixed berry (cooked)", "mezcla de frutos rojos (cocinado)"],
                ["cookie", "galleta"],
                ["lemon curd", "crema de limón"],
                ["cookie dough", "masa de galleta"],
                ["s'mores cake", "pastel de s'mores"],
              ]
            }
          },
        },
        "Frosting": {
          "names": ["Frosting", "Cobertura"],
          "options": {
            "basic": {
              "name": ["Basic", "Básico"],
              "options": [
                ["strawberry buttercream", "crema de mantequilla de fresa"],
                ["vanilla buttercream", "crema de mantequilla de vainilla"],
                ["chocolate buttercream", "crema de mantequilla de chocolate"],
                ["chocolate fudge", "fudge de chocolate"],
                ["oreo buttercream", "crema de mantequilla de oreo"],
                ["lemon buttercream", "crema de mantequilla de limón"],
                ["fresh whipped cream", "crema batida fresca"],
                ["cream cheese", "queso crema"],
              ],
            },
          },
        }
      }
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
        "We will contact you with a price after reviewing the information provided. <br> To begin your order, we kindly request a 50% deposit. The remaining balance is due on the delivery date. If you need tor reschedule your order, please do so at least 72 hours in advance. For more details on our policies, please refer to our FAQ section.",
        "Nos pondremos en contacto contigo con un precio después de revisar la información proporcionada. <br> Para comenzar tu pedido, solicitamos un depósito del 50%. El saldo restante se debe en la fecha de entrega. Si necesitas reprogramar tu pedido, hazlo al menos 72 horas antes. Para obtener más detalles sobre nuestras políticas, consulta nuestra sección de preguntas frecuentes."
      ],
      "faqLink": ["Click here", "Haz click aquí"],
      "faqTextAfter": ["to larn more", "para obtener más información"],

    }
  }

  return {
    props: { data }
  }
}