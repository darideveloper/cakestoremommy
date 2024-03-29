import propTypes from 'prop-types'
import { titleFont } from '@/lib/fonts'
import { useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import DropDown from '@/components/drop-down'
import Button from '@/components/button'

export default function OrderSize({ layers, setLayers, diameter, setDiameter, langId, title, subtitle, sizesData, changeStatus, faqText, faqLink, isEditing, labels }) {

  const [isLoading, setIsLoading] = useState(true)

  const currentLayers = sizesData[layers - 1].layers
  const currentDiameter = sizesData[layers - 1].diameters[diameter - 1]

  // Formmat dropdown options
  const layersOptions = sizesData.map((layer, index) => ({
    name: layer.layers[langId],
    value: index + 1
  }))

  const currentDiameters = sizesData[layers - 1].diameters

  const diametersOptions = currentDiameters.map((diameter, index) => ({
    name: diameter[langId],
    value: index + 1
  }))

  return (
    <section
      className={`
        size
        text-brown
        container
        `}
    >
      <div
        className={`
          text
          text-center
          ${titleFont.className}
        `}>

        <h2
          className={`
            text-3xl
          `}
        >
          {title}
        </h2>

        <h3>
          {subtitle}
        </h3>
      </div>

      <div className={`
        img-wrapper
        flex-col items-center justify-center
        bg-yellow
        rounded-xl
        drop-shadow-2xl
        duration-300
        relative
        w-10/12 
        mx-auto
        p-5
        mt-10
        max-w-sm
      `}
      >
        <Image
          className={`
          gallery-image
          duration-300
          ${isLoading ? "opacity-0" : "opacity-100"}	
          mb-10
        `}
          src={`/images/order/sizes/${layers}.webp`}
          width={500}
          height={500}
          alt={`cake image of ${layers} layers`}
          onLoad={() => { setIsLoading(false) }}
          priority={true}
        />

        <DropDown
          name="Layers"
          options={layersOptions}
          value={layers}
          onChange={(value) => {

            
            // Update layers
            setIsLoading(true)
            setTimeout(() => {
              setLayers(value)
              setDiameter(1)

              // Move down smooth
              const ViewScroll = document.querySelector(".view-scroll")
              ViewScroll.scrollTo({
                top: 400,
                behavior: 'smooth'
              })

            }, 200)
          }}
          disabled={isLoading}
          displayValue={currentLayers && currentLayers[langId]}
          labelText={labels.layers[langId]}
        />

        <DropDown
          name="diameters"
          options={diametersOptions}
          value={diameter}
          onChange={(value) => setDiameter(value)}
          disabled={isLoading}
          displayValue={currentDiameter && currentDiameter[langId]}
          labelText={labels.diameter[langId]}
        />

      </div>

      <div className={`
        buttons-wrapper
        content 
        mx-auto
        mt-10
        text-sm
        max-w-md
      `}>
        <p
          className={`
            w-11/12
            text-center
            mx-auto
          `}
        >

          {faqText} <Link href="/#faqs" className='font-bold'>{faqLink}</Link>
        </p>

        <div className={`
          buttons
          flex flex-col items-center justify-between 
          mb-20
        `}>

          {
            isEditing
              ?
              (
                <Button
                  text={langId === 0 ? 'Finalize' : 'Finalizar'}
                  onClick={() => {
                    changeStatus("finalize")
                  }}
                  extraClasses='mt-8'
                />
              )
              :
              (
                <>
                  <Button
                    text={langId === 0 ? 'Next' : 'Siguiente'}
                    onClick={() => {
                      changeStatus("flavors")
                    }}
                    extraClasses='mt-8'
                  />
                  <Button
                    text={langId === 0 ? 'Back' : 'Regresar'}
                    onClick={() => { window.history.back() }}
                    extraClasses='mt-8'
                  />
                </>
              )
          }

        </div>
      </div>


    </section>
  )
}

OrderSize.propTypes = {
  layers: propTypes.number.isRequired,
  setLayers: propTypes.func.isRequired,
  diameter: propTypes.number.isRequired,
  setDiameter: propTypes.func.isRequired,
  langId: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  subtitle: propTypes.string.isRequired,
  sizesData: propTypes.array.isRequired,
  changeStatus: propTypes.func.isRequired,
  faqText: propTypes.string.isRequired,
  faqLink: propTypes.string.isRequired,
  isEditing: propTypes.bool.isRequired,
}