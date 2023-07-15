import PropTypes from 'prop-types'
import Image from 'next/image'
import Link from 'next/link'
import { titleFont } from '@/lib/fonts'

export default function Cta ({title, description, image, link}) {
  return (
    <Link
      href={link} 
      className={`
        cta
        flex items-center justify-between flex-col-reverse
        w-11/12 max-w-md
        mx-auto
        px-5 py-6
        bg-pink
        rounded-2xl
        shadow-xl
        hover:shadow-2xl hover:-translate-y-2 duration-300
        xs:flex-row
      `}>
      <div className="text text-center xs:text-left mt-3 xs:mt-0">  
        <h3 
          className={`
            text-xl text-brown font-bold uppercase 
            ${titleFont.className}
          `}
          data-aos="fade-right"
          data-aos-delay="100"
        >
          {title}
        </h3>
        <p 
          className='text-sm text-brown opacity-40'
          data-aos="fade-right"
          data-aos-delay="300"
        >
          {description}
        </p>
      </div>
      <Image 
        src={`/images/${image}`}
        alt="Chake image"
        width={120}
        height={120}
        data-aos="fade-left"
        data-aos-delay="700"
      />
    </Link>

  )
}

Cta.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
}