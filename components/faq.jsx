import H3 from '@/components/h3'
import { useState, useEffect } from 'react'

/**
 * Faq card component
 * @param {string} question
 * @param {string} text 
 * @param {array} [images=[]] 
 * @returns 
 */
export default function Faq({ question, text = "", images = [] }) {

  /**
   * Open and close faqs using margin top
   * @param {HTMLElement} pElem - paragraph element
  */
  function openCloseFaqs(pElem, isOpen) {

    console.log({pElem, isOpen})

    // Get element height
    const height = pElem.getBoundingClientRect().height

    // Set margin top to hide or show text
    if (isOpen) {
      pElem.style.marginTop = `0px`
    } else {
      pElem.style.marginTop = `-${height+20}px`
    }
  }

  // Open state
  const [isOpen, setIsOpen] = useState(false)

  // Close all faqs on load
  useEffect(() => {
    const pElems = document.querySelectorAll('.faq p')
    console.log({pElems})
    pElems.forEach(pElem => {
      openCloseFaqs(pElem, isOpen)
    })
  }, [])

  return (
    <div
      className={`
        faq
        w-11/12
        mx-auto
        rounded-2xl
        text-brown
        overflow-hidden
        my-4
        relative
        duration-1000
        min-h-[70px]
        max-w-lg
      `}
    >
      <button
        onClick={(e) => {
          // Hide and show text
          setIsOpen(!isOpen)
          const parent = e.target.parentElement.parentElement
          const pElem = parent.querySelector('p')
          openCloseFaqs(pElem, !isOpen)
        }}
        className={`
          w-full
          absolute
          top-0
          left-0
          z-10
        `}
      >
        <H3
          className={`
            text-center
            uppercase
            mb-10
            shadow-md
            w-full
            py-3
            rounded-2xl
            border-black
            border-2
            border-opacity-40
            bg-white
            text-md
          `}
          mt={0}
        >
          {question}
        </H3>
      </button>
      <p
        className={`
          text-center
          ${images.length > 0 ? 'py-0' : 'py-6'}
          ${images.length > 0 ? 'px-0' : 'px-8'}
          ${images.length > 0 ? 'pb-8' : 'pb-6'}
          pt-20
          rounded-2xl
          -mt-8
          duration-1000
          ${isOpen ? 'border-black' : 'border-transparent'}
          ${isOpen ? 'shadow-md' : 'shadow-none'}
          border-2
          border-opacity-40
          bg-white
        `}
      >
        {text}
        {
          images.map((image, index) => (
            <img
              key={index}
              src={`/images/${image}`}
              className={`
                mx-auto
                w-full max-w-md
              `}
            />
          ))
        }
      </p>
    </div>
  )
}