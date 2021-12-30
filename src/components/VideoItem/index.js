import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import ThemeContext from '../../context/ThemeContext'

import {
  VideoListItem,
  VideoThumbnail,
  VideoDescriptionContainer,
  ProfileImage,
  VideoTitle,
  ChannelNameAndOtherDetails,
} from './styledComponents'
import './index.css'

const VideoItem = props => {
  const {details} = props
  const {thumbnailUrl, id, channel, title, viewCount, publishedAt} = details
  const {profileImageUrl, name} = channel
  let time = formatDistanceToNow(new Date(publishedAt))
  time += ' ago'

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <VideoListItem>
            <Link to={`videos/${id}`} className="video-link">
              <VideoThumbnail src={thumbnailUrl} alt="video thumbnail" />
              <VideoDescriptionContainer>
                <ProfileImage src={profileImageUrl} alt="channel logo" />
                <div>
                  <VideoTitle isDark={isDark}>{title}</VideoTitle>
                  <ChannelNameAndOtherDetails isDark={isDark}>
                    {name} • {viewCount} views • {time}
                  </ChannelNameAndOtherDetails>
                </div>
              </VideoDescriptionContainer>
            </Link>
          </VideoListItem>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default VideoItem
