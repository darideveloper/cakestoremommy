import RootLayout from '@/layouts/root-layout'
import About from '@/sections/about'
import CustomizeCake from '@/sections/customize-cake'
import GallerySlider from '@/sections/gallery-slider'
import Hero from '@/sections/hero'
import WhyUs from '@/sections/why-us'
import Faqs from '@/sections/faqs'
import Flavors from '@/components/flavors'

import { LangContext } from "@/context/lang"
import { useContext } from "react"

import { flavorsData } from "@/api/flavors"
import { fetchData } from '@/lib/fetchData'

export default function Index({ data }) {
  const { lang, langId } = useContext(LangContext)
  console.log({lang, langId, data })
  const dataLang = data[lang]
  console.log({dataLang})

  return (
    <RootLayout>
      <Hero
        {...dataLang.Hero}
      />
      <GallerySlider
        {...dataLang.Gallery}
      />
      <CustomizeCake
        {...dataLang.CustomizeCake}
      />
      <WhyUs 
        {...dataLang.WhyUs}
      />
      <About
        {...dataLang.About}
      />
      <Faqs 
        {...dataLang.Faqs}
      />
      <Flavors 
        title={flavorsData.homeTitle[langId]}        
        langId={langId}
        options={flavorsData.options}
        isEditing={false}
        scroll={false}
        dynamicTitle={false}
        text={flavorsData.homeText[langId]}
        bigImage={false}
      />
    </RootLayout>
  )
}

export async function getServerSideProps() {
  try {

    const whyUsImages = [
      "why-us-1.svg",
      "why-us-2.svg",
      "why-us-3.svg",
    ]
    const cuttingGuideImages = [
      "cutting-guide-1.webp",
      "cutting-guide-2.webp",
    ]

    const data = {
      "en": {
        "Hero": {
          btnPrimaryText: "Order Now",
          btnSecondaryTexts: [],
        },
        "Gallery": {
          title: "Gallery",
          alt: "Cake image gallery item",
          viewAll: "View All",
        },
        "CustomizeCake": {
          title: "Customize Cake",
          description: "Custom cake ordering form",
        },
        "WhyUs": {
          title: "Why Us",
          cardsData: [
            {
              title: "Wide flavor selection",
              body: "When it comes to favors, our home bakery takes pride in offering an extensive selection. From clasic favorites like rich chocolate and vanilla to more elaborated like dulce de leche lemond curd, we have something for everyone",
              image: whyUsImages[0],
              alt: "Wide flavor selection image"
            },
            {
              title: "Unmatched cake decorating talent",
              body: "With over 14 years of experience our talented decorators possess exceptional artistry, attention and adaptability to create visually stunning masterpieces. With a keen eye for precision and a commitment to customer satisfaction, we collaborate closely to customize your dream cake.",
              image: whyUsImages[1],
              alt: "Unmatched cake decorating talent image"
            },
            {
              title: "Taste of homemade goodness",
              body: "Being a home bakery allow us to prioritize freshness in our ingredients. Experience the       difference that fresh ingredients make and indulge in the flavorful creations that only a home baker can deliver",
              image: whyUsImages[2],
              alt: "Taste of homemade goodness image"
            },
          ]
        },
        "About": {
          title: "About Us",
          textDecoration: "cake with love",
          textA: "Welcome to Cake Store Mommy, where we specialize in making your sweet dreams a reality! We understand the power of a beautifully crafted cake to make your celebrations truly special. Whether its a birthday, anniversary, wedding, or any other milestone we are dedicated to delivering stunning creations that not only taste incredible but also leave a lasting impression.",
          textB: "We believe that a cake is more than just a dessert; it is a centerpiece that marks moments of togetherness and creates lasting memories. Thats's why we pour our heart soul into every cake we create, infusing it with our passion for baking and our commitment to excellence.",
        },
        "Faqs": {
          title: "FAQS",
          questions: [
            {
              "question": "HOW TO ORDER",
              "text": "Tou can place your order trough our ordering system in our website or you can just email us with the number of servings, cake flavor, frosting choice, filling preference any photo reference for design inspiration, event date. We will reply with an estimate as soon as possible. We required orders to be at least 2 weeks in advance",
              "images": [],
            },
            {
              "question": "CUTTING GUIDE",
              "text": "",
              "images": cuttingGuideImages,
            },
            {
              "question": "ALLERGY POLICIES",
              "text": "Please note that we operate from a home kitchen, and while we uphold strict cleanliness and hygiene standards, we cant guarantee that our products are allergy free. We kindly ask our customers to inform us of any allergies or dietary restrictions when placing an order. This will help us provide guidance to ensure your safety and satisfaction.",
              "images": [],
            },
            {
              "question": "PICK-UP POLICIES",
              "text": "We kindly request that customers pick up their cakes at the scheduled time. We understand that delays can happen, but we can't promise to wait longer than 30 mins past the pick up time. If you need to change your pick-up time, please let us know in advance, and we'll do our best to accomodate",
              "images": [],
            },
            {
              "question": "CANCELLATION POLICIES",
              "text": "Once a deposit has been received we regret that we cannot accomodate order cancellations. One change in the order is accepted as long is 72 hours before delivery date ",
              "images": [],
            },
          ]
        }
      },
      "es": {
        "Hero": {
          btnPrimaryText: "Ordena Ahora",
          btnSecondaryTexts: [],
        },
        "Gallery": {
          title: "Galería",
          alt: "Elemento de galería de imágenes de pasteles",
          viewAll: "Ver Todo",
        },
        "CustomizeCake": {
          title: "Personaliza tu pastel",
          description: "Formulario de pedido personalizado",
        },
        "WhyUs": {
          title: "Por qué nosotros",
          cardsData: [
            {
              title: "Amplia selección de sabores",
              body: "Cuando se trata de sabores, nuestra panadería casera se enorgullece de ofrecer una amplia selección. Desde favoritos clásicos como el rico chocolate y la vainilla hasta más elaborados como el dulce de leche, tenemos algo para todos.",
              image: whyUsImages[0],
              alt: "Imagen de amplia selección de sabores"
            },
            {
              title: "Talento incomparable para decorar pasteles",
              body: "Con más de 14 años de experiencia, nuestros talentosos decoradores poseen una excepcional habilidad artística, atención y adaptabilidad para crear obras maestras visualmente impresionantes. Con un ojo agudo para la precisión y un compromiso con la satisfacción del cliente, colaboramos estrechamente para personalizar tu pastel soñado.",
              image: whyUsImages[1],
              alt: "Imagen de talento incomparable para decorar pasteles"
            },
            {
              title: "Sabor de la bondad casera",
              body: "Ser una panadería casera nos permite priorizar la frescura de nuestros ingredientes. Experimenta la diferencia que hacen los ingredientes frescos y disfruta de las creaciones sabrosas que solo un panadero casero puede ofrecer.",
              image: whyUsImages[2],
              alt: "Imagen de sabor de la bondad casera"
            },
          ]
        },
        "About": {
          title: "Nosotros",
          textDecoration: "pastel con amor",
          textA: "Bienvenido a Cake Store Mommy, donde nos especializamos en hacer realidad tus dulces sueños. Entendemos el poder de un pastel bellamente elaborado para hacer que tus celebraciones sean realmente especiales. Ya sea un cumpleaños, aniversario, boda o cualquier otro hito, estamos dedicados a entregar creaciones impresionantes que no solo tienen un sabor increíble, sino que también dejan una impresión duradera.",
          textB: "Creemos que un pastel es más que un postre; es una pieza central que marca momentos de unión y crea recuerdos duraderos. Es por eso que vertimos nuestro corazón y alma en cada pastel que creamos, infundiéndolo con nuestra pasión por la repostería y nuestro compromiso con la excelencia.",
        },
        "Faqs": {
          title: "Preguntas Frecuentes",
          questions: [
            {
              "question": "CÓMO ORDENAR",
              "text": "Puedes realizar tu pedido a través de nuestro sistema de pedidos en nuestro sitio web o simplemente puedes enviarnos un correo electrónico con el número de porciones, sabor del pastel, elección de glaseado, preferencia de relleno, cualquier referencia fotográfica para inspiración de diseño, fecha del evento. Responderemos con un presupuesto lo antes posible. Requerimos que los pedidos se realicen con al menos 2 semanas de anticipación",
              "images": [],
            },
            {
              "question": "GUÍA DE CORTE",
              "text": "",
              "images": cuttingGuideImages,
            },
            {
              "question": "POLÍTICA DE ALERGIAS",
              "text": "Tenga en cuenta que operamos desde una cocina casera y, si bien mantenemos estrictos estándares de limpieza e higiene, no podemos garantizar que nuestros productos estén libres de alérgenos. Pedimos amablemente a nuestros clientes que nos informen sobre cualquier alergia o restricción dietética al realizar un pedido. Esto nos ayudará a brindar orientación para garantizar su seguridad y satisfacción.",
              "images": [],
            },
            {
              "question": "POLÍTICAS DE RECOGIDA",
              "text": "Solicitamos amablemente que los clientes recojan sus pasteles a la hora programada. Entendemos que pueden ocurrir retrasos, pero no podemos prometer esperar más de 30 minutos después de la hora de recogida. Si necesita cambiar la hora de recogida, avísenos con anticipación y haremos todo lo posible para acomodarlo",
              "images": [],
            },
            {
              "question": "POLÍTICAS DE CANCELACIÓN",
              "text": "Una vez que se haya recibido un depósito, lamentamos no poder cancelar pedidos. Se acepta un cambio en el pedido siempre y cuando sea 72 horas antes de la fecha de entrega",
              "images": [],
            },
          ]
        }
      }
    }

    return {
      props: { 
        data
      }
    }
  } catch (error) {
    console.error('Error fetching data:', error)
    return {
      props: { 
        data: {},
        galleryImages: { results: [] }
      }
    }
  }
}