import styled from 'styled-components'

export const TrendingPageContainer = styled.div`
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
  min-height: 100vh;
  display: flex;
`

export const TrendingIconContainer = styled.div`
  height: 70px;
  width: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
`

export const TrendingHeading = styled.h1`
  font-family: 'roboto';
  color: ${props => (props.isDark ? '#f9f9f9' : '#181818')};
`
export const TrendingSectionContainer = styled.div`
  display: flex;
`
export const LoaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 24px;
  color: ${props => (props.isDark ? '#f9f9f9' : '#181818')};
`

export const TrendingVideosListContainer = styled.ul`
  list-style-type: none;
  padding-left: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 80vh;
  overflow-y: scroll;
`
export const TrendingSectionMD = styled.div`
  display: flex;
`
