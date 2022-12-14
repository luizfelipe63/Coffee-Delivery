import styled from "styled-components";

export const InputContent = styled.div`
  display: flex;
  align-items: center;
  border-radius: 6px;
  border: 1px solid ${props => props.theme.color["base-button"]};
  background: ${props => props.theme.color["base-input"]};
  position: relative;

  border-top: 2px solid transparent;
  border-bottom: 2px solid transparent;

  
  :focus-within {
    border: 2px solid ${props => props.theme.color.yellow};
  }
  
  span{
    font-style: italic;
    font-size: .75rem;
    padding-right: .75rem;
    color: ${props => props.theme.color["base-labal"]};
  }

  input{
    padding: .75rem;
    font-size: 0.875rem;
    color: ${props => props.theme.color["base-text"]};
    border: 0;
    background: transparent;
    width: 100%;

    ::placeholder{
      font-size: 1rem;
      color: ${props => props.theme.color["base-text"]};
    }

    :focus{
     border-color: transparent;
    }
  }
`