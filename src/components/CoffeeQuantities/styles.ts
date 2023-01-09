import styled from 'styled-components'

export const CountDown = styled.div`
  background: ${props => props.theme.color['base-button']};
  padding: 0.5rem;
  margin-right: 0.5rem;
  border-radius: 6px;
  width: 4.5rem;
  border: 0;

  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.25rem;

  svg {
    color: ${props => props.theme.color['card-button']};
  }
`

export const QuantityButton = styled.button`
  background: 0;
  border: 0;
  line-height: 0;
  cursor: pointer;
  color: ${props => props.theme.color.purple};

  &:hover {
    color: ${props => props.theme.color['purple-dark']};
  }
  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`
