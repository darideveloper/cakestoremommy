export default function Input ({name, placeholder, type, required=true, className=""}) {
  return (
    <input
      className={`
        border-2 
        border-pink
        px-8
        py-3
        rounded-2xl
        flex items-center justify-center
        gap-2
        bg-white
        my-4 md:my-0
        text-md
        w-full
        hover:shadow-md
        focus:border-4
        ${className}
      `}
      name={name}
      placeholder={placeholder}
      type={type}
      required={required}
    />
  )  
}