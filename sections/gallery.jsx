import { useEffect, useState } from "react"
import Section from "./section"
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide'
import { getGalleryImages } from "../database/gallery"

// Default theme
import '@splidejs/react-splide/css'

export default function Gallery() {

  const [images, setImages] = useState([])
  const [perPage, setPerPage] = useState(2)

  useEffect(() => {
    
    // Cargar datos cuando el componente se monte
    setImages(getGalleryImages())

    function updatePerPage () {
      const width = window.innerWidth
      if (width < 640) {
        setPerPage(2)
      } 
      else if (width < 1024) { 
        setPerPage(3)
      } 
      else setPerPage(5)      
    }
    updatePerPage ()

    // Actualizar el estado cuando el tamaño de la ventana cambie
    window.addEventListener('resize', () => {
      updatePerPage ()
    })

  }, [])

  return (
    <Section
      title="Gallery"
      container={false}
    >

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
              <img
                src={`/images/${image}`}
                alt="cake image"
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
    </Section>
  )
}