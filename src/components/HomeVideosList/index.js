import VideoItem from '../VideoItem'
import {HomeVideosListContainer} from './styledComponents'

const HomeVideosList = props => {
  const {videosList} = props
  return (
    <HomeVideosListContainer>
      {videosList.map(each => (
        <VideoItem details={each} key={each.id} />
      ))}
    </HomeVideosListContainer>
  )
}

export default HomeVideosList
