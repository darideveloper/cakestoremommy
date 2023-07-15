import { Roboto, Dancing_Script, Italiana } from 'next/font/google'

export const regularFont = Roboto({ 
  subsets: ['latin'],
  weight: "300"
})
export const titleFont = Italiana({
  subsets: ['latin'],
  weight: "400"
}) 
export const alternateFont = Dancing_Script({
  subsets: ['latin']
})