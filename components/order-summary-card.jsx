import { titleFont } from '@/lib/fonts'

import propTypes from 'prop-types'

import Image from 'next/image'

export default function OrderSummaryCard({ title, image, children, onClick, langId }) {
  return (
    <div
      className={`
        summary-card
        w-full
      `}
    >
      <h3
        className={`
          text-2xl
          font-bold
          text-center
          ${titleFont.className}
          mb-5
          mt-8
        `}
      >
        {title}
      </h3>
      <button
        className={`
          group
          w-full
          rounded-xl
          grid grid-cols-5 items-center
          gap-1
          px-4 py-2
          text-xl
          ${titleFont.className}
          shadow-lg hover:shadow-xl
          duration-200
          bg-white
        `}
        onClick={onClick}
      >
        <Image
          src={image}
          alt={`${title} image`}
          width={200}
          height={200}
          className={`
            w-full
          `}
        />
        <div 
          className={`
            value
            flex-grow
            col-span-3
            ml-4
            capitalize
          `}>
          {children}
        </div>
        <p
          className={`
              text-xl
            `}
        >
          {langId == 0 ? 'Edit' : 'Editar'}
        </p>
      </button>
    </div>
  )
}

OrderSummaryCard.propTypes = {
  title: propTypes.string.isRequired,
  image: propTypes.string.isRequired,
  children: propTypes.node.isRequired,
  onClick: propTypes.func.isRequired,
}