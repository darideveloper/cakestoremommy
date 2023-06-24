import PropTypes from 'prop-types'
import Image from 'next/image'
import Link from 'next/link'

export default function Cta ({title, description, image}) {
  return (
    <Link
      href={`/comming-soon`} 
      className={`
        cta
        flex items-center justify-between flex-col-reverse
        w-11/12 max-w-md
        mx-auto
        px-6 py-6
        bg-pink
        rounded-2xl
        shadow-xl
        hover:shadow-2xl hover:-translate-y-2 duration-300
        xs:flex-row
      `}>
      <div className="text">  
        <h3 className='text-2xl text-brown font-bold uppercase'>{title}</h3>
        <p className='text-brown opacity-40'>{description}</p>
      </div>
      <Image 
        src={`/images/${image}`}
        alt="Chake image"
        width={120}
        height={120}
      />
    </Link>
        
    
  )
}

Cta.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
}