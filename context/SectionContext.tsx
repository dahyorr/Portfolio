import React, { PropsWithChildren } from 'react'

interface State{
  section: string | null,
  setSection: (section: string) => void
}

const initialState: State = {
  section: null,
  setSection: (section: string) => null
}

export const SectionContext = React.createContext(initialState)

const SectionContextProvider: React.FC<PropsWithChildren> = ({children}) => {
  const [section, setSection] = React.useState<string | null>(null)

  return (
    <SectionContext.Provider value={{section, setSection}}>
      {children}
    </SectionContext.Provider>
  )
}

export default SectionContextProvider