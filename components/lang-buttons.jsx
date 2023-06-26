import Image from 'next/image'

export default function LangButtons () {
  
  const langs = ["en", "es"]
  
  return (
    <div className="lang-buttons">
      {langs.map((lang, index) => (
        <button 
          key={index}
          onClick={() => { console.log(lang) }}  
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