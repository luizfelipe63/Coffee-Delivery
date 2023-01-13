import styled from 'styled-components'

export const CardCoffePayment = styled.div`
  border-radius: 8px;
  margin-top: 0.75rem;
  padding: 2.5rem;
  background: ${(props) => props.theme.color['base-card']};

  display: flex;
  flex-direction: column;
`

export const HeaderPayment = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 2rem;

  svg {
    color: ${(props) => props.theme.color.purple};
  }

  div {
    p {
      color: ${(props) => props.theme.color['base-subtitle']};
    }

    span {
      font-size: 0.875rem;
      color: ${(props) => props.theme.color['base-text']};
    }
  }
`

export const ButtonContent = styled.div`
  display: flex;
  gap: 0.75rem;

  @media (max-width: 1120px) {
    display: flex;
    flex-direction: column;
  }
`
export const RadioButton = styled.input`
  display: none;
`
export const PaymentButton = styled.label`
  position: relative;
  padding: 1rem;
  border: 0;
  border-radius: 6px;
  font-size: 0.75rem;
  width: 11.16rem;
  background: ${(props) => props.theme.color['select-button']};
  color: ${(props) => props.theme.color.text};
  display: flex;
  align-items: center;
  gap: 0.75rem;
  cursor: pointer;
  border: 1px solid transparent;

  opacity: 0.7;

  svg {
    color: ${(props) => props.theme.color.purple};
  }
`

export const AddBorderInput = styled.div`
  position: absolute;
  left: 0;
  width: 11.16rem;
  height: 100%;
  border-radius: 6px;
  border: 1px solid ${(props) => props.theme.color.purple};
`
