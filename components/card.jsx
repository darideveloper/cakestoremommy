import PropTypes from 'prop-types'
import Image from "next/image"

export default function Card ({title, body, image}) {
  return (
    <article
      className={`
        flex items-center justify-center flex-col
        w-11/12
        sm:w-full
        sm:flex-row sm:gap-8
        lg:flex-col lg:gap-0
      `}>
      <Image
        src={`/images/${image}`}
        width={100}
        height={100}
        alt="Why Us icon"
        className={`
          mt-10
          sm:w-1/6
          lg:w-1/3
          xl:w-1/4
        `}
      />
      <div className={`
          text 
          text-center mt-5
          sm:w-5/6
          md:w-11/12
        `}>
        <h2
          className="text-xl font-bold text-brown my-5"
        >
          {title}
        </h2>
        <p>{body}</p>
      </div>
    </article>
  )
}

Card.propTypes = {

}