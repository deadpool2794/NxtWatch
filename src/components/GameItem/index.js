import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import {
  GameListItem,
  GameThumbnail,
  GamingHeading,
  GameWatchingCount,
} from './styledComponents'

const GameItem = props => {
  const {details} = props
  const {thumbnailUrl, id, title, viewCount} = details
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <GameListItem>
            <Link to={`videos/${id}`} className="video-link">
              <GameThumbnail src={thumbnailUrl} alt="video thumbnail" />
              <GamingHeading isDark={isDark}>{title}</GamingHeading>
              <GameWatchingCount isDark={isDark}>
                {viewCount} Watching Worldwide
              </GameWatchingCount>
            </Link>
          </GameListItem>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default GameItem
