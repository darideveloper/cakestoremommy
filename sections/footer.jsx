import { useEffect, useState } from "react"
import { titleFont, alternativeFont } from "@/lib/fonts"
import ContactIcon from "@/components/contact-icon"
import { getContactsData } from "@/database/footer"

export default function Footer () {

  const [contactsData, setContactsData] = useState([])

  useEffect(() => {
    setContactsData(getContactsData())

    console.log(contactsData)
  }, [])

  return (
    <footer
      className={`
        bg-pink
      `}
    >
      <div className={`container text-center pt-5 text-brown mx-auto`}>
        <h2 
          className={`
            ${titleFont.className}
            text-2xl uppercase
          `}
        >
          Contact us
        </h2>
        <address>
          <a 
            href="tel:+1-551-250-1566"
            className="opacity-60"
          >551-250-1566</a>
        </address>
        <p className={`
          ${alternativeFont.className}
          text-4xl
          my-4
        `}>Follow Us</p>

        <div className={`
          socials
          flex items-center justify-center gap-5
        `}>
          {contactsData.map((contact, index) => (
            <ContactIcon 
              key={index}
              link={contact.link}
              icon={contact.icon}
            />
          ))}
        </div>

        <small 
          className={`
            center
            mt-10 inline-block
            uppercase text-xs
          `}>
          THE CAKE STORE MOMMY, INC. © 2023 ALL RIGHTS RESERVED
          <br />
          Powered by <a href="https://www.darideveloper.com/">Dari Developer</a>
        </small>

      </div>

    </footer>
  )
}