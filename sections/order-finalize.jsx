import { titleFont, regularFont } from '@/lib/fonts'

import propTypes from 'prop-types'

import OrderSummaryCard from '@/components/order-summary-card'

export default function OrderFinalize({ title, langId, cakeFlavorId, cakeFlavorCategory, fillingId, fillingCategory, frostingId, frostingCategory, diameter, layersId, flavorOptions, sizeOptions, subtitles, changeStatus, setInitialFlavorStatus, setIsEditing }) {

  const cakeFlavor = flavorOptions.CakeFlavor.options[cakeFlavorCategory].options[cakeFlavorId]
  const filling = flavorOptions.Filling.options[fillingCategory].options[fillingId]
  const frosting = flavorOptions.Frosting.options[frostingCategory].options[frostingId]

  const cakeFlavorImage = cakeFlavor[0].replaceAll(" ", "-").toLowerCase()
  const fillingImage = filling[0].replaceAll(" ", "-").toLowerCase()
  const frostingImage = frosting[0].replaceAll(" ", "-").toLowerCase()

  const layersBaseText = sizeOptions[layersId-1].layers[langId]
  const layersText = langId === 0 ? `${layersBaseText} Cake` : `Pastel de ${layersBaseText}`

  return (
    <section className={`
      finalize
      text-brown
    `}>
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

      {/* Summary cards */}

      <div 
        className={`
          summary-cards
          grid grid-cols-1 xl:grid-cols-2
          max-w-4xl
          mx-auto
          gap-5
        `}
      >

        <OrderSummaryCard
          title={subtitles.size[langId]}
          image={`/images/order/sizes/${layersId}.webp`}
          onClick={() => {
            changeStatus("size")
            setIsEditing(true)
          }}
          langId={langId}
        >
          <div
            className={`
              content
              flex items-center justify-center flex-col
            `}
          >
            <p>{layersText}</p>

            {diameter && Array.from(diameter.split('  ')).map((diameterItem, index) => (
              <div
                className={`
                  ${regularFont.className}
                  text-sm
                  flex items-center justify-start
                  gap-2
                `}
                key={index}
              >
                {index === 0 ?
                  <svg
                    viewBox="0 0 18 16"
                    className={`
                    fill-none 
                    stroke-pink
                    w-4 h-4
                  `}
                  >
                    <path d="m8.9 2c3.5 0 6.3 2.8 6.3 6.3 0 3.5-2.8 6.4-6.3 6.4-3.5 0-6.4-2.9-6.4-6.4 0-3.5 2.9-6.3 6.4-6.3z" />
                    <path d="m1.8 2.8l14.7 11.2" />
                  </svg>
                  :
                  <svg
                    viewBox="0 0 18 13"
                    className={`
                    fill-pink
                      w-4 h-4
                    `}
                  >
                    <path d="m10.8 4.5c0-1.2 0.9-2.1 2.1-2.1 1.1 0 2.1 0.9 2.1 2.1 0 1.1-1 2-2.1 2-1.2 0-2.1-0.9-2.1-2zm-6.7-1.3c0-1.4 1.1-2.5 2.5-2.5 1.4 0 2.5 1.1 2.5 2.5 0 1.4-1.1 2.5-2.5 2.5-1.4 0-2.5-1.1-2.5-2.5zm8.3 8c0.1 0.2 0.1 0.5-0.1 0.8-0.1 0.2-0.4 0.4-0.7 0.4h-10c-0.3 0-0.5-0.2-0.7-0.4-0.1-0.3-0.2-0.6 0-0.8l1.2-2.4c0.4-0.9 1.3-1.4 2.2-1.4h4.6c1 0 1.8 0.5 2.3 1.4zm4.9 0.8c-0.1 0.2-0.4 0.4-0.7 0.4h-2.6c0.2-0.7 0.2-1.4-0.1-2l-1.1-2.2h1.5c1 0 1.9 0.5 2.3 1.4l0.8 1.6c0.1 0.2 0.1 0.5-0.1 0.8z" />
                  </svg>

                }
                <p>{diameterItem}</p>
              </div>
            ))}

          </div>
        </OrderSummaryCard>

        <OrderSummaryCard
          title={subtitles.cakeFlavor[langId]}
          image={`/images/order/flavors/CakeFlavor/${cakeFlavorCategory}/${cakeFlavorImage}.png`}
          onClick={() => {
            changeStatus("flavors")
            setInitialFlavorStatus("CakeFlavor")
            setIsEditing(true)
          }}
          langId={langId}
        >
          <p>{cakeFlavor[langId]}</p>
        </OrderSummaryCard>

        <OrderSummaryCard
          title={subtitles.filling[langId]}
          image={`/images/order/flavors/Filling/${fillingCategory}/${fillingImage}.png`}
          onClick={() => {
            changeStatus("flavors")
            setInitialFlavorStatus("Filling")
            setIsEditing(true)
          }}
          langId={langId}
        >
          <p>{filling[langId]}</p>
        </OrderSummaryCard>

        <OrderSummaryCard
          title={subtitles.frosting[langId]}
          image={`/images/order/flavors/Frosting/${frostingCategory}/${frostingImage}.png`}
          onClick={() => { 
            changeStatus("flavors")
            setInitialFlavorStatus("Frosting")
            setIsEditing(true)
          }}
          langId={langId}
        >
          <p>{frosting[langId]}</p>
        </OrderSummaryCard>
      </div>


    </section>
  )
}

OrderFinalize.propTypes = {
  title: propTypes.string.isRequired,
  langId: propTypes.number.isRequired,
  cakeFlavorId: propTypes.number.isRequired,
  cakeFlavorCategory: propTypes.string.isRequired,
  fillingId: propTypes.number.isRequired,
  fillingCategory: propTypes.string.isRequired,
  frostingId: propTypes.number.isRequired,
  frostingCategory: propTypes.string.isRequired,
  diameter: propTypes.string.isRequired,
  layersId: propTypes.number.isRequired,
  flavorOptions: propTypes.object.isRequired,
  sizeOptions: propTypes.array.isRequired, 
  subtitles: propTypes.object.isRequired,
  changeStatus: propTypes.func.isRequired,
  setInitialFlavorStatus: propTypes.func.isRequired,
}