import {Component} from 'react'
import ReactPlayer from 'react-player'
import Loader from 'react-loader-spinner'
import {formatDistanceToNow} from 'date-fns'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'
import Cookies from 'js-cookie'
import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import SideNavBar from '../SideNavBar'
import {
  VideoDetailsPageContainer,
  LoaderContainer,
  VideoDetailsContainer,
  VideoTitle,
  VideoDescriptionContainer,
  ViewsAndTimeContainer,
  ViewsAndTime,
  LikeDisLikeAndSave,
  Button,
  VideoDescriptionBottomSection,
  BottomSectionProfileImage,
  BottomSectionChannelName,
} from './styledComponents'
import './index.css'

const pageStatusOptions = {
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoDetails extends Component {
  state = {
    status: pageStatusOptions.loading,
    videoDetails: {},
    isLiked: false,
    isDisliked: false,
  }

  componentDidMount() {
    this.getVideDetails()
  }

  getVideDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const videoDetailsUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const apiResponse = await fetch(videoDetailsUrl, options)
    if (apiResponse.ok) {
      const parsedApiResponse = await apiResponse.json()
      this.success(parsedApiResponse.video_details)
    }
  }

  success = videoDetails => {
    const formattedVideoDetails = {
      id: videoDetails.id,
      channel: {
        name: videoDetails.channel.name,
        profileImageUrl: videoDetails.channel.profile_image_url,
        subscriberCount: videoDetails.channel.subscriber_count,
      },
      description: videoDetails.description,
      publishedAt: videoDetails.published_at,
      title: videoDetails.title,
      thumbnailUrl: videoDetails.thumbnail_url,
      videoUrl: videoDetails.video_url,
      viewCount: videoDetails.view_count,
    }
    this.setState({
      status: pageStatusOptions.success,
      videoDetails: formattedVideoDetails,
    })
  }

  renderLoader = isDark => (
    <LoaderContainer isDark={isDark} data-testid="loader">
      <Loader
        type="ThreeDots"
        color={isDark ? '#ffffff' : 'black'}
        height="50"
        width="50"
      />
    </LoaderContainer>
  )

  onClickLike = () => {
    const {isLiked} = this.state
    if (isLiked) {
      this.setState({isLiked: false, isDisliked: false})
    } else {
      this.setState({isLiked: true, isDisliked: false})
    }
  }

  onClickDislike = () => {
    const {isDisliked} = this.state

    if (isDisliked) {
      this.setState({isLiked: false, isDisliked: false})
    } else {
      this.setState({isLiked: false, isDisliked: true})
    }
  }

  successView = (isDark, savedList, addToSavedList, removeFromSavedList) => {
    const {videoDetails} = this.state
    const {
      videoUrl,
      title,
      viewCount,
      publishedAt,
      id,
      channel,
      description,
    } = videoDetails
    const {profileImageUrl, name, subscriberCount} = channel
    let time = formatDistanceToNow(new Date(publishedAt))
    time += ' ago'
    const isSaved = savedList.find(each => each.id === id)

    const saveButtonText = isSaved ? 'Saved' : 'Save'

    const onClickToggle = () => {
      if (isSaved) {
        removeFromSavedList(id)
      } else {
        addToSavedList(videoDetails)
      }
    }
    const {isLiked, isDisliked} = this.state

    return (
      <VideoDetailsContainer>
        <ReactPlayer url={videoUrl} controls className="video-player" />
        <VideoTitle isDark={isDark}>{title}</VideoTitle>
        <VideoDescriptionContainer>
          <ViewsAndTimeContainer>
            <ViewsAndTime isDark={isDark}>
              {viewCount} views • {time}
            </ViewsAndTime>
          </ViewsAndTimeContainer>
          <LikeDisLikeAndSave>
            <Button
              type="button"
              isDark={isDark}
              isSaved={isLiked}
              onClick={this.onClickLike}
            >
              <AiOutlineLike /> Like
            </Button>
            <Button
              type="button"
              isDark={isDark}
              isSaved={isDisliked}
              onClick={this.onClickDislike}
            >
              <AiOutlineDislike /> Dislike
            </Button>
            <Button
              type="button"
              isDark={isDark}
              isSaved={isSaved}
              onClick={onClickToggle}
            >
              <BiListPlus /> {saveButtonText}
            </Button>
          </LikeDisLikeAndSave>
        </VideoDescriptionContainer>
        <VideoDescriptionBottomSection>
          <BottomSectionProfileImage src={profileImageUrl} alt="channel logo" />
          <div>
            <BottomSectionChannelName isDark={isDark} fontSize="20">
              {name}
            </BottomSectionChannelName>
            <BottomSectionChannelName fontSize="16" isDark={isDark}>
              {subscriberCount} subscribers
            </BottomSectionChannelName>
            <BottomSectionChannelName fontSize="14" isDark={isDark}>
              {description}
            </BottomSectionChannelName>
          </div>
        </VideoDescriptionBottomSection>
      </VideoDetailsContainer>
    )
  }

  renderRequired = (isDark, savedList, addToSavedList, removeFromSavedList) => {
    const {status} = this.state
    switch (status) {
      case pageStatusOptions.loading:
        return this.renderLoader(isDark)
      case pageStatusOptions.success:
        return this.successView(
          isDark,
          savedList,
          addToSavedList,
          removeFromSavedList,
        )
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark, savedList, addToSavedList, removeFromSavedList} = value
          return (
            <>
              <Header />
              <VideoDetailsPageContainer isDark={isDark}>
                <SideNavBar />
                {this.renderRequired(
                  isDark,
                  savedList,
                  addToSavedList,
                  removeFromSavedList,
                )}
              </VideoDetailsPageContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default VideoDetails
