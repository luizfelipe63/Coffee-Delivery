import styled from 'styled-components'

export const HomeContainer = styled.main`
  width: ${({ theme }) => theme.layout.width};
  margin: 0 auto;

  h1 {
    font-family: 'Baloo 2', cursive;
    font-size: 2rem;
  }

  @media (max-width: 1120px) {
    padding: 2rem 1.5rem;
  }
`

export const HeaderTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const HomeContent = styled.section`
  margin-top: 3.375rem;
  margin-bottom: 2.5rem;
  display: grid;
  grid-template-columns: repeat(4, 16rem);
  gap: 2rem;

  @media (min-width: 640px) and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`
