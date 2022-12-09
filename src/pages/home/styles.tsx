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
  display: flex;
`
