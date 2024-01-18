export default function Input({ name, placeholder, type, value, className, required = true, onChange}) {
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
        ${['button', 'submit'].includes(type)
          ?
          'bg-pink text-brown font-bold'
          :
          'bg-white text-brown'
        }
        ${['button', 'submit'].includes(type) 
          && 
          `hover:bg-transparent
          hover:-translate-y-2
          cursor-pointer`
        }
        my-4 md:my-0
        text-md
        w-full
        hover:shadow-md
        duration-200
        focus:border-4
        ${className}
      `}
      name={name}
      placeholder={placeholder}
      value={value}
      type={type}
      required={required}
      onChange={onChange}
    />
  )
}