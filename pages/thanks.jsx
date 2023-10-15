import { titleFont } from "@/lib/fonts"

import Link from "next/link"
import Image from "next/image"
import FollowUs from "@/sections/follow-us"

import { useSearchParams } from 'next/navigation'

export default function Thanks({back, thanks, orderPlaced, weWillContact, follow}) {

  // Get land param from url (if any)
  let langId = 0
  const lang = useSearchParams().get("lang")
  if (lang) {
    const langs = ["en", "es"]
    langId = langs.indexOf(lang)
  } 

  return (
    <>
      <div
        className={`
        container-wrapper 
        bg-pink 
        -mb-22
        min-h-screen
        text-brown 
        flex
        flex-col
        justify-between
        items-center
      `}
      >
        <header
          className={`
            container
            mx-auto
          `}
        >
          <h1
            className={`
            text-lg
            w-full
            text-center
            opacity-50
          `}
          >
            CAKE STORE MOMMY
          </h1>
          <Link
            className={`
            go-back
            flex
            items-center
            justify-start
            w-full
          `}
            href="/"
          >

            <svg
              strokeLinejoin="round"
              strokeMiterlimit="2"
              viewBox="0 0 24 24"
              className={`
              w-5
              mr-2
              fill-brown
            `}
            >
              <path d="m9.474 5.209s-4.501 4.505-6.254 6.259c-.147.146-.22.338-.22.53s.073.384.22.53c1.752 1.754 6.252 6.257 6.252 6.257.145.145.336.217.527.217.191-.001.383-.074.53-.221.293-.293.294-.766.004-1.057l-4.976-4.976h14.692c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-14.692l4.978-4.979c.289-.289.287-.761-.006-1.054-.147-.147-.339-.221-.53-.221-.191-.001-.38.071-.525.215z" />
            </svg>
            <p>
              {back[langId]}
            </p>

          </Link>

        </header>


        <main
          className={`
          container
          mx-auto
          bg-pink
          h-full
          flex
          items-center
          flex-col
          justify-center
        `}
        >

          <h2
            className={`
            text-4xl
            ${titleFont.className}
            w-full
            text-center
            pt-12
          `}
          >
            {thanks[langId]}
          </h2>

          <p
            className={`
              text-lg
              ${titleFont.className}
              py-10
              w-3/4
              text-center
              mx-auto
            `}
          >
            {orderPlaced[langId]}
          </p>

          <Image
            src="/images/logo.webp"
            width={500}
            height={500}
            alt="Cake Store Mommy logo"
            className={`
            mx-auto
            mb-10
            w-1/2
            max-w-xs
            `}
          />

          <p
            className={`
              text-lg
              ${titleFont.className}
              w-3/4
              text-center
              mx-auto
            `}
          >
            {weWillContact[langId]}
          </p>

        </main>

        <footer
          className={`
            my-10
          `}
        >
          <FollowUs
            subtitle={follow[langId]}
            iconsColor={"brown"}
            iconsSmall={true}
          />
        </footer>
      </div>
    </>

  )
}

export async function getStaticProps() {

  return {
    props: {
      back: ["Back", "Regresar"],
      thanks: ["Thanks You!", "¡Gracias!"],
      orderPlaced: ["Your order has been placed.", "Tu orden ha sido recibida."],
      weWillContact: ["We will contact you soon as possible!", "Nos pondremos en contacto contigo lo antes posible."],
      follow: ["Follow Us", "Síguenos"],
    }
  }
}