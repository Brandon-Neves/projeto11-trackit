import Logo from '../assets/TrackIt1.svg'
import Foto from '../assets/Rectangle 14.svg'
import styled from 'styled-components'
export function Topo() {
  return (
    <>
      <Header>
        <img src={Logo} alt="" />
        <img src={Foto} alt="" />
      </Header>
      Ola mundo
    </>
  )
}

const Header = styled.div`
  display: flex;
  background-color: #126ba5;
  justify-content: space-around;
  gap: 0 28%;
  height: 70px;
  align-items: center;
  position: fixed;
  width: 100vw;
  img {
    height: 60%;
  }
`
