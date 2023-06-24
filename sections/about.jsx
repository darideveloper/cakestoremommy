import Section from "@/sections/section"
import { alternativeFont } from "@/lib/fonts"

export default function About() {
  return (
    <Section
      title="About Us"
      extraClasses="pt-14"
    >
      <div className="text w-10/12 max-w-3xl mx-auto text-sm text-brown">
        <p 
          className={`
            ${alternativeFont.className}
            text-xl text-right my-6 text-brown
          `}>cake with love</p>
        <div 
          className={`
            content 
            flex flex-col items-center justify-center gap-5
            md:flex-row
          `}>
          <p>
            Welcome to Cake Store Mommy, where we specialize in making your sweet dreams a reality! We understand the power of a beautifully crafted cake to make your celebrations truly special. Whether its a birthday, anniversary, wedding, or any other milestone we are dedicated to delivering stunning creations that not only taste incredible but also leave a lasting impression.
          </p>
          <p>
            We believe that a cake is more than just a dessert; it is a centerpiece that marks moments of togetherness and creates lasting memories. Thats's why we pour our heart soul into every cake we create, infusing it with our passion for baking and our commitment to excellence.
          </p>
        </div>
      </div>
    </Section>
  )
}