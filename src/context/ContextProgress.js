import { useState, useContext, createContext } from 'react'

const ContextProgress = createContext()

export function ProgressoUsuario({ children }) {
  const [progresso, setProgresso] = useState(0)

  return (
    <ContextProgress.Provider value={{ progresso, setProgresso }}>
      {children}
    </ContextProgress.Provider>
  )
}

export default ContextProgress
