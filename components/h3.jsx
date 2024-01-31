import { titleFont } from '@/lib/fonts'

/**
 * H3 component
 * @param {jsx} children
 * @param {string} className
 * @param {number} mt - margin top value
 * @returns 
 */
export default function H3({ children, className, mt=14 }) {
  return (
    <h3
      className={`
        text-2xl
        font-bold
        text-center
        ${titleFont.className}
        mb-5
        mt-${mt}
        block
        ${className}
      `}
    >
      {children}
    </h3>
  )
}