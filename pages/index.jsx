import Layout from '@/layouts/root-layout'
import About from '@/sections/about'
import CustomizeCake from '@/sections/customize-cake'
import Gallery from '@/sections/gallery'
import Hero from '@/sections/hero'
import WhyUs from '@/sections/why-us'

export default function Index () {
  return (
    <Layout>
      <Hero />
      <Gallery />
      <CustomizeCake />
      <WhyUs />
      <About />
    </Layout>
  )
}