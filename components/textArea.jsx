export default function TextArea ({name}) {
  return (
    <textarea
      className={`
        border-2 
        border-pink
        px-8
        py-3
        rounded-2xl
        flex items-center justify-center
        gap-2
        bg-white
        my-4
        text-md
        w-full
        h-32
        hover:shadow-md
        duration-200
        focus:border-4
      `}
      name={name}
    >

    </textarea>
  )
}