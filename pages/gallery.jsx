import { titleFont } from '@/lib/fonts'
import { useState, useEffect } from 'react'

import CategoryBtn from '@/components/category-btn'
import GalleryImage from '@/components/gallery-image'
import RootLayout from '@/layouts/root-layout'
import Image from 'next/image'
import Loading from '@/components/loading'

export default function Gallery({}) {

  const [images, setImages] = useState([])
  const [currentCategory, setCurrentCategory] = useState(3)
  const [modalImage, setModalImage] = useState('')
  const [isGridLoading, setIsGridLoading] = useState(false)
  const [isModalLoading, setIsModalLoading] = useState(false)
  const [categories, setCategories] = useState([])

  async function handleCategoryChange(categoryId) {
    if (!isGridLoading) {
      setIsGridLoading(true)
      try {
        const response = await fetch(`/api/gallery?category=${categoryId}`)
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const { data } = await response.json()
        setImages(data.results)
        setCurrentCategory(categoryId)
      } catch (err) {
        console.error('Error:', err)
      } finally {
        setIsGridLoading(false)
      }
    }
  }

  async function getCategories() {
    const response = await fetch(`/api/categories`)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const { data } = await response.json()
    return data['results'] || []
  }

  useEffect(() => {
    // Load categories from api, when mount
    getCategories().then(setCategories).catch(console.error)

    // Load initial images on component mount
    handleCategoryChange(currentCategory)
  }, [])

  function handleModalImage(image) {
    setModalImage(image)
    setIsModalLoading(true)
  }

  return (
    <RootLayout>
      <div className='content container mx-auto relative'>
        <h2 className={`text-4xl text-center ${titleFont.className} my-10`}>
          Gallery
        </h2>

        <section className='category-buttons flex items-center justify-center flex-wrap py-5 w-10/12 mx-auto'>
          {categories.map((category) => (
            <CategoryBtn
              key={category.id}
              text={category.name}
              isActive={currentCategory === category.id}
              onClick={() => handleCategoryChange(category.id)}
            />
          ))}
        </section>

        {modalImage && (
          <button
            className='modal-image fixed top-0 left-0 right-0 bottom-0 width-full height-full bg-yellow p-5 z-30'
            onClick={() => setModalImage('')}
          >
            <div className='content relative w-full h-full flex items-center justify-center'>
              <Loading
                isVisible={isModalLoading}
                bgColor='bg-pink-light'
                extraClasses='z-60 items-center'
                alternative={true}
              />
              <div className='close-icon absolute top-5 right-5 Z-40 w-10 h-10'>
                <svg
                  viewBox='0 0 24 24'
                  className='fill-brown'
                >
                  <path d='m12.002 2.005c5.518 0 9.998 4.48 9.998 9.997 0 5.518-4.48 9.998-9.998 9.998-5.517 0-9.997-4.48-9.997-9.998 0-5.517 4.48-9.997 9.997-9.997zm0 1.5c-4.69 0-8.497 3.807-8.497 8.497s3.807 8.498 8.497 8.498 8.498-3.808 8.498-8.498-3.808-8.497-8.498-8.497zm0 7.425 2.717-2.718c.146-.146.339-.219.531-.219.404 0 .75.325.75.75 0 .193-.073.384-.219.531l-2.717 2.717 2.727 2.728c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.384-.073-.53-.219l-2.729-2.728-2.728 2.728c-.146.146-.338.219-.53.219-.401 0-.751-.323-.751-.75 0-.192.073-.384.22-.531l2.728-2.728-2.722-2.722c-.146-.147-.219-.338-.219-.531 0-.425.346-.749.75-.749.192 0 .385.073.531.219z' />
                </svg>
              </div>
              <Image
                src={modalImage}
                width={1000}
                height={1000}
                className={`w-full max-w-xl duation-300 ${
                  isModalLoading ? 'opacity-0' : 'opacity-100'
                }`}
                alt={
                  images.find((img) => img.image === modalImage)?.description ||
                  'Cake image'
                }
                onLoad={() =>
                  setTimeout(() => {
                    setIsModalLoading(false)
                  }, 250)
                }
              />
            </div>
          </button>
        )}

        <section className='gallery-grid w-full max-w-7xl mx-auto mb-10 relative p-4'>
          <Loading
            isVisible={isGridLoading}
            bgColor='bg-white'
            extraClasses='z-20 items-start pt-10'
          />
          <div className='columns-2 md:columns-3 lg:columns-4 gap-4'>
            {images.map((image, index) => {
              return (
                <div
                  key={image.id}
                  className={`mb-4 break-inside-avoid h-auto`}
                >
                  <GalleryImage
                    src={image.image}
                    category={
                      categories.find((cat) => cat.id === currentCategory)
                        ?.name || ''
                    }
                    onClick={handleModalImage}
                    extraClasses='rounded-lg shadow-md hover:shadow-xl transition-all duration-300'
                    width={image.width / 3 || 500}
                    height={image.height / 3 || 500}
                    alt={image.description || 'Cake image'}
                  />
                </div>
              )
            })}
          </div>
        </section>
      </div>
    </RootLayout>
  )
}