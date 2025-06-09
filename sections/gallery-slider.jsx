import PropTypes from 'prop-types'
import { useEffect, useState } from "react"
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide'
import Image from 'next/image'
import Section from "@/sections/section"
import ButtonLink from "@/components/button-link"
import Loading from "@/components/loading"

// Default theme
import '@splidejs/react-splide/css'

export default function GallerySlider({ title, alt, viewAll, initialImages }) {
  const [perPage, setPerPage] = useState(2)
  const [images, setImages] = useState(initialImages?.results || [])
  const [loadedImages, setLoadedImages] = useState({})

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

    // Update state when window size changes
    window.addEventListener('resize', () => {
      updatePerPage()
    })
  }, [])

  const handleImageLoad = (imageId) => {
    setLoadedImages(prev => ({
      ...prev,
      [imageId]: true
    }))
  }

  return (
    <Section
      title={title}
      container={false}
      extraClasses="pt-28"
      id="gallery"
    >
      {images.length > 0 && (
        <>
          <Splide hasTrack={false} options={{
            type: 'loop',
            arrows: false,
            perPage: perPage,
          }}>
            <SplideTrack>
              {images.map((image) => (
                <SplideSlide
                  key={image.id}
                  className="flex items-center justify-center py-10 px-0"
                >
                  <div className="relative w-10/12">
                    <Loading
                      isVisible={!loadedImages[image.id]}
                      bgColor="bg-white"
                      extraClasses="z-20 items-center"
                    />
                    <Image
                      src={image.image}
                      alt={image.description || alt}
                      className={`
                        object-contain
                        shadow-xl
                        shadow-black
                        rounded-2xl
                        transition-opacity duration-300
                        p-2
                        w-full
                        h-[350px]
                      `}
                      onLoad={() => handleImageLoad(image.id)}
                      data-aos="zoom-in"
                      width={image.width || 800}
                      height={image.height || 600}
                    />
                  </div>
                </SplideSlide>
              ))}
            </SplideTrack>
          </Splide>

          <div className="button-wrapper flex items-center justify-center mt-4">
            <ButtonLink
              content={viewAll}
              href="/gallery"
              type="primary"
              extraClasses="border-4 border-pink"
              small={true}
            />
          </div>
        </>
      )}
    </Section>
  )
}

GallerySlider.propTypes = {
  title: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  viewAll: PropTypes.string.isRequired,
  initialImages: PropTypes.shape({
    count: PropTypes.number,
    next: PropTypes.string,
    previous: PropTypes.string,
    results: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      categories: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        id: PropTypes.number
      })),
      image: PropTypes.string,
      description: PropTypes.string,
      created_at: PropTypes.string,
      updated_at: PropTypes.string
    }))
  })
}