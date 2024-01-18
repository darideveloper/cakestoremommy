import { useState } from "react"
import Image from "next/image"

import { useContext } from "react"
import { LangContext } from "@/context/lang"

export default function InputImage({ name, onChange, required = false }) {

  const [imageSrc, setImageSrc] = useState(null)

  const { lang } = useContext(LangContext)

  return (
    <>
      <label
        className={`
          border-2 
          border-pink
          px-8
          py-3
          rounded-2xl
          flex items-center justify-center
          gap-2
          bg-white
          m-4
          text-md
          hover:shadow-md
          duration-200
          relative
        `}
      >

        {/* Content before image */}
        {
          imageSrc
            ?
            (
              <Image
                src={imageSrc}
                width={200}
                height={200}
                className={`
                  rounded-2xl
                `}
              />
            )
            :
            (
              <>
                <svg
                  viewBox="0 0 24 24"
                  className={`
                    fill-pink
                    w-6
                  `}
                >
                  <path d="m12.002 2c5.518 0 9.998 4.48 9.998 9.998 0 5.517-4.48 9.997-9.998 9.997-5.517 0-9.997-4.48-9.997-9.997 0-5.518 4.48-9.998 9.997-9.998zm-.747 9.25h-3.5c-.414 0-.75.336-.75.75s.336.75.75.75h3.5v3.5c0 .414.336.75.75.75s.75-.336.75-.75v-3.5h3.5c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-3.5v-3.5c0-.414-.336-.75-.75-.75s-.75.336-.75.75z" />
                </svg>
                <p>
                  {lang === "en" ? "Upload image" : "Subir imagen"}
                </p>
              </>
            )

        }
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            setImageSrc(URL.createObjectURL(e.target.files[0]))
            onChange && onChange(e)
          }}
          className={`
            opacity-0
            absolute
            top-1/2
            left-0
            w-full
          `}
          id={name}
          name={imageSrc && name}
          required={required}
        />
      </label>
    </>
  )
}