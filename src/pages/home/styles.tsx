import styled from "styled-components";

export const HomeContainer = styled.main`
  width: ${({theme}) => theme.layout.width};
  margin: 0 auto;


  h1{
    font-family: 'Baloo 2', cursive;
    font-size: 2rem;
  }
`

export const HomeContent = styled.section`
  margin-top: 3.375rem;
  margin-bottom: 2.5rem;
  display: grid;
  grid-template-columns: repeat(4,1fr);
  gap: 2rem;
`
