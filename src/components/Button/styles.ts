import styled from 'styled-components'

export const ButtonContainer = styled.button`
  cursor: pointer;
  padding: 0.5rem 1rem;
  background-color: greenyellow;
  border-radius: 0.5rem;

  &:disabled {
    background-color: red;
  }
`
