import styled from 'styled-components'

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
