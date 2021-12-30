import {Component} from 'react'
import {SiYoutubegaming} from 'react-icons/si'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import SideNavBar from '../SideNavBar'
import GameItem from '../GameItem'
import {
  NoItemsContainer,
  NoItemsImage,
  NoItemsHeading,
  NoItemsDescription,
  NoItemsButton,
} from '../Home/styledComponents'
import {
  GamingSectionMD,
  GamingPageContainer,
  GamingSectionContainer,
  GamingIconContainer,
  GamingHeading,
  LoaderContainer,
  GamesList,
} from './styledComponents'

const pageStatusOptions = {
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Gaming extends Component {
  state = {
    status: pageStatusOptions.loading,
    videosList: [],
  }

  componentDidMount() {
    this.getGamingVideosList()
  }

  getGamingVideosList = async () => {
    const gamingApiUrl = 'https://apis.ccbp.in/videos/gaming'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const apiResponse = await fetch(gamingApiUrl, options)
    if (apiResponse.ok) {
      const parsedApiResponse = await apiResponse.json()
      this.success(parsedApiResponse.videos)
    } else {
      this.setState({status: pageStatusOptions.failure})
    }
  }

  success = videos => {
    const formattedVideos = videos.map(each => ({
      id: each.id,
      thumbnailUrl: each.thumbnail_url,
      title: each.title,
      viewCount: each.view_count,
    }))
    this.setState({
      videosList: formattedVideos,
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
      <GamesList>
        {videosList.map(each => (
          <GameItem details={each} key={each.key} />
        ))}
      </GamesList>
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
              <GamingPageContainer isDark={isDark}>
                <GamingSectionMD>
                  <SideNavBar selected="GAMING" />

                  <div>
                    <GamingSectionContainer>
                      <GamingIconContainer>
                        <SiYoutubegaming
                          className={
                            isDark ? 'trending-icon dark' : 'trending-icon'
                          }
                        />
                      </GamingIconContainer>
                      <GamingHeading isDark={isDark}>Gaming</GamingHeading>
                    </GamingSectionContainer>
                    {this.renderRequired(isDark)}
                  </div>
                </GamingSectionMD>
              </GamingPageContainer>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Gaming
