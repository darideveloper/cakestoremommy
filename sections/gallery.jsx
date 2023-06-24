import { useEffect, useState } from "react"
import Section from "./section"
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide'
import { getGalleryImages } from "../database/gallery"
import Image from 'next/image'
import ButtonLink from "../components/button-link"

// Default theme
import '@splidejs/react-splide/css'

export default function Gallery() {

  const [images, setImages] = useState([])
  const [perPage, setPerPage] = useState(0)

  useEffect(() => {

    // Cargar datos cuando el componente se monte
    setImages(getGalleryImages())

    function updatePerPage() {
      const width = window.innerWidth
      if (width < 640) {
        setPerPage(2)
      }
      else if (width < 1024) {
        setPerPage(3)
      }
      else setPerPage(5)

      // Drag on first slide to fix bug
      setTimeout(() => {
        document.querySelector('.splide__slide').style.transform = 'translateX(-10px)'
        document.querySelector('.splide__slide').click()
      }, 1000)
    }
    updatePerPage()

    // Actualizar el estado cuando el tamaño de la ventana cambie
    window.addEventListener('resize', () => {
      updatePerPage()
    })

  }, [])

  return (
    <Section
      title="Gallery"
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
                    alt="cake image"
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
              text="View All"
              href="/gallery"
              type="primary"
              extraClasses = "border-4 border-pink"
              small={true}
            />
          </div>
        </>
      }
    </Section>
  )
}