import propTypes from 'prop-types'
import Image from 'next/image'

export default function OrderFlavorButtons({ langId, options, status, onClick, flavorsAllStatus, isLoading, cakeFlavor, filling, frosting }) {

  // Format options values
  const optionsValues = {
    CakeFlavor: cakeFlavor,
    Filling: filling,
    Frosting: frosting
  }


  return (
    <div className={`
      flavors-buttons
      flex 
      flex-col xs:flex-row
      flex-wrap
      justify-center 
      items-center 
      mx-auto
      gap-4
      mt-4
      mb-10
      w-full
      md:max-w-md lg:max-w-2xl
    `}>
      {flavorsAllStatus.map((option, index) => (
        <button
          key={index}
          className={`
            button
            ${status === option ? 'bg-pink text-brown' : 'bg-transparent text-brown'}
            rounded-full
            px-5 py-2
            duration-200
            relative
            inline
            border-2 border-pink
            ${optionsValues[option] ? 'cursor-pointer hover:-translate-y-1' : 'opacity-50 cursor-default'}
          `}
          onClick={() => {
            // Go down smooth
            const ViewScroll = document.querySelector(".view-scroll")
            ViewScroll.scrollTo({
              top: 400,
              behavior: 'smooth'
            })

            // Detect if option is disabled
            if (!optionsValues[option]) {
              return
            }

            onClick(option)
          }}
          disabled={isLoading}
        >

          {options[option].names[langId]}

          {/* Show selected value, if exists */}
          {
            option === 'CakeFlavor' && cakeFlavor != 0 && (
              <span className="font-bold">
                {`: ${cakeFlavor}`}
              </span>
            )
          }
          {
            option === 'Filling' && filling != 0 && (
              <span className="font-bold">
                {`: ${filling}`}
              </span>
            )
          }
          {
            option === 'Frosting' && frosting != 0 && (
              <span className="font-bold">
                {`: ${frosting}`}
              </span>
            )
          }

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