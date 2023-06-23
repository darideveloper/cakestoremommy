import { regularFont } from '@/lib/fonts'

export default function RootLayout({ children }) {
  return (
    <main className={regularFont.className}>
      {children}
    </main>
  )
}
