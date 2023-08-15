import PropTypes from "prop-types"

import { getImages } from "@/lib/gallery"
import { titleFont } from "@/lib/fonts"
import { useState, useEffect } from "react"

import CategoryBtn from "@/components/category-btn"
import GalleryImage from "@/components/gallery-image"
import RootLayout from "@/layouts/root-layout"
import Image from "next/image"
import Loading from "@/components/loading"

export default function Gallery({ imagesData }) {

  const categories = imagesData.map(category => category.name)
  const [currentCategory, setCurrentCategory] = useState(imagesData[0].name)
  const [currentImages, setCurrentImages] = useState(imagesData[0].images)
  const [modalImage, setModalImage] = useState("")
  const [isGridLoading,  setIsGridLoading] = useState(true)
  const [isModalLoading, setIsModalLoading] = useState(false)

  useEffect(() => {
    // Hide grid loading
    setTimeout(() => {setIsGridLoading(false)}, 1000)
  }, [])

  function handleModalImage(image) {
    // Set modal image
    setModalImage(image)
    setIsModalLoading(true)
  }

  return (
    <RootLayout>
      <div className="content container mx-auto relative">
        <h2
          className={`
            text-4xl text-center 
            ${titleFont.className} 
            my-10
          `}
        >
          Gallery
        </h2>

        <section className={`
          category-buttons
          items-center justify-center flex-wrap
          py-5
          w-10/12 mx-auto
          hidden
        `}>
          {categories.map((category, index) => (
            <CategoryBtn
              key={index}
              text={category}
              isActive={currentCategory == category}
              onClick={() => {
                if (!isGridLoading) {

                  // Show loading
                  setIsGridLoading(true)
                  setTimeout(() => {
                    // Update images
                    setCurrentCategory(category)
                    const categoryData = imagesData.find(categoryData => categoryData.name == category)
                    setCurrentImages(categoryData.images)
                  }, 100)

                  // Hide loading
                  setTimeout(() => {setIsGridLoading(false)}, 1000)

                }
              }}
            />
          ))}
        </section>

        {
          modalImage
          &&
          <button
            className={`
              modal-image
              fixed top-0 left-0 right-0 bottom-0
              width-full height-full
              bg-yellow
              p-5
              z-30
            `}
            onClick={() => setModalImage("")}
          >
            <div
              className={`
                content 
                relative
                w-full h-full
                flex items-center justify-center
              `}
            >

              <Loading
                isVisible={isModalLoading}
                bgColor="bg-pink-light"
                extraClasses="z-60 items-center"
                alternative={true}
              />
              <div
                className={`
                  close-icon
                  absolute top-5 right-5
                  Z-40
                  w-10 h-10
                `}
              >
                <svg
                  viewBox="0 0 24 24"
                  className={`
                    fill-brown
                  `}>
                  <path d="m12.002 2.005c5.518 0 9.998 4.48 9.998 9.997 0 5.518-4.48 9.998-9.998 9.998-5.517 0-9.997-4.48-9.997-9.998 0-5.517 4.48-9.997 9.997-9.997zm0 1.5c-4.69 0-8.497 3.807-8.497 8.497s3.807 8.498 8.497 8.498 8.498-3.808 8.498-8.498-3.808-8.497-8.498-8.497zm0 7.425 2.717-2.718c.146-.146.339-.219.531-.219.404 0 .75.325.75.75 0 .193-.073.384-.219.531l-2.717 2.717 2.727 2.728c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.384-.073-.53-.219l-2.729-2.728-2.728 2.728c-.146.146-.338.219-.53.219-.401 0-.751-.323-.751-.75 0-.192.073-.384.22-.531l2.728-2.728-2.722-2.722c-.146-.147-.219-.338-.219-.531 0-.425.346-.749.75-.749.192 0 .385.073.531.219z" />
                </svg>
              </div>
              <Image
                src={modalImage}
                width={1000}
                height={1000}
                className={`
                  w-full
                  max-w-xl
                  duation-300
                  ${isModalLoading ? "opacity-0" : "opacity-100"}
                `}
                alt="modal image of a cake"
                onLoad={() => setTimeout(() => {setIsModalLoading(false)}, 250) }
              />
            </div>
          </button>
        }

        <section className={`
            gallery-grid
            w-10/12 max-w-6xl
            mx-auto
            mb-10
            grid grid-cols-1 gap-4 
            relative
            p-5
            xs:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-4
          `}>
          <Loading
            isVisible={isGridLoading}
            bgColor="bg-white"
            extraClasses="z-20 items-start pt-10"
          />
          {currentImages.map((image, index) => (
            <GalleryImage
              key={index}
              src={image}
              category={currentCategory}
              onClick={handleModalImage}
            />
          ))}
        </section>
      </div>
    </RootLayout>
  )
}

Gallery.propTypes = {
  imagesData: PropTypes.arrayOf(PropTypes.object),
}

export async function getStaticProps() {
  const imagesData = getImages()
  return {
    props: {
      imagesData
    }
  }
}