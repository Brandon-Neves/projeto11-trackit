import { Header } from './Header'
import axios from 'axios'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import GlobalAPI from '../global/DadosGlobais'

export function Cadastro() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [image, setImage] = useState('')

  function Cadastrar(e) {
    e.preventDefault()
    const navigate = useNavigate('/')
    const corpoCadastro = { email, password, name, image }
    const promise = axios.post(`${GlobalAPI}/auth/sign-up`, corpoCadastro)
    promise.then(console.log(corpoCadastro), navigate('/'))
  }

  return (
    <Main>
      <Header />
      <input
        type="text"
        placeholder="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="senha"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <input
        type="text"
        placeholder="nome"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        type="url"
        placeholder="foto"
        value={image}
        onChange={e => setImage(e.target.value)}
      />
      <button onClick={Cadastrar}>
        {' '}
        <h3>Cadastrar</h3>{' '}
      </button>
      <Link to="/">Já tem uma conta? Faça login!</Link>
    </Main>
  )
}

const Main = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  input {
    max-width: 303px;
    height: 45px;
    font-size: 20px;
    color: #dbdbdb;
    border: 1px solid #d4d4d4;
    border-radius: 5px;
    margin-bottom: 6px;
    padding-left: 15px;
  }
  button {
    width: 312px;
    height: 45px;
    background-color: #52b6ff;
    border-radius: 5px;
    margin-bottom: 25px;
  }
  h3 {
    font-size: 21px;
    color: #ffffff;
  }

  a {
    color: #52b6ff;
    font-size: 14px;
  }
`
