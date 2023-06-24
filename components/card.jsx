import PropTypes from 'prop-types'
import Image from "next/image"

export default function Card ({title, body, image}) {
  return (
    <article
      className={`
        flex items-center justify-center flex-col
        mb-14
      `}>
      <Image
        src={`/images/${image}`}
        width={100}
        height={100}
        alt="Why Us icon"
        className={`
        `}
      />
      <div className="text text-center mt-5">
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