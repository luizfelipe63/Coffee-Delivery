import styled from "styled-components";

export const NavContainer = styled.nav`
 display: flex;
 justify-content: space-between;
 align-items: center;
 margin: 2rem auto;

 background-color: ${props => props.theme.color.background};
 width: ${({theme}) => theme.layout.width};
 
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
`
export const Location = styled.div`
  padding: .5rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: .25rem;

  font-size: 0.875rem;
  background: ${props => props.theme.color["purple-ligth"]};
  color: ${props => props.theme.color["purple-dark"]};
`
export const Card = styled.div`
  padding: .5rem;
  border-radius: 6px;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;

  background: ${props => props.theme.color["yellow-ligth"]};
  color: ${props => props.theme.color["yellow-dark"]};

  span{
    background: ${props => props.theme.color["yellow-dark"]};
    color: ${props => props.theme.color.White};
  }
`