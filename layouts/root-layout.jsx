import { regularFont } from '@/lib/fonts'
import Header from '@/sections/header'
import Footer from '@/sections/footer'
import { LangContextProvider } from '@/context/lang'

export default function RootLayout({ children }) {
  return (
    <div className="mx-auto">
      <Header />
      <main className={regularFont.className}>
        {children}
      </main>
      <Footer />
    </div>
  )
}
