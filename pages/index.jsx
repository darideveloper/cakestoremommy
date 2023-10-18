import RootLayout from '@/layouts/root-layout'
import About from '@/sections/about'
import CustomizeCake from '@/sections/customize-cake'
import GallerySlider from '@/sections/gallery-slider'
import Hero from '@/sections/hero'
import WhyUs from '@/sections/why-us'
import Faqs from '@/sections/faqs'

import { LangContext } from "@/context/lang"
import { useContext } from "react"

export default function Index({ data }) {

  const { lang } = useContext(LangContext)
  const dataLang = data[lang]

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
    </RootLayout>
  )
}


export async function getStaticProps() {

  const galleryImages = [
    "gallery-1.png",
    "gallery-2.png",
    "gallery-3.png",
    "gallery-4.png",
    "gallery-5.png",
    "gallery-6.png",
    "gallery-7.png",
    "gallery-8.png",
  ]
  const whyUsImages = [
    "why-us-1.svg",
    "why-us-2.svg",
    "why-us-3.svg",
  ]

  const data = {
    "en": {
      "Hero": {
        btnPrimaryText: "Order Now",
        // btnSecondaryTexts: ["Cakes for",  "$100"],
        btnSecondaryTexts: [],
      },
      "Gallery": {
        title: "Gallery",
        alt: "Cake image gallery item",
        images: galleryImages,
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
      }
    },
    "es": {
      "Hero": {
        btnPrimaryText: "Ordena Ahora",
        // btnSecondaryTexts: ["Pasteles por",  "$100"],
        btnSecondaryTexts: [],
      },
      "Gallery": {
        title: "Galería",
        alt: "Elemento de galería de imágenes de pasteles",
        images: galleryImages,
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
        title: "FAQS",
      }
    }
  }

  return {
    props: { data }
  }
}