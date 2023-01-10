import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  padding: 2.5rem 0;

  h1 {
    font-size: 1.125rem;
    font-family: 'Baloo 2', cursive;
    margin-bottom: 1rem;
  }

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`

export const ContentForm = styled.form`
  width: ${(props) => props.theme.layout.width};
  margin: 0 auto;
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`

export const CoffeCard = styled.div`
  background: ${(props) => props.theme.color['base-card']};
  padding: 2.5rem;
  width: 28rem;
  border-radius: 6px 44px;

  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const InfoBase = styled.div`
  display: flex;
  gap: 0.75rem;
`

export const InfoItens = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.875rem;

  span {
    font-size: 1rem;
  }
`
export const InfoTotal = styled(InfoItens)`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.75rem;

  span {
    font-size: 1.25rem;
    font-weight: bold;
  }
`
export const ButtonCard = styled.button`
  background: ${(props) => props.theme.color.yellow};
  color: ${(props) => props.theme.color.White};
  font-weight: bold;
  font-size: 0.875rem;
  border: 0;
  border-radius: 6px;
  padding: 0.75rem;
  transition: background 0.1s;

  cursor: pointer;

  :hover {
    background: ${(props) => props.theme.color['yellow-dark']};
  }
`
