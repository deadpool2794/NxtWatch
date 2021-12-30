import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import {
  SavedVideosListItem,
  SavedVideosThumbnailImage,
  SavedVideosTitle,
  SavedVideosChannelName,
} from './styledComponents'
import {ChannelNameAndOtherDetails} from '../VideoItem/styledComponents'

const SavedVideoItem = props => {
  const {details} = props
  const {thumbnailUrl, title, channel, publishedAt, viewCount, id} = details
  const {name} = channel
  let time = formatDistanceToNow(new Date(publishedAt))
  time += ' ago'
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <SavedVideosListItem>
            <Link to={`videos/${id}`} className="link-nav">
              <SavedVideosThumbnailImage src={thumbnailUrl} alt="" />
              <div>
                <SavedVideosTitle isDark={isDark}>{title}</SavedVideosTitle>
                <SavedVideosChannelName isDark={isDark}>
                  {name}
                </SavedVideosChannelName>
                <ChannelNameAndOtherDetails isDark={isDark}>
                  {viewCount} views • {time}
                </ChannelNameAndOtherDetails>
              </div>
            </Link>
          </SavedVideosListItem>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default SavedVideoItem
