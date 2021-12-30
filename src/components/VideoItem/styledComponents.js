import styled from 'styled-components'

export const VideoListItem = styled.li`
  width: 100%;
  background-color: transparent;
  @media screen and (min-width: 576px) {
    width: 45%;
    margin: 8px;
  }
`
export const VideoThumbnail = styled.img`
  width: 100%;
`
export const VideoDescriptionContainer = styled.div`
  display: flex;
  padding-left: 16px;
`
export const ProfileImage = styled.img`
  margin-right: 20px;
  width: 40px;
  height: 40px;
  margin-top: 20px;
`
export const VideoTitle = styled.p`
  color: ${props => (props.isDark ? '#ffffff' : '#181818')};
  margin-bottom: 6px;
`
export const ChannelNameAndOtherDetails = styled.p`
  color: ${props => (props.isDark ? '#e2e8f0' : '#1e293b')};
  margin-top: 6px;
  margin-bottom: 20px;
`
