import { titleFont } from "@/lib/fonts"
import ContactIcon from "@/components/contact-icon"

export default function FollowUs({ subtitle, socialIcons, iconsColor, iconsSmall }) {

  return (
    <div
      className="follow-us"
    >
      <p className={`
        ${titleFont.className}
        text-5xl
        my-6
        md:text-2xl md:my-0 md:uppercase md:mb-2
      `}
      >
        {subtitle}
      </p>

      <div
        className={`
        socials
        flex items-center justify-center gap-5
      `}
      >
        {socialIcons.map((contact, index) => (
          <ContactIcon
            key={index}
            link={contact.link}
            icon={contact.icon}
            isLink={contact.isLink}
            hideDesktop={contact.hideDesktop}
            iconColor={iconsColor}
            iconSmall={iconsSmall}
          />
        ))}
      </div>
    </div>
  )
}