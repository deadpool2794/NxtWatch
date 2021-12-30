import styled from 'styled-components'

export const SavedVideosListItem = styled.li`
  display: flex;
`

export const SavedVideosThumbnailImage = styled.img`
  height: 150px;
  width: 250px;
  margin-left: 8px;
  margin-right: 8px;
  margin-top: auto;
  margin-bottom: auto;
`

export const SavedVideosTitle = styled.h1`
  color: ${props => (props.isDark ? '#f9f9f9' : '#181818')};
  margin: 8px;
  font-size: 16px;
  font-weight: 600;
`

export const SavedVideosChannelName = styled.p`
  color: ${props => (props.isDark ? '#e2e8f0' : '#1e293b')};
  margin: 8px;
`
