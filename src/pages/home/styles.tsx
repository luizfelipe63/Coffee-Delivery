import styled from 'styled-components'

export const HomeContainer = styled.main`
  width: ${({ theme }) => theme.layout.width};
  margin: 0 auto;

  h1 {
    font-family: 'Baloo 2', cursive;
    font-size: 2rem;
  }

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;

    h1 {
      text-align: center;
    }
  }
`

export const HeaderTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Filter = styled.div`
  display: flex;
  gap: 0.5rem;
`
export const ButtonFilter = styled.button`
  padding: 0.375rem 0.75rem;
  border-radius: 100px;
  border: 1px solid ${(props) => props.theme.color.yellow};
  font-size: 0.75rem;
  cursor: pointer;
  background: transparent;
  color: ${(props) => props.theme.color['yellow-dark']};
  font-weight: bold;

  &:hover {
    background-color: ${(props) => props.theme.color['yellow-ligth']};
  }
`

export const HomeContent = styled.section`
  margin-top: 3.375rem;
  margin-bottom: 2.5rem;
  display: grid;
  grid-template-columns: repeat(4, 16rem);
  gap: 2rem;

  @media (max-width: 1120px) {
    grid-template-columns: 1fr;
  }
`
