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

export const HomeContent = styled.section`
  margin-top: 3.375rem;
  margin-bottom: 2.5rem;
  display: grid;
  grid-template-columns: repeat(4, 16rem);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
