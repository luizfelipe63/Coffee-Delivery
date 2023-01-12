import styled from 'styled-components'

export const FilterContent = styled.div`
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
