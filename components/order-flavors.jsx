import propTypes from 'prop-types'
import Image from 'next/image'
import { titleFont } from '@/lib/fonts'
import { useState } from 'react'

import OrderFlavorButtons from '@/components/order-flavors-buttons'

export default function OrderFlavors({title, langId, options}) {

  const flavorsAllStatus = Object.keys(options)
  const [flavorStatus, setFlavorStatus] = useState(flavorsAllStatus[0])
  const [isLoading, setIsLoading] = useState(true)
  const [flavorOptions, setFlavorOptions] = useState(options[flavorStatus]["options"])

  console.log ({options})

  return (
    <div className={`
      flavors 
      container 
      text-brown`
    }>
      <Image
        src="/images/order/flavors/hero.webp"
        width={200}
        height={200}
        className={`
          w-full 
          mx-auto
          p-5
          mt-10
          max-w-md
        `}
      />

      <h2
        className={`
          text-3xl
          text-center
          ${titleFont.className}
          my-2
        `}
      >
        {title}
      </h2>

      <OrderFlavorButtons 
        langId={langId}
        options={options}
        status={flavorStatus}
        setStatus={setFlavorStatus}
        flavorsAllStatus={flavorsAllStatus}
      />
    </div>
  )
}

OrderFlavors.propTypes = {
  title: propTypes.string.isRequired,
  langId: propTypes.number.isRequired,
  options: propTypes.object.isRequired
}