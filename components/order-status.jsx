import propTypes from 'prop-types'
import Image from 'next/image'

export default function OrderStatus({ currentStatus, allStatus, onChangeStatus, langId, isLoading, setIsLoading }) {

  return (
    <div className={`
      status
      py-2
      bg-pink
    `}>
      <div className={`
        wrapper
        bg-white
        rounded-2xl
      `}>

        <div className={`
          buttons
          flex items-center justify-around
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
                w-1/3
                flex items-center justify-center
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
                  bg-pink
                  relative
                `}
              >
                <Image
                  src={`/images/order/status/${statusName}.png`}
                  alt={statusName}
                  width={60}
                  height={60}
                  className={`
                    w-9/10
                  `}
                />
                <p
                  className={`
                    absolute 
                    -bottom-6
                    text-center
                    z-10
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
                  right-0 top-1/2
                  -mt-1
                  -mr-2
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