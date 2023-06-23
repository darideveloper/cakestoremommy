import { regularFont } from '@/lib/fonts'
import Header from '@/sections/header'
import Footer from '@/sections/footer'

export default function RootLayout({ children }) {
  return (
    <div className="container mx-auto">
      <Header />
      <main className={regularFont.className}>
        {children}
      </main>
      <Footer />
    </div>
  )
}
