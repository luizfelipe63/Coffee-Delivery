import styled from 'styled-components'

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 2rem 0;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }

  background-color: ${(props) => props.theme.color.background};
  width: ${({ theme }) => theme.layout.width};
`

export const Actions = styled.div`
  display: flex;
  gap: 1.25rem;
`

export const Location = styled.div`
  padding: 0.5rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 0.25rem;

  font-size: 0.875rem;
  background: ${(props) => props.theme.color['purple-ligth']};
  color: ${(props) => props.theme.color['purple-dark']};
`
export const Card = styled.div`
  padding: 0.5rem;
  border-radius: 6px;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  position: relative;

  background: ${(props) => props.theme.color['yellow-ligth']};
  color: ${(props) => props.theme.color['yellow-dark']};

  span {
    position: absolute;
    top: -0.5625rem;
    right: -0.5625rem;

    font-size: 0.875rem;
    font-weight: bold;

    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 1.25rem;
    height: 1.25rem;
    background: ${(props) => props.theme.color['yellow-dark']};
    color: ${(props) => props.theme.color.White};
  }
`
export const CardToggle = styled.div`
  cursor: pointer;

  padding: 0.5rem;
  border-radius: 6px;
  display: flex;

  background: ${(props) => props.theme.color['yellow-ligth']};
  color: ${(props) => props.theme.color['yellow-dark']};
`
