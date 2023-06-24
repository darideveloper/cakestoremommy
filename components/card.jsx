import PropTypes from 'prop-types'
import Image from "next/image"

export default function Card ({title, body, image}) {
  return (
    <article
      className={`
        flex items-center justify-between flex-col
        w-11/12
        xs:w-full xs:flex-row
        md:flex-col
      `}>
      <Image
        src={`/images/${image}`}
        width={100}
        height={100}
        alt="Why Us icon"
        className={`
          mt-10
          xs:w-1/6
          md:w-1/3
          xl:w-1/4
        `}
      />
      <div className={`
          text 
          mt-5
          xs:w-5/6 xs:pl-5
          md:w-11/12 md:pl-0 md:text-center
        `}>
        <h3
          className="text-md lg:text-lg font-bold text-brown my-2"
        >
          {title}
        </h3>
        <p className='text-xs lg:text-md'>{body}</p>
      </div>
    </article>
  )
}

Card.propTypes = {

}