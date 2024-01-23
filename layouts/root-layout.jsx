import { regularFont } from '@/lib/fonts'
import { LangContext } from "@/context/lang"
import { useContext } from "react"
import { useEffect } from "react"
import Header from '@/sections/header'
import Footer from '@/sections/footer'
import AOS from 'aos'
import Head from 'next/head'
import Script from 'next/script'
import 'aos/dist/aos.css';


export default function RootLayout({ children, customScroll = false}) {
  
  // Page data
  const socialIcon = [
    {
      icon: (<path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />),
      link: "https://www.facebook.com/cakestoremommy",
      isLink: true,
      hideDesktop: false,
    },
    {
      icon: (<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />),
      link: "https://www.instagram.com/cakestoremommy",
      isLink: true,
      hideDesktop: false,
    },
    {
      icon: (<path d="M18.48 22.926l-1.193.658c-6.979 3.621-19.082-17.494-12.279-21.484l1.145-.637 3.714 6.467-1.139.632c-2.067 1.245 2.76 9.707 4.879 8.545l1.162-.642 3.711 6.461zm-9.808-22.926l-1.68.975 3.714 6.466 1.681-.975-3.715-6.466zm8.613 14.997l-1.68.975 3.714 6.467 1.681-.975-3.715-6.467z"/>),
      link: "tel:5512501566",
      isLink: false,
      hideDesktop: true,
    },
    {
      icon: (<path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>),
      link: "https://api.whatsapp.com/send?phone=15512501566",
      isLink: true,
      hideDesktop: false,
    },
  ]
  
  const data = {
    "en": {
      "Header": {
        "menuItems": [
          { name: 'Order Now', path: '/order' },
          { name: 'About', path: '/#about' },
          { name: 'Gallery', path: '/#gallery' },
          { name: 'Contact', path: '/#contact' },
          { name: 'Our Flavors', path: '/#flavors' },
          { name: 'FAQs', path: '/#faqs'}
        ]
      },
      "Footer": {
        "title": "Contact us",
        "subtitle": "Follow Us",
        "phone": "551-250-1566",
        "copyright": "THE CAKE STORE MOMMY, INC. © 2023 ALL RIGHTS RESERVED",
        "socialIcons": socialIcon,
      },
    },
    "es": {
      "Header": {
        "menuItems": [
          { name: 'Ordernar', path: '/order' },
          { name: 'Acerca de', path: '/#about' },
          { name: 'Galería', path: '/#gallery' },
          { name: 'Contacto', path: '/#contact' },
          { name: 'Sabores', path: '/#flavors' },
          { name: 'FAQs', path: '/#faqs'}
        ]
      },
      "Footer": {
        "title": "Contáctanos",
        "subtitle": "Síguenos",
        "phone": "551-250-1566",
        "copyright": "CAKE STORE MOMMY, INC. © 2023 TODOS LOS DERECHOS RESERVADOS",
        "socialIcons": socialIcon,
      },
    }
  }

  const meta = {
    "es": {
      "title": "Cake Store Mommy",
      "description": "Cake Store Mommy es una pastelería que se especializa en pasteles personalizados para cualquier ocasión. ¡Ordene su pastel hoy!",
      "author": "Cake Store Mommy Inc.",
      "keywords": "pastelería, pasteles, pastel, cumpleaños, boda, bautizo, baby shower, fiesta, celebración, cake, cakes, birthday, wedding, baptism, party, celebration",
    },
    "en": {
      "title": "Cake Store Mommy",
      "description": "Cake Store Mommy is a bakery that specializes in custom cakes for any occasion. Order your cake today!",
      "author": "Cake Store Mommy Inc.",
      "keywords": "bakery, cakes, cake, birthday, wedding, baptism, baby shower, party, celebration",
    }
  }

  // Get language from context
  const { lang } = useContext(LangContext)
  
  // Get currenbt languaje data
  const dataLang = data[lang]
  const metaLang = meta[lang]


  // Load AOS
  useEffect(() => {
    AOS.init();
  }, [])
  
  const content = (
    <>
      <Header 
        {...dataLang.Header}
      />
      <main className={regularFont.className}>
        {children}
      </main>
      <Footer 
        {...dataLang.Footer}
      />
    </>
  )

  return (
    <>
      <Head>
        <title>{metaLang.title}</title>
        <meta name="description" content={metaLang.description} />
        <meta name="author" content={metaLang.author} />
        <meta name="keywords" content={metaLang.keywords} />     

        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Your JavaScript code here
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-T5N6ZM6X');
              console.log("Script executed!");
            `,
          }}
        />   
      </Head>
      {
        customScroll
        ?
        <div 
          className={`
            view-scroll
            w-full
            h-screen
            overflow-y-scroll
            mx-auto
          `}
        >
          {content}
        </div>
        :
        <div className="mx-auto">
          {content}          
        </div>
      }
    </>
  )
}
