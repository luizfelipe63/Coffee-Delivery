import styled from 'styled-components'

interface bacgroundProps {
  background: string
}

export const HeaderContainer = styled.div<bacgroundProps>`
  width: 100%;
  padding: 5.625rem 0;
  gap: 3.5rem;

  background: url(${(props) => props.theme.background.background}) no-repeat
    center;

  background-size: 100%;

  @media (max-width: 1120px) {
    padding: 2.5rem 1.5rem;
    margin-bottom: 1.5rem;
    background: url(${(props) => props.theme.background.background}) repeat-y
      top;
  }
`

export const Content = styled.div`
  width: ${({ theme }) => theme.layout.width};
  margin: 0 auto;
  display: flex;
  gap: 3.5rem;

  @media (max-width: 1120px) {
    img {
      display: none;
    }
  }
`

export const Title = styled.div`
  max-width: 36.75rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    color: ${(props) => props.theme.color['base-title']};
    font-family: 'Baloo 2', cursive;
    font-size: 3rem;
    line-height: 130%;
  }
  h2 {
    font-size: 1.25rem;
    font-weight: 400;
    color: ${(props) => props.theme.color['base-subtitle']};
    line-height: 130%;
  }
`

export const Items = styled.div`
  margin-top: 4.125rem;
  display: flex;

  gap: 1.25rem;

  &.Shopping {
    background: ${(props) => props.theme.color['yellow-dark']};
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`
export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const Collum = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`
export const IconBase = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  color: ${(props) => props.theme.color.White};
  border-radius: 1000px;
`
export const IconShopping = styled(IconBase)`
  background: ${(props) => props.theme.color['yellow-dark']};
`
export const IconClock = styled(IconBase)`
  background: ${(props) => props.theme.color.yellow};
`
export const IconBox = styled(IconBase)`
  background: ${(props) => props.theme.color['box-icon']};
`
export const IconCoffe = styled(IconBase)`
  background: ${(props) => props.theme.color.purple};
`
