import { titleFont } from "@/lib/fonts"

import Link from "next/link"
import Image from "next/image"
import FollowUs from "@/sections/follow-us"

export default function Thanks() {

  const socialIcons = [
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
      icon: (<path d="M18.48 22.926l-1.193.658c-6.979 3.621-19.082-17.494-12.279-21.484l1.145-.637 3.714 6.467-1.139.632c-2.067 1.245 2.76 9.707 4.879 8.545l1.162-.642 3.711 6.461zm-9.808-22.926l-1.68.975 3.714 6.466 1.681-.975-3.715-6.466zm8.613 14.997l-1.68.975 3.714 6.467 1.681-.975-3.715-6.467z" />),
      link: "tel:5512501566",
      isLink: false,
      hideDesktop: true,
    },
    {
      icon: (<path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />),
      link: "https://api.whatsapp.com/send?phone=15512501566",
      isLink: true,
      hideDesktop: false,
    },
  ]

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
              Back
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
            Thanks You!
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
            Your order has been placed.
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
            We will contact you soon as possible!
          </p>

        </main>

        <footer
          className={`
            my-10
          `}
        >
          <FollowUs
            subtitle={"Follow Us"}
            socialIcons={socialIcons}
            iconsColor={"brown"}
            iconsSmall={true}
          />
        </footer>
      </div>
    </>

  )
}

export async function getStaticProps() {
  const data = {
    sample: "sample"
  }
  return {
    props: { data }
  }
}