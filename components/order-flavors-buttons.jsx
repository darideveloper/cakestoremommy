import propTypes from 'prop-types'
import Image from 'next/image'

export default function OrderFlavorButtons ({langId, options, status, onClick, flavorsAllStatus, isLoading}) {
    
  return (
    <div className={`
      flavors-buttons
      flex 
      flex-col xs:flex-row
      justify-center 
      items-center 
      mx-auto
      gap-4
      mt-4
      mb-10
      w-40 xs:w-full
    `}>
      {flavorsAllStatus.map(( option, index) => (
        <button
          key={index}
          className={`
            button
            ${status === option ? 'bg-pink text-brown mb-5 xs:mb-0' : 'bg-transparent text-brown'}
            rounded-full
            px-5 py-2
            duration-200
            relative
            inline
            border-2 border-pink
            cursor-default
          `}
          // onClick={() => {onClick(option)}}
          disabled={status === option || isLoading}
        >
          {options[option].names[langId]}

          <Image 
            src="/images/order/button-decorator.svg"
            alt="Button decorator"
            width={20}
            height={20}
            className={`
              absolute
              left-1/2
              transform -translate-x-1/2
              w-11/12
              duration-200
              ${status == option ? 'opacity-100' : 'opacity-0'}
              -z-10
              transform
            `}
          />

        </button>
      ))}
    </div>
  )
}

OrderFlavorButtons.propTypes = {
  langId: propTypes.number.isRequired,
  options: propTypes.object.isRequired,
  status: propTypes.string.isRequired,
  onClick: propTypes.func.isRequired,
  flavorsAllStatus: propTypes.array.isRequired,
}