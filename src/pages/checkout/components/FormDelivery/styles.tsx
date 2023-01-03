import styled from 'styled-components'

export const CardCoffeInputs = styled.div`
  border-radius: 8px;
  padding: 2.5rem;
  background: ${(props) => props.theme.color['base-card']};
`

export const HeaderInputs = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  margin-bottom: 2rem;

  svg {
    color: ${(props) => props.theme.color.yellow};
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

export const ContainerInputs = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 12.5rem 1fr 3.75rem;

  div {
    :nth-child(2) {
      grid-column: 1 / 4;
    }

    :nth-child(4) {
      grid-column: 2 / 4;
    }
  }

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 3rem;

    div {
      :nth-child(2),
      :nth-child(3),
      :nth-child(4),
      :nth-child(5) {
        grid-column: 1 / 3;
      }
    }
  }
`

export const InputContent = styled.div`
  display: flex;
  align-items: center;
  border-radius: 6px;
  border: 1px solid ${(props) => props.theme.color['base-border']};
  background: ${(props) => props.theme.color['base-input']};
  position: relative;

  border-top: 1px solid ${(props) => props.theme.color['base-border']};
  border-bottom: 1px solid ${(props) => props.theme.color['base-border']};

  :focus-within {
    border: 1px solid ${(props) => props.theme.color.yellow};
  }

  span {
    font-style: italic;
    font-size: 0.75rem;
    padding-right: 0.75rem;
    color: ${(props) => props.theme.color['base-labal']};
  }

  input {
    padding: 0.75rem;
    font-size: 0.875rem;
    color: ${(props) => props.theme.color['base-text']};
    border: 0;
    background: transparent;
    width: 100%;

    ::placeholder {
      font-size: 1rem;
      color: ${(props) => props.theme.color['base-text']};
    }

    :focus {
      border-color: transparent;
    }
  }
`
