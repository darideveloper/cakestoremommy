export default function DropDown({ name, value, onChange, options, disabled, displayValue, labelText }) {

  return (
    <label
      className={`
          w-full
          block
          text-center
          capitalize
          py-3
          mt-14
          text-lg
          rounded-xl
          shadow-lg
          outline-none
          hover:shadow-xl
          duration-300
          apareance-none
          relative
        `}
    >
      <p
        className={`
          absolute
          -top-8
          left-0
          w-full
          text-center
          text-md
          opacity-60
        `}
      >
        {labelText}
      </p>

      {/* Visble text */}
      <span
        className={`
          lowercase
        `}
      >
        {displayValue}
      </span>

      {/* Html select */}
      <select
        name={name}
        id={name}
        className={`
            opacity-0
            absolute
            w-full
            h-12
            top-0
            left-0
          `}
        onChange={e => {
          onChange(parseInt(e.target.value))
        }}
        disabled={disabled}
      >
        {options.map((item, index) => (
          <option
            key={index}
            value={item.value}
            defaultValue={item.value == value}
          >
            {item.name}
          </option>
        ))}
      </select>

      {/* Arrow */}
      <svg
        viewBox="0 0 24 24"
        className={`
          absolute
          right-4
          top-1/2
          w-4
          h-4
          -mt-1
          fill-brown
        `}
      >
        <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
      </svg>
    </label>
  )
}