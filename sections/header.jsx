import PropTypes from 'prop-types'
import { useState } from 'react'
import { titleFont } from '@/lib/fonts'
import Link from 'next/link'
import Line from '@/components/line'
import LangButtons from '@/components/lang-buttons'

export default function Header({ menuItems }) {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className='mt-1'>

      <div
        className={`
          container mx-auto
          flex justify-between items-center
        `}>

        {/* Open menu button */}
        <button
          onClick={() => { setMenuOpen(true) }}
          className={`
            px-2 py-4
            flex flex-col justify-center items-start gap-1
            lg:hidden
          `}
        >
          <Line
            width="8"
          />

          <Line
            width="6"
          />
        </button>

        <Link href="/">
          <h1
            className={`
            ${titleFont.className}
            font-bold text-lg text-brown text-center line-clamp-3
            xs:text-2xl
            flex justify-center items-center
            lg:flex-col 
          `}
          >
            <span className='mx-1 lg:-my-1'>CAKE</span>
            <span className='mx-1 lg:-my-1'>STORE</span>
            <span className='mx-1 lg:-my-1'>MOMMY</span>
          </h1>
        </Link>

        <nav className={`
          duration-300 transition-transform
          fixed top-0 ${menuOpen ? "translate-x-0" : '-translate-x-64'} left-0 z-30 
          p-5 pt-2
          w-52 h-screen 
          bg-pink text-xl text-brown
          shadow-2xl shadow-black
          lg:block lg:static 
          lg:h-auto
          lg:shadow-none 
          lg:bg-transparent
          lg:translate-x-0
          lg:w-8/12 lg:max-w-2xl
        `}>
          <ul className={`lg:flex items-center justify-between w-full`}>
            {/* Close menu button */}
            <button
              onClick={() => { setMenuOpen(false) }}
              className={`
                px-2 py-2
                flex flex-col justify-center items-start gap-1
                lg:hidden
              `}
            >
              <svg
                viewBox="0 0 24 24"
                className='fill-brown w-8 h-8'
              >
                <path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z" />
              </svg>

            </button>
            {menuItems.map((item, index) => (
              <li
                key={index}
              >
                <Link
                  href={item.path}
                  className={`block m-2 py-4`}
                  // Close menu when clicking on a link
                  onClick={() => { setMenuOpen(false) }}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <LangButtons />

      </div>
    </header>
  )
}

Header.propTypes = {
  menuItems: PropTypes.arrayOf(PropTypes.object).isRequired
}