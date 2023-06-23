import Layout from '@/components/layout'
import About from '@/components/about'
import CustomizeCake from '@/components/customize-cake'
import Gallery from '@/components/gallery'
import Hero from '@/components/hero'
import WhyUs from '@/components/why-us'

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