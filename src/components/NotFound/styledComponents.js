import styled from 'styled-components'

export const NotFoundSection = styled.div`
  display: flex;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
  min-height: 90vh;
`

export const NotFoundImage = styled.img`
  width: 60%;
`

export const NotFoundText = styled.h1`
  color: ${props => (props.isDark ? '#f9f9f9' : '#181818')};
  font-family: 'Roboto';
  text-align: center;
`
export const NotFoundDesc = styled.p`
  color: ${props => (props.isDark ? '#e2e8f0' : '#1e293b')};
  font-family: 'Roboto';
  text-align: center;
`
