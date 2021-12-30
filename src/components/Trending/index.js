import {Component} from 'react'
import {AiFillFire} from 'react-icons/ai'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import VideoItem from '../VideoItem'
import SideNavBar from '../SideNavBar'
import {
  NoItemsContainer,
  NoItemsImage,
  NoItemsHeading,
  NoItemsDescription,
  NoItemsButton,
} from '../Home/styledComponents'
import {
  TrendingPageContainer,
  TrendingIconContainer,
  TrendingHeading,
  TrendingSectionContainer,
  LoaderContainer,
  TrendingVideosListContainer,
  TrendingSectionMD,
} from './styledComponents'

const pageStatusOptions = {
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Trending extends Component {
  state = {
    status: pageStatusOptions.loading,
    videosList: [],
  }

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    const trendingApiUrl = 'https://apis.ccbp.in/videos/trending'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const apiResponse = await fetch(trendingApiUrl, options)
    if (apiResponse.ok) {
      const parsedList = await apiResponse.json()
      this.success(parsedList.videos)
    } else {
      this.setState({status: pageStatusOptions.failure})
    }
  }

  success = videos => {
    const formattedVideosList = videos.map(each => ({
      channel: {
        name: each.channel.name,
        profileImageUrl: each.channel.profile_image_url,
      },
      id: each.id,
      publishedAt: each.published_at,
      thumbnailUrl: each.thumbnail_url,
      title: each.title,
      viewCount: each.view_count,
    }))
    this.setState({
      videosList: formattedVideosList,
      status: pageStatusOptions.success,
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

  successView = () => {
    const {videosList} = this.state
    return (
      <TrendingVideosListContainer>
        {videosList.map(each => (
          <VideoItem details={each} key={each.id} />
        ))}
      </TrendingVideosListContainer>
    )
  }

  renderFailureView = isDark => (
    <NoItemsContainer>
      <NoItemsImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
        alt=""
      />
      <NoItemsHeading isDark={isDark}>
        Oops! Something Went Wrong
      </NoItemsHeading>
      <NoItemsDescription isDark={isDark}>
        We are having some trouble to complete your request
      </NoItemsDescription>
      <NoItemsButton> Retry</NoItemsButton>
    </NoItemsContainer>
  )

  renderRequired = isDark => {
    const {status} = this.state
    switch (status) {
      case pageStatusOptions.loading:
        return this.renderLoader(isDark)
      case pageStatusOptions.success:
        return this.successView()

      case pageStatusOptions.failure:
        return this.renderFailureView(isDark)
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <>
              <Header />
              <TrendingPageContainer isDark={isDark}>
                <TrendingSectionMD>
                  <SideNavBar selected="TRENDING" />

                  <div>
                    <TrendingSectionContainer>
                      <TrendingIconContainer>
                        <AiFillFire
                          className={
                            isDark ? 'trending-icon dark' : 'trending-icon'
                          }
                        />
                      </TrendingIconContainer>
                      <TrendingHeading isDark={isDark}>
                        Trending
                      </TrendingHeading>
                    </TrendingSectionContainer>
                    {this.renderRequired(isDark)}
                  </div>
                </TrendingSectionMD>
              </TrendingPageContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Trending
