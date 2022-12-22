import styled from "styled-components";

export const CheckoutContainer = styled.div`
  padding: 2.5rem 0;

  h1{
    font-size: 1.125rem;
    font-family: 'Baloo 2', cursive;
    margin-bottom: 1rem;
  }

  @media (max-width: 768px){
    padding: 2rem 1.5rem;
  }
`

export const ContentForm = styled.form`
  width: ${props => props.theme.layout.width};
  margin: 0 auto;
  display: flex;
  gap: 2rem;

  @media (max-width: 768px){
    display: flex;
    flex-direction: column;
  }
`

export const CardCoffeInputs = styled.div`
  border-radius: 8px;
  padding: 2.5rem;
  background: ${props => props.theme.color["base-card"]};
`

export const ContainerInputs = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 12.5rem 1fr 3.75rem;

  div{
    :nth-child(2){
      grid-column: 1 / 4;
    }

    :nth-child(4){
      grid-column: 2 / 4;
    }
  }

  @media (max-width: 768px){
    display: grid;
    grid-template-columns: 1fr 3rem;

    div{
      :nth-child(2),
      :nth-child(3),
      :nth-child(4),
      :nth-child(5){
        grid-column: 1 / 3;
      }
    }

  }

`

export const HeaderBase = styled.div`
  display: flex;
  align-items: flex-start;
  gap: .5rem;
  margin-bottom: 2rem;

  svg{
    color: ${props => props.theme.color.yellow};
  }

  div{
    p{
      color: ${props => props.theme.color["base-subtitle"]}; 
    }

    span{
      font-size: 0.875rem;
      color: ${props => props.theme.color["base-text"]};
    }
  }
`

export const HeaderPayment = styled(HeaderBase)`
  svg{
    color: ${props => props.theme.color.purple};
  }
`

export const CardCoffePayment = styled.div`
  border-radius: 8px;
  margin-top: .75rem;
  padding: 2.5rem;
  background: ${props => props.theme.color["base-card"]};

  display: flex;
  flex-direction: column;

`

export const ButtonContent = styled.div`
  display: flex;
  gap: .75rem;

  
  @media (max-width: 768px){
    display: flex;
    flex-direction: column;
  }
`

export const SelectButton = styled.button`
  background: ${props => props.theme.color["base-button"]};
  color: ${props => props.theme.color["base-text"]};
  border: 0;
  border-radius: 6px;
  font-size: .75rem;
  padding: 1rem;
  width: 11.125rem;

  display: flex;
  align-items: center;
  gap: .75rem;

  svg{
    color: ${props => props.theme.color.purple};
  }

  
  @media (max-width: 768px){
    width: 100%;
  }
`

export const CoffeCard = styled.div`
  background: ${props => props.theme.color["base-card"]};
  padding: 2.5rem;
  width: 28rem;
  border-radius: 6px 44px;

  display: flex;
  flex-direction: column;
  gap: .75rem;

  
  @media (max-width: 768px){
    width: 100%;
  }

`
export const InfoBase = styled.div`
  display: flex;
  gap: .75rem;

`

export const InfoItens = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.875rem;

  span{
    font-size: 1rem;
  }
`
export const InfoTotal = styled(InfoItens)`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: .75rem;

  span{
    font-size: 1.25rem;
    font-weight: bold;
  }
`
export const ButtonCard = styled.button`
  background: ${props => props.theme.color.yellow};
  color: ${props => props.theme.color.White};
  font-weight: bold;
  font-size: .875rem;
  border: 0;
  border-radius: 6px;
  padding: .75rem;
  transition: background 0.1s;

  cursor: pointer;

  :hover{
    background: ${props => props.theme.color["yellow-dark"]};
  }
`