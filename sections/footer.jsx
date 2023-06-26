import PropTypes from "prop-types"
import { titleFont, alternativeFont } from "@/lib/fonts"
import ContactIcon from "@/components/contact-icon"

export default function Footer({title, subtitle, phone, copyright, socialIcons}) {

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
              {title}
            </h2>
            <address>
              <a
                href="tel:+1-551-250-1566"
                className="opacity-60"
              >{phone}</a>
            </address>
          </div>
          <div className="follow-us">
            <p className={`
              ${alternativeFont.className}
              text-4xl
              my-6
              md:text-2xl md:my-0 md:uppercase
            `}>{subtitle}</p>

            <div className={`
              socials
              flex items-center justify-center gap-5
            `}>
              {socialIcons.map((contact, index) => (
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
          {copyright}
          <br />
          Powered by <a href="https://www.darideveloper.com/">Dari Developer</a>
        </small>

      </div>

    </footer>
  )
}

Footer.PropTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  phone: PropTypes.string,
  copyright: PropTypes.string,
  socialIcons: PropTypes.array,
}