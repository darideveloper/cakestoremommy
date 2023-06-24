import PropTypes from 'prop-types'
import { useEffect, useState } from "react"
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide'
import Image from 'next/image'
import Section from "@/sections/section"
import ButtonLink from "../components/button-link"

// Default theme
import '@splidejs/react-splide/css'

export default function Gallery({ title, alt, images, viewAll }) {

  const [perPage, setPerPage] = useState(2)

  useEffect(() => {

    function updatePerPage() {
      const width = window.innerWidth
      if (width < 640) {
        setPerPage(2)
      }
      else if (width < 1024) {
        setPerPage(3)
      }
      else setPerPage(5)
    }
    updatePerPage()

    // Actualizar el estado cuando el tamaño de la ventana cambie
    window.addEventListener('resize', () => {
      updatePerPage()
    })

  }, [])

  return (
    <Section
      title={title}
      container={false}
    >

      {images.length > 0
        &&

        <>
          <Splide hasTrack={false} options={{
            type: 'loop',
            arrows: false,
            perPage: perPage,
          }}>
            <SplideTrack>
              {images.map((image, index) => (
                <SplideSlide
                  key={index}
                  className="flex items-center justify-center py-10 px-0"
                >
                  <Image
                    src={`/images/${image}`}
                    alt={alt}
                    width={500}
                    height={350}
                    className={`
                      w-10/12 h-10/12
                      shadow-xl
                      shadow-black
                      rounded-2xl
                      inline-block
                    `}
                  />
                </SplideSlide>
              ))}
            </SplideTrack>
          </Splide>

          <div className="button-wrapper flex items-center justify-center mt-4">
            <ButtonLink
              text={viewAll}
              href="/gallery"
              type="primary"
              extraClasses="border-4 border-pink"
              small={true}
            />
          </div>
        </>
      }
    </Section>
  )
}

Gallery.propTypes = {
  title: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  images: PropTypes.array.isRequired,
}