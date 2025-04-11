
import propTypes from 'prop-types'
import { titleFont, regularFont } from '@/lib/fonts'

import Link from 'next/link'
import Image from 'next/image'
import OrderSummaryCard from '@/components/order-summary-card'
import H3 from '@/components/h3'
import InputImage from '@/components/input-image'
import TextArea from '@/components/textArea'
import Input from '@/components/input'
import InputRadio from '@/components/input-radio'
import Loading from '@/components/loading'

import { useState, useEffect } from 'react'

export default function OrderFinalize({ title, langId, cakeFlavorId, cakeFlavorCategory, fillingId, fillingCategory, frostingId, frostingCategory, diameter, layersId, flavorOptions, sizeOptions, subtitles, changeStatus, setInitialFlavorStatus, setIsEditing, inputs, faqTextBefore, faqLink, faqTextAfter }) {

  const cakeFlavor = flavorOptions.CakeFlavor.options[cakeFlavorCategory].options[cakeFlavorId]
  const filling = flavorOptions.Filling.options[fillingCategory].options[fillingId]
  const frosting = flavorOptions.Frosting.options[frostingCategory].options[frostingId]

  const cakeFlavorImage = cakeFlavor[0].replaceAll(" ", "-").toLowerCase()
  const fillingImage = filling[0].replaceAll(" ", "-").toLowerCase()
  const frostingImage = frosting[0].replaceAll(" ", "-").toLowerCase()

  const layersBaseText = sizeOptions[layersId - 1].layers[langId]
  const layersText = langId === 0 ? `${layersBaseText} Cake` : `Pastel de ${layersBaseText}`

  const [orderType, setOrderType] = useState("pickUp")
  const [clientName, setClientName] = useState("")
  const [clientLastName, setClientLastName] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [redirect, setRedirect] = useState(`http://${window.location.host}/thanks?lang=${["en", "es"][langId]}`)

  // Change redirect url if lang change
  useEffect(() => {
    setRedirect(`http://${window.location.host}/thanks?lang=${["en", "es"][langId]}`)
  }, [langId])


  function handleSubmit(e) {
    e.preventDefault()

    // Show loading 
    setIsSubmitting(true)

    // Move to top
    const ViewScroll = document.querySelector(".view-scroll")
    ViewScroll.scrollTo({ top: 0, behavior: "smooth" })

    // Sinumate submit form and redirect
    setTimeout(() => {

      // Submit form
      e.target.submit()

    }, 1000)
  }

  return (


    <section className={`
    finalize
    text-brown
    px-2
    mb-20
    `}>

      {/* SUbmit loading */}
      <Loading
        isVisible={isSubmitting}
        bgColor="bg-white"
        extraClasses="z-30 items-start fixed top-0 left-0 right-0 bottom-0"
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

      {/* Summary cards */}

      <div
        className={`
          summary-cards
          grid grid-cols-1 xl:grid-cols-2
          max-w-4xl
          mx-auto
          gap-5
          mb-6
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
          image={`/images/order/flavors/CakeFlavor/${cakeFlavorCategory}/${cakeFlavorImage}.webp`}
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
          image={`/images/order/flavors/Filling/${fillingCategory}/${fillingImage}.webp`}
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
          image={`/images/order/flavors/Frosting/${frostingCategory}/${frostingImage}.webp`}
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

      <form
        action={process.env.NEXT_PUBLIC_CONTACT_FORM_URL}
        method='post'
        enctype="multipart/form-data"
        className={`
          form
          mx-auto
          w-full sm:w-3/4
          max-w-4xl
        `}
        onSubmit={handleSubmit}
      >
        <H3>
          {subtitles.image[langId]}
        </H3>

        <div
          className={`
            images
            flex 
            items-start sm:items-center
            justify-center 
            flex-col lg:flex-row
          `}
        >
          {
            [1, 2, 3].map(index => (
              <InputImage
                key={index}
                name={`image ${index}`}
                required={index == 1 ? true : false}
              />
            ))
          }
        </div>

        <H3>
          {subtitles.additional[langId]}
        </H3>

        <TextArea
          name="additional details"
        />

        <H3>
          {subtitles.budget[langId]}
        </H3>

        <Input
          name="budget"
          required={false}
        />

        <H3>
          {subtitles.contact[langId]}
        </H3>

        <div
          className={`
            contacts
            grid grid-cols-1 sm:grid-cols-2
            gap-5
          `}
        >
          <Input
            type="text"
            name="name"
            placeholder={inputs.name[langId]}
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
          />

          <Input
            type="text"
            name="last name"
            placeholder={inputs.lastName[langId]}
            value={clientLastName}
            onChange={(e) => setClientLastName(e.target.value)}
          />

          <Input
            type="tel"
            name="phone number"
            placeholder={inputs.phone[langId]}
          />

          <Input
            type="email"
            name="email"
            placeholder={inputs.email[langId]}
          />
        </div>


        <H3>
          {subtitles.orderType[langId]}
        </H3>

        <InputRadio
          name="order type"
          value={inputs.pickUp[langId]}
          onChange={() => setOrderType("pickUp")}
          checked={orderType === "pickUp"}
        />

        <InputRadio
          name="order type"
          value={inputs.delivery[langId]}
          onChange={() => setOrderType("delivery")}
          checked={orderType === "delivery"}
        />

        {
          orderType === "delivery"
          &&
          <div
            className={`
              delivery-info
              flex 
              flex-col md:flex-row
              items-center 
              justify-center
              md:gap-5
            `}
          >
            <Input
              type="text"
              name="delivery address"
              placeholder={inputs.deliveryAddress[langId]}
              className={`
                md:w-full
              `}
            />
            <Input
              type="text"
              name="delivery city"
              placeholder={inputs.deliveryCity[langId]}
              className={`
                md:w-1/2
              `}
            />
            <Input
              type="text"
              name="delivery zip code"
              placeholder={inputs.deliveryZipCode[langId]}
              className={`
                md:w-1/2
              `}
            />
          </div>
        }

        <H3>
          {
            orderType === "pickUp"
              ?
              subtitles.pickUp[langId]
              :
              subtitles.delivery[langId]
          }
        </H3>

        <div
          className={`
            detatime
            flex
            flex-col md:flex-row
            items-center
            justify-center
            md:gap-5
          `}>
          <Input
            type="date"
            name="date"
            placeholder={inputs.date[langId]}
            className={`
              md:w-1/2
            `}
          />
          <Input
            type="time"
            name="time"
            placeholder={inputs.time[langId]}
            className={`
              md:w-1/2
            `}
          />
        </div>

        {/* Bottom text */}
        <p
          className={`
            bg-pink
            w-11/12
            p-4
            rounded-xl
            mx-auto
            m-10
            relative
          `}
        >
          {faqTextBefore} <Link href="/#faqs" className='font-bold'>{faqLink}</Link> {faqTextAfter}

          <Image
            src="/images/order/button-decorator.svg"
            alt="Button decorator"
            width={100}
            height={20}
            className={`
              absolute
              w-11/12
              max-w-xs
              -mb-16
              left-0
              bottom-0
              -z-10
              transform 
              scale-y-75
              md:opacity-0
            `}
          />
        </p>

        <Input
          name="submit-btn"
          type="submit"
          value={inputs.submit[langId]}
          className={`
          mt-20 md:mt-0
          max-w-sm
          mx-auto
        `}
        />

        {/* Diameter and layers hidden input */}
        <Input
          type="hidden"
          name="layers"
          value={layersText}
        />

        <Input
          type="hidden"
          name="diameter"
          value={diameter}
        />

        {/* Flavor hidden inputs */}
        <Input
          type="hidden"
          name="cake flavor"
          value={cakeFlavor[langId]}
        />

        <Input
          type="hidden"
          name="filling"
          value={filling[langId]}
        />

        <Input
          type="hidden"
          name="frosting"
          value={frosting[langId]}
        />


        {/* Api inputs */}
        <Input
          type="hidden"
          name="subject"
          value={`New order ${clientName} ${clientLastName}`}
        />

        <Input
          type="hidden"
          name="user"
          value={process.env.NEXT_PUBLIC_CONTACT_FORM_USER}
        />

        <Input
          type="hidden"
          name="api_key"
          value={process.env.NEXT_PUBLIC_CONTACT_FORM_API_KEY}
        />

        <Input
          type="hidden"
          name="redirect"
          value={redirect}
        />

      </form>

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
  inputs: propTypes.object.isRequired,
}