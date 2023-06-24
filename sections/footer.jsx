import { useEffect, useState } from "react"
import { titleFont, alternativeFont } from "@/lib/fonts"
import ContactIcon from "@/components/contact-icon"
import { getContactsData } from "@/database/footer"

export default function Footer() {

  const [contactsData, setContactsData] = useState([])

  useEffect(() => {
    setContactsData(getContactsData())
  }, [])

  return (
    <footer
      className={`
        bg-pink
      `}
    >
      <div className={`
          container 
          text-center pt-5 text-brown mx-auto
        `}>

        <div className={`
          widgets
          flex flex-col items-center justify-center
          md:flex-row md:gap-10
        `}>

          <div className="contact-us">
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
          </div>
          <div className="follow-us">
            <p className={`
              ${alternativeFont.className}
              text-4xl
              my-6
              md:text-2xl md:my-0 md:uppercase
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
          </div>
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