import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GlobalStyle from '../styles/Reset'
import { Login } from './Login'
import { Cadastro } from './Cadastro'
import { Habitos } from './Habitos'
import { Hoje } from './Hoje'
import { Historico } from './Historico'
import { Usuario } from '../context/UserContext'
import { ProgressoUsuario } from '../context/ContextProgress'

export default function App() {
  return (
    <ProgressoUsuario>
      <GlobalStyle />
      <Usuario>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/habitos" element={<Habitos />} />
            <Route path="/hoje" element={<Hoje />} />
            <Route path="/historico" element={<Historico />} />
          </Routes>
        </BrowserRouter>
      </Usuario>
    </ProgressoUsuario>
  )
}
