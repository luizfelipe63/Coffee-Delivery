import styled from "styled-components";

export const CardCoffe = styled.div`
  background: ${props => props.theme.color["base-card"]};
  padding: 1.25rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Tag = styled.span`
  background: ${props => props.theme.color["yellow-ligth"]};
  color: ${props => props.theme.color["yellow-dark"]};
  font-size: 0.625rem;
  font-weight: bold;
  border-radius: 100px;
  padding: .25rem;
`

export const Name = styled.span`
  font-family: 'Baloo 2', cursive;
  font-size: 1.25rem;
`

export const Description = styled.span`
  font-size: 0.875rem;
  color: ${props => props.theme.color["base-labal"]};
`