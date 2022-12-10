import styled from "styled-components";

export const InfoCoffe = styled.div`
  background: ${props => props.theme.color["base-card"]};
  border-bottom: 1px solid ${props => props.theme.color["base-button"]};


  display: flex;
  align-items: center;
  gap: 1.25rem;
` 

export const Details = styled.div`
  
  div{
    display: flex;

    input{
      background: ${props => props.theme.color["base-button"]};
      padding: .5rem;
      margin-right: .5rem;
      border-radius: 6px;
      width: 4.5rem;
      border: 0;
    }

    button{
      font-size: .75rem;
      padding: 0 .5rem;
      border-radius: 6px;
      border: 0;
      color: ${props => props.theme.color["base-text"]};

      display: flex;
      align-items: center;
      gap: .25rem;

      svg{
        color: ${props => props.theme.color.purple};
      }
    }
  }
`