import React from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { useState, useContext } from 'react'
import userContext from '../context/UserContext'
import { Header } from './Header'
import GlobalAPI from '../global/DadosGlobais'

export function Login() {
  const { setUsuario } = useContext(userContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  function LogarUsuario(e) {
    e.preventDefault()
    const dados = { email, password }
    const promise = axios.post(`${GlobalAPI}/auth/login`, dados)
    promise.then(res => {
      setUsuario({
        token: res.data.token,
        image: res.data.image,
        name: res.data.name
      })
      navigate('/hoje')
    })

    promise.catch(res => {
      alert('Email ou senha incorretos. Tente novamente')
    })
  }
  return (
    <Main>
      <Header />
      <form onSubmit={LogarUsuario}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Senha"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit">
          {' '}
          <p>Entrar</p>{' '}
        </button>
        <Link to={'/cadastro'}>Não tem uma conta?Cadastre-se!</Link>
      </form>
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
