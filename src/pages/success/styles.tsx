import styled from 'styled-components'
import { IconBase } from '../home/components/header/styles'

export const SuccessContainer = styled.main`
  width: ${({ theme }) => theme.layout.width};
  margin: 5rem auto;

  @media (max-width: 1120px) {
    padding: 2rem 1.5rem;
    margin: 2.5rem auto;
  }
`

export const ContentSuccess = styled.div`
  display: flex;
  gap: 6.25rem;
  margin-top: 2.5rem;

  @media (max-width: 1120px) {
    display: flex;
    flex-direction: column;
  }
`
export const Title = styled.div`
  h1 {
    color: ${(props) => props.theme.color['yellow-dark']};
    font-size: 2rem;
    font-family: 'Baloo 2', cursive;
    line-height: 1.3;
  }

  h2 {
    color: ${(props) => props.theme.color['base-subtitle']};
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
  border-radius: 6px 36px;
  border: solid 2px transparent;
  background-image: linear-gradient(
      ${({ theme }) => theme.color.background},
      ${({ theme }) => theme.color.background}
    ),
    linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
  border-image-slice: 1;
  background-origin: border-box;
  background-clip: padding-box, border-box;
  padding: 2.5rem;

  @media (max-width: 1120px) {
    width: 100%;
  }
`
export const IconPayment = styled(IconBase)`
  background: ${(props) => props.theme.color['yellow-dark']};
`

export const IconLocal = styled(IconBase)`
  background: ${(props) => props.theme.color.purple};
`
export const Infos = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  div {
    display: flex;
    flex-direction: column;

    p,
    strong {
      line-height: 1.3;
    }
  }
`
export const Local = styled(Infos)``
export const Time = styled(Infos)``
export const Payment = styled(Infos)``
