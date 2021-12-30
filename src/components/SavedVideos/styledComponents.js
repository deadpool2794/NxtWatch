import styled from 'styled-components'

export const SavedVideosContainer = styled.div`
  display: flex;
`

export const SavedVideoList = styled.div`
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};

  padding-left: 0;
  height: 94vh;
  width: 100%;
  margin: 0;
`
export const NoVideos = styled.img`
  width: 100%;
`

export const NoVideosHeading = styled.h1`
  color: ${props => (props.isDark ? '#ffffff' : '#181818')};
  margin: 12px;
  font-family: 'Roboto';
  text-align: center;
`

export const NoVideosDescription = styled.p`
  color: ${props => (props.isDark ? '#e2e8f0' : '#1e293b')};
  margin: 12px;
  font-family: 'Roboto';
  text-align: center;
`

export const SavedVideosListContainer = styled.ul`
  padding: 0;
  list-style-type: none;
`

export const SavedVideosIconContainer = styled.div`
  height: 70px;
  width: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
`

export const SavedVideosHeading = styled.h1`
  font-family: 'roboto';
  color: ${props => (props.isDark ? '#f9f9f9' : '#181818')};
`

export const SavedVideosSectionContainer = styled.div`
  display: flex;
`
