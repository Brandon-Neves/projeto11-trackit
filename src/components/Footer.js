import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import styled from 'styled-components'
import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import userContext from '../context/UserContext'
import GlobalAPI, { autorizacao } from '../global/DadosGlobais'
import UserContext from '../context/ContextProgress'
import ContextProgress from '../context/ContextProgress'

const percentage = 60
export function Footer() {
  const { progresso, setProgresso } = useContext(ContextProgress)
  const { usuario } = userContext(userContext)
  const [habitos, setHabitos] = useState([])

  function progressCalculate() {
    let count = 0
    if (habitos.length === 0) {
      return count
    }
    for (let i = 0; i < habitos.length; i++) {
      count = Math.round((count * 100) / habitos.length)
      setProgresso(count)
    }
  }

  /*function getHabitos() {
    const promise = axios.get(`${GlobalAPI}/habits/today`, autorizacao(usuario))
    promise.then(res => setHabitos(res.data))
  }*/

  useEffect(() => {
    progressCalculate()
    //getHabitos()
  }, [habitos])

  return (
    <Rodape>
      <div>
        <h2>Hábitos</h2>
      </div>
      <div style={{ width: 91, height: 91, position: 'relative', bottom: 20 }}>
        <CircularProgressbar
          value={percentage}
          text={`Hoje`}
          background
          backgroundPadding={6}
          styles={buildStyles({
            backgroundColor: '#52B6FF',
            textColor: '#fff',
            pathColor: '#fff',
            trailColor: 'transparent'
          })}
        />
      </div>
      <div>
        <h2>Histórico</h2>
      </div>
    </Rodape>
  )
}

const Rodape = styled.div`
  display: flex;
  position: fixed;
  width: 100vw;
  bottom: 0;
  height: 70px;
  background-color: #fff;
  justify-content: space-around;
  align-items: center;
  font-size: 18px;
  color: #52b6ff;
`
