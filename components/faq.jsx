import H3 from '@/components/h3'
import { useState, useEffect } from 'react'

/**
 * Faq card component
 * @param {string} question
 * @param {string} text 
 * @param {array} [images=[]] 
 * @returns 
 */
export default function Faq ({question, text="", images=[]}) {

  const [isOpen, setIsOpen] = useState(false)

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
        onClick={() => {
          // Hide and show text
          setIsOpen(!isOpen)
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
            mt-0
            border-black
            border-2
            border-opacity-40
            bg-white
            text-md
          `}
        >
          {question}
        </H3>
      </button>
      <p
        className={`
          text-center
          py-6
          px-8
          pt-20
          rounded-2xl
          -mt-8
          duration-1000
          ${isOpen ? 'border-black' : 'border-transparent'}
          ${isOpen ? 'shadow-md' : 'shadow-none'}
          border-2
          border-opacity-40
          bg-white
          ${isOpen ? '-mt-0' : '-mt-96'}
        `}
      >
        {text}
      </p>
      {
        images.map((image, index) => (
          <img
            key={index}
            src={image}
            className={`
              mx-auto
              p-5
              mt-10
              w-full max-w-md
            `}
          />
        ))
      }
    </div>
  )
}