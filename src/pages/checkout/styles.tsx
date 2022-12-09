import styled from "styled-components";

export const CheckoutContainer = styled.main`
  width: ${props => props.theme.layout.width};
  margin: 2.5rem auto;
  display: flex;
  gap: 2rem;

  h1{
    font-size: 1.125rem;
    font-family: 'Baloo 2', cursive;
    margin-bottom: .1rem;
  }
`

export const CoffeInputs = styled.div`
  border-radius: 8px;
  padding: 2.5rem;
  background: ${props => props.theme.color["base-card"]};
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

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const InputBase = styled.input`
  border: 1px solid ${props => props.theme.color["base-button"]};
  border-radius: 4px;
  padding: .75rem;
  font-size: 0.875rem;
  background: ${props => props.theme.color["base-input"]};
  color: ${props => props.theme.color["base-text"]};
  width: 100%;

`
export const InfoBase = styled.div`
  display: flex;
  gap: .75rem;

`

export const InputCep = styled(InputBase)`
  width: 12.5rem;
`
export const InputBairro = styled(InputBase)`
  width: 12.5rem;
`
export const InputUF = styled(InputBase)`
  width: 3.75rem;
`

export const CoffePayment = styled.div`
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
`

export const CoffeCard = styled.div`
  background: ${props => props.theme.color["base-card"]};
  padding: 2.5rem;
  width: 28rem;
  border-radius: 6px 44px;

  display: flex;
  flex-direction: column;
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

  span{
    font-size: 1.25rem;
    font-weight: bold;
  }
`
export const ButtonCard = styled.button`
  background: ${props => props.theme.color.yellow};
  color: ${props => props.theme.color.White};
  border: 0;
  border-radius: 6px;
  padding: .75rem;
`