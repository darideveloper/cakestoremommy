import propTypes from 'prop-types'

export default function DropDown({ name, value, onChange, options, disabled }) {

  return (
    <select
      name={name}
      id={name}
      className={`
        w-full
        text-center
        capitalize
        py-3
        text-lg
        rounded-xl
        shadow-lg
        outline-none
        mt-4
        hover:shadow-xl
        duration-300
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
  )
}

DropDown.propTypes = {
  name: propTypes.string.isRequired,
  value: propTypes.number.isRequired,
  onChange: propTypes.func.isRequired,
  options: propTypes.array.isRequired,
}