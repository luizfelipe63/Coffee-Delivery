import styled from "styled-components";

export const CardCoffe = styled.div`
  background: ${props => props.theme.color["base-card"]};
  padding: 0 1.5rem 1.25rem 1.5rem;
  border-radius: 6px 36px;

  display: flex;
  flex-direction: column;
  align-items: center;


  img{
    margin-top: -1.25rem;
  }
`

export const TagContainer = styled.div`
   display: flex;
    align-items: center;
    gap: .5rem;
`

export const Tag = styled.span`
  background: ${props => props.theme.color["yellow-ligth"]};
  color: ${props => props.theme.color["yellow-dark"]};
  margin-top: .75rem;
  font-size: 0.625rem;
  font-weight: bold;
  border-radius: 100px;
  padding: .25rem;
`

export const Name = styled.span`
  font-family: 'Baloo 2', cursive;
  font-size: 1.25rem;
  margin: 1rem 0 .5rem  ;
`

export const Description = styled.span`
  font-size: 0.875rem;
  text-align: center;
  margin-bottom: 2rem;
  color: ${props => props.theme.color["base-labal"]};
`

export const FooterBuy = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  span{
    font-size: 0.875rem;
    color: ${props =>  props.theme.color["base-text"]};
  } 

  strong{
    font-size: 1.5rem;
    font-family: 'baloo 2', monospace;
  } 
`

export const Actions = styled.div`
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
    background: ${props => props.theme.color["purple-dark"]};
    color: ${props => props.theme.color.White};
    border-radius: 6px;
    border: 0;
    padding: .5rem;

    cursor: pointer;

    display: flex;
    align-items: center;

    transition: background 0.1s;

    :hover{
      background: ${props => props.theme.color.purple};
    }
  }
`
