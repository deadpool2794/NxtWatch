import styled from 'styled-components'

export const GamingSectionMD = styled.div`
  display: flex;
`

export const GamingList = styled.ul`
  list-style-type: none;
  padding-left: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 80vh;
  overflow-y: scroll;
`
export const GamingPageContainer = styled.div`
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
  min-height: 100vh;
  display: flex;
`

export const GamingIconContainer = styled.div`
  height: 70px;
  width: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
`

export const GamingHeading = styled.h1`
  font-family: 'roboto';
  color: ${props => (props.isDark ? '#f9f9f9' : '#181818')};
`
export const GamingSectionContainer = styled.div`
  display: flex;
`
export const LoaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 24px;
  color: ${props => (props.isDark ? '#f9f9f9' : '#181818')};
`
export const GamesList = styled.ul`
  padding-left: 0px;
  list-style-type: none;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`
