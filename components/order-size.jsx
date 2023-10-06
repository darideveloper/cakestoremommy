import propTypes from 'prop-types'
import { titleFont } from '@/lib/fonts'
import { useState } from 'react'

import Loading from '@/components/loading'
import Image from 'next/image'
import DropDown from '@/components/drop-down'
import Button from '@/components/button'

export default function OrderSize({ layers, setLayers, diameter, setDiameter, langId, title, subtitle, sizesData}) {

  const [isLoading, setIsLoading] = useState(true)

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
        order
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
            setIsLoading(true)
            setTimeout(() => {
              setLayers(value)
              setDiameter(0)
            }, 200)
          }}
          disabled={isLoading}
        />

        <DropDown 
          name="diameters"
          options={diametersOptions}
          value={diameter}
          onChange={(value) => setDiameter(value)}
          disabled={isLoading}
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
          The suggested serving quantity is based on a standard 5” 
          tall cake and may vary depending on the cutting style. 
          For more information, please <a href="/#faqs" className='font-bold'>Click here</a>
        </p>

        <div className={`
          buttons
          flex flex-col items-center justify-between 
          mb-20
        `}>
          <Button
            text="Next"
            onClick={() => {console.log('next')}}
            extraClasses='mt-8'
          />
          <Button
            text="Back"
            onClick={() => {window.history.back()}}
            extraClasses='mt-8'
          />
        </div>
      </div>


    </section>
  )
}

OrderSize.propTypes = {
  layers: propTypes.number,
  setLayers: propTypes.func,
  diameter: propTypes.number,
  setDiameter: propTypes.func
}