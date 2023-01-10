import styled from 'styled-components'

export const InfoCoffe = styled.div`
  background: ${(props) => props.theme.color['base-card']};
  padding: 0.5rem 0.25rem;
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme.color['base-button']};

  display: flex;
  justify-content: space-between;
  gap: 1.25rem;
`

export const Details = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  color: ${(props) => props.theme.color['base-subtitle']};

  img {
    width: 4rem;
    height: 4rem;
  }
`

export const ActionsCar = styled.div`
  display: flex;
  margin-top: 0.5rem;
`

export const ButtonCartCard = styled.button`
  font-size: 0.75rem;
  padding: 0 0.5rem;
  border-radius: 6px;
  border: 0;
  color: ${(props) => props.theme.color.text};

  cursor: pointer;

  display: flex;
  align-items: center;
  gap: 0.25rem;

  svg {
    color: ${(props) => props.theme.color['icon-remove']};
  }
`
