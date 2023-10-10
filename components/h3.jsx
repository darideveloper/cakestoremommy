import { titleFont } from '@/lib/fonts'

export default function H3({ children, className }) {
  return (
    <h3
      className={`
        text-2xl
        font-bold
        text-center
        ${titleFont.className}
        mb-5
        mt-8
        md:mt-5
        ${className}
      `}
    >
      {children}
    </h3>
  )
}