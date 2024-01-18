import '@/styles/global.css';
import { LangContextProvider } from '@/context/lang'


export default function App({ Component, pageProps }) {
  return (
    <LangContextProvider>
      <Component {...pageProps} />
    </LangContextProvider>
  )
}