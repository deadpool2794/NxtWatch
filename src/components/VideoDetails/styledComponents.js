import styled from 'styled-components'

export const LoaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 24px;
  color: ${props => (props.isDark ? '#f9f9f9' : '#181818')};
`

export const VideoDetailsPageContainer = styled.div`
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
  min-height: 100vh;
  display: flex;
`

export const VideoDetailsContainer = styled.div`
  background-color: transparent;
  flex-grow: 1;
`

export const VideoThumbnail = styled.img`
  width: 100%;
`

export const VideoTitle = styled.p`
  color: ${props => (props.isDark ? '#ffffff' : '#181818')};
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 500;
  margin: 16px;
  margin-bottom: 8px;
`
export const VideoDescriptionContainer = styled.div`
  display: flex;
  padding: 8px;
  padding-left: 16px;
  border-style: solid;
  border-width: 0;
  border-bottom-width: 1px;
  border-color: #475569;
  justify-content: space-between;
  padding-bottom: 16px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`

export const ViewsAndTimeContainer = styled.div`
  display: flex;
`

export const ViewsAndTime = styled.p`
  color: ${props => (props.isDark ? '#e2e8f0' : '#1e293b')};
  margin-top: 6px;
  margin-bottom: 20px;
  font-size: 16px;
  @media screen and (min-width: 768px) {
    margin-top: auto;
    margin-bottom: auto;
  }
`

export const LikeDisLikeAndSave = styled.div`
  display: flex;
`

export const Button = styled.button`
  color: ${props => {
    if (props.isSaved) {
      return '#2563eb'
    }
    if (props.isClicked) {
      return '#2563eb'
    }

    return '#64748b'
  }};
  background-color: transparent;
  border-width: 0px;
  margin-right: 16px;
  padding-left: 0;
  font-size: 16px;
`

export const VideoDescriptionBottomSection = styled.div`
  margin-top: 24px;
  display: flex;
`
export const BottomSectionProfileImage = styled.img`
  height: 40px;
  width: 40px;
  margin-right: 24px;
`

export const BottomSectionChannelName = styled.p`
  color: ${props => (props.isDark ? '#e2e8f0' : '#1e293b')};
  font-size: ${props => props.fontSize}px;
  margin: 6px;
`
