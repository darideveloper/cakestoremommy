import propTypes from 'prop-types'
import Image from 'next/image'

export default function OrderStatus({ currentStatus, allStatus, onChangeStatus, langId, isLoading, setIsLoading }) {

  return (
    <div className={`
      status
      py-2 md:py-0
      px-0 md:px-2
      bg-pink md:bg-transparent
      w-full md:w-36
      md:h-full
      md:absolute
      md:top-48 md:left-0
      md:z-30
    `}>
      <div className={`
        wrapper
        bg-white
        rounded-2xl
      `}>

        <div className={`
          buttons
          flex md:flex-col
          items-center justify-around
          py-7
          pt-4
          container mx-auto
          max-w-2xl
        `}>

          {/* Render satus buttons */}
          {Object.keys(allStatus).map((statusName, index) => (

            <div
              className={`
                button-wrapper 
                relative
                w-1/3 md:w-2/3
                flex
                items-center justify-center
              `}
              key={`${index}-wrapper`}
            >
              {/* Status card */}
              <div
                className={`
                  status-btn
                  flex items-center justify-center
                  w-16 h-16
                  rounded-full
                  relative
                  my-0 md:my-10
                  bg-transparent

                  before:content-[' ']
                  before:absolute 
                  before:z-0
                  ${currentStatus == statusName ? `before:bg-brown opacity-80` : `before:bg-pink`}
                  before:w-16
                  before:h-16
                  before:rounded-full
                `}
              >
                <Image
                  src={currentStatus == statusName ? `/images/order/status/${statusName}-white.svg` : `/images/order/status/${statusName}-brown.svg`}
                  alt={statusName}
                  width={60}
                  height={60}
                  className={`
                    w-9/10
                    absolute
                    z-10
                    top-1/2
                    left-1/2
                    transform -translate-x-1/2 -translate-y-1/2
                  `}
                />
                <p
                  className={`
                    absolute 
                    -bottom-6
                    text-center
                    z-10
                    text-brown
                    uppercase
                    text-sm
                  `}
                >
                  {allStatus[statusName][langId]}
                </p>
              </div>

              {/* Separator */}
              <svg
                viewBox="0 0 24 24"
                className={`
                  separator
                  w-4 h-4
                  fill-brown
                  opacity-50
                  absolute
                  right-0 md:right-1/2 
                  top-1/2 md:top-36
                  -mt-1 md:mt-0
                  -mr-2
                  md:rotate-90
                  ${index == Object.keys(allStatus).length - 1 && 'hidden'}
                `}
              >
                <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
              </svg>
            </div>

          ))}
        </div>

      </div>

    </div>
  )

}

OrderStatus.propTypes = {
  currentStatus: propTypes.string.isRequired,
  allStatus: propTypes.object.isRequired,
  onChangeStatus: propTypes.func.isRequired,
  landId: propTypes.number,
  isLoading: propTypes.bool.isRequired,
}