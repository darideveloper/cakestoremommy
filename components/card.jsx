import PropTypes from 'prop-types'
import Image from "next/image"

export default function Card ({title, body, image}) {
  return (
    <article
      className={`
        flex items-center justify-center flex-col
        w-11/12
        xs:w-full xs:flex-row xs:gap-8
        lg:flex-col lg:gap-0
      `}>
      <Image
        src={`/images/${image}`}
        width={100}
        height={100}
        alt="Why Us icon"
        className={`
          mt-10
          xs:w-1/6
          lg:w-1/3
          xl:w-1/4
        `}
      />
      <div className={`
          text 
          text-center mt-5
          xs:w-4/6
          md:w-11/12
        `}>
        <h3
          className="text-xl font-bold text-brown my-5"
        >
          {title}
        </h3>
        <p>{body}</p>
      </div>
    </article>
  )
}

Card.propTypes = {

}