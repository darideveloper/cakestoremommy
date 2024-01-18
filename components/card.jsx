import PropTypes from 'prop-types'
import Image from "next/image"
import { titleFont } from '@/lib/fonts'

export default function Card({ title, body, image, index }) {
  return (
    <article
      className={`
        flex items-center justify-between flex-col
        w-11/12
        xs:w-full xs:flex-row
        md:flex-col
      `}
      data-aos="zoom-out"
      data-aos-delay={200*index}
    >
      <Image
        src={`/images/${image}`}
        width={100}
        height={100}
        alt="Why Us icon"
        className={`
          mt-10
          xs:w-1/6
          md:w-1/3 md:h-36
          xl:w-1/4
        `}
      />
      <div className={`
          text
          text-center 
          mt-5
          xs:w-5/6 xs:pl-5 xs:text-left
          md:w-11/12 md:pl-0 md:text-center
        `}>
        <h3
          className={`text-lg lg:text-xl font-bold text-brown my-2 ${titleFont.className}`}
        >
          {title}
        </h3>
        <p className='text-xs lg:text-md text-brown'>{body}</p>
      </div>
    </article>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
}