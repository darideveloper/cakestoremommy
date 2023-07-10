import PropTypes from "prop-types"
import { titleFont } from "@/lib/fonts"
import ContactIcon from "@/components/contact-icon"
import Image from "next/image"
import Wave from "@/components/wave"
import Link from "next/link"

export default function Footer({ title, subtitle, phone, copyright, socialIcons }) {

  return (
    <footer
      className={`bg-transparent md:bg-pink`}
      id="contact"
    >

      {/* Footer separators */}
      <Image
        src="/images/footer-bg.svg"
        width={450}
        height={450}
        alt="Footer background image"
        className={`
          w-full -mb-20
          md:hidden xs:-mb-28
        `}
      />
      <Wave 
        extraClasses={`hidden md:inline-block fill-white h-10 w-full mb-5`}
        flip={false}
        type="opacity"
      />

      <div className={`
          wrapper-container
          bg-pink
          w-full
        `}>
        <div className={`
          container 
          text-center pt-0 text-brown mx-auto
        `}>

          <div className={`
          widgets
          flex flex-col items-center justify-center
          md:flex-row md:gap-10
        `}>

            <div 
              className="contact-us"
            >
              <h2
                className={`
                ${titleFont.className}
                text-2xl uppercase
              `}
              >
                {title}
              </h2>
              <address>
                <Link
                  href="tel:+1-551-250-1566"
                  className="opacity-60"
                >{phone}</Link>
              </address>
            </div>

            <div 
              className="follow-us"
            >
              <p className={`
              ${titleFont.className}
              text-5xl
              my-6
              md:text-2xl md:my-0 md:uppercase md:mb-2
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
                    isLink={contact.isLink}
                    hideDesktop={contact.hideDesktop}
                  />
                ))}
              </div>
            </div>
          </div>

          <small
            className={`
            ${titleFont.className}
            center
            mt-10 inline-block
            uppercase text-xs
          `}>
            {copyright}
            <br />
            Powered by <a href="https://www.darideveloper.com/">Dari Developer</a>
          </small>

        </div>
      </div>

    </footer>
  )
}

Footer.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  phone: PropTypes.string,
  copyright: PropTypes.string,
  socialIcons: PropTypes.array,
}