import Image from 'next/image'
import { LangContext } from '@/context/lang'
import { useContext } from 'react'

export default function LangButtons () {
  
  const { setLang } = useContext(LangContext)
  const langs = ["en", "es"]
  
  return (
    <div className="lang-buttons">
      {langs.map((lang, index) => (
        <button 
          key={index}
          onClick={() => { setLang(lang) }}  
        >
          <Image 
            src={`/images/flag-${lang}.svg`} 
            alt={`language ${lang}`} 
            width={30}
            height={30}
            className={`
              rounded-full
              m-1 w-6
              md:w-8
            `}
          />
        </button>
      ))}

    </div>
  )
}