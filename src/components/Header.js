import logo from '../assets/TrackIt.svg'
import vector1 from '../assets/Vector 1.svg'
import vector2 from '../assets/Vector 2.svg'
import vector3 from '../assets/Vector 3.svg'
import vector4 from '../assets/Vector 4.svg'
import ellipse from '../assets/Ellipse 3.svg'
import styled from 'styled-components'

export function Header() {
  return (
    <>
      <Container>
        <Box1>
          <img src={vector1} alt="" />
          <img src={vector2} alt="" />
          <img src={vector3} alt="" />
        </Box1>
        <Box2>
          <img src={vector4} alt="" />
          <img src={ellipse} alt="" />
        </Box2>
        <Box3>
          <img src={logo} alt="" />
        </Box3>
      </Container>
    </>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 32px;
  img {
    position: relative;
    z-index: 1;
  }
  img:nth-of-type(2) {
    top: 11px;
  }
  img:nth-of-type(3) {
    top: 21px;
  }
`
const Box1 = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 6px;
  position: relative;
  left: -5px;
  top: 0;
  margin-top: 65px;
`

const Box2 = styled.div`
  margin-top: -5px;
  display: flex;
  flex-direction: column;
  img:nth-of-type(2) {
    margin-top: -24px;
    position: relative;
    z-index: 0;
    left: 15px;
    margin-bottom: 20px;
  }
`

const Box3 = styled.div``
