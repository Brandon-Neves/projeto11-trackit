import { useState, createContext } from 'react'

const userContext = createContext()

export function Usuario({ children }) {
  const [usuario, setUsuario] = useState({})

  return (
    <userContext.Provider value={{ usuario, setUsuario }}>
      {children}
    </userContext.Provider>
  )
}

export default userContext
