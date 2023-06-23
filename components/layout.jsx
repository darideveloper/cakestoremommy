import { regularFont } from '@/lib/fonts'
import Header from '@/components/header'
import Footer from '@/components/footer'

export default function RootLayout({ children }) {
  return (
    <>
      <Header />
      <main className={regularFont.className}>
        {children}
      </main>
      <Footer />
    </>
  )
}
