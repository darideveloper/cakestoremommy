import { createContext, useContext, useState } from 'react'

export const LangContext = createContext()

export function LangContextProvider({ children }) {
  const langs = ["en", "es"]
  const [lang, setLang] = useState("en")
  const langId = langs.indexOf(lang)

  return (
    <LangContext.Provider value={{ lang, setLang, langId }}>
      {children}
    </LangContext.Provider>
  )
}