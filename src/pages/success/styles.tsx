import styled from "styled-components";
import { IconBase } from "../home/components/header/styles";

export const SuccessContainer = styled.main`
  width: ${({theme}) => theme.layout.width};
  margin: 5rem auto;
`

export const ContentSuccess = styled.div`
  display: flex;
  gap: 6.25rem;
  margin-top: 2.5rem;
`
export const Title = styled.div`
 
 h1{
    color: ${props => props.theme.color["yellow-dark"]};
    font-size: 2rem;
    font-family: 'Baloo 2', cursive;
    line-height: 1.3;
  }

  h2{
    color: ${props => props.theme.color["base-subtitle"]};
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.3;
  }
`
export const OrderInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 32.875rem;
  border: 1px solid transparent;
  border-radius: 6px 36px;
  border-image: linear-gradient(to right, #DBAC2C, #8047F8);
  border-image-slice: 1;
  background-origin: border-box;
  background-clip: content-box, border-box;
  padding: 2.5rem;
`
export const IconPayment = styled(IconBase)`
  background: ${props => props.theme.color["yellow-dark"]};
`

export const IconLocal = styled(IconBase)`
  background: ${props => props.theme.color.purple};
`
export const Infos = styled.div`
  display: flex;
  align-items: center;
  gap: .75rem;

  div{
    display: flex;
    flex-direction: column;

    p, strong{
      line-height: 1.3;
    }
  }
`
export const Local = styled(Infos)` 
`
export const Time = styled(Infos)`
`
export const Payment = styled(Infos)`
`
