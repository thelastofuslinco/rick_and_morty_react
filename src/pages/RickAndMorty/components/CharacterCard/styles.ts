import styled from 'styled-components'

export const CharacterCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  border-radius: 0.5rem;
  width: 200px;
  background-color: rgb(60, 62, 68);
  color: white;
  font-size: large;
  font-weight: bold;

  > img {
    width: 100%;
    height: 100%;
    border-radius: 0 0 0.5rem 0.5rem;
  }
`
