export default function RadioButton ({name, value, onChange, checked}) {
  return (
    <>
      <label 
        htmlFor={`${name} ${value}`} 
        className={`
          flex items-center justify-start
          gap-2
          my-4
          ml-4
        `}
      >
        <span
          className={`
            circle
            w-6 h-6
            border-2 border-pink
            flex items-center justify-center
            rounded-full
          `}
        >
          {
            checked &&
            <span
              className={`
                inner-circle
                w-4 h-4
                bg-pink
                rounded-full
              `}
            ></span>
          }
        </span>
        <p>{value}</p>        
      </label>
      <input 
        type="radio" 
        name={name} 
        id={`${name} ${value}`} 
        value={value}
        onChange={onChange}
        checked={checked}
        className="hidden"
      />
    </>
  )
}