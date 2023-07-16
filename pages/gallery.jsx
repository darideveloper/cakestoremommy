import PropTypes from "prop-types"

import { getImages } from "@/lib/gallery"
import { titleFont } from "@/lib/fonts"
import { useState } from "react"

import CategoryBtn from "@/components/category-btn"
import GalleryImage from "@/components/gallery-image"
import RootLayout from "@/layouts/root-layout"




export default function Gallery({ imagesData }) {

  const categories = imagesData.map(category => category.name)
  const [currentCategory, setCurrentCategory] = useState(imagesData[0].name)
  const [currentImages, setCurrentImages] = useState(imagesData[0].images)

  console.log({ currentCategory, currentImages })

  return (
    <RootLayout>
      <div className="content container mx-auto">
        <h2
          className={`
            text-4xl text-center 
            ${titleFont.className} 
            my-10
          `}
        >
          Gallery
        </h2>

        <div className={`
          category-buttons
          flex items-center justify-center flex-wrap
          py-5
          w-10/12 mx-auto
        `}>
          {categories.map((category, index) => (
            <CategoryBtn
              key={index}
              text={category}
              isActive={currentCategory == category}
              onClick={() => {
                setCurrentCategory(category)
                const categoryData = imagesData.find(categoryData => categoryData.name == category)
                setCurrentImages(categoryData.images)
              }}
            />
          ))}
        </div>

        <div className={`
            gallery-grid
            w-10/12 max-w-6xl
            mx-auto
            grid grid-cols-1 gap-4 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
              
          `}>
          {currentImages.map((image, index) => (
            <GalleryImage
              key={index}
              src={image}
              category={currentCategory}
            />
          ))}
        </div>
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