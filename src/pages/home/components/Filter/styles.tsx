import styled from 'styled-components'

export const FilterContent = styled.select`
  padding: 0.5rem;
  width: 10rem;
  background: ${(props) => props.theme.color['base-button']};
  color: ${(props) => props.theme.color['base-title']};
  border: 0;
  border-radius: 8px;
`
export const OptionsFilter = styled.option`
  color: ${(props) => props.theme.color['base-text']};
  font-size: 1rem;
`
