import {Component} from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import {BsSearch} from 'react-icons/bs'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import HomeVideosList from '../HomeVideosList'
import SideNavBar from '../SideNavBar'
import {
  BannerSection,
  BannerLogoAndCloseButtonContainer,
  BannerLogo,
  CloseButton,
  BannerDescription,
  GetPremiumButton,
  HomeSection,
  SearchBarContainer,
  SearchBar,
  SearchButton,
  LoaderContainer,
  NoItemsImage,
  NoItemsContainer,
  NoItemsHeading,
  NoItemsDescription,
  NoItemsButton,
  HomeSectionMD,
  Container,
} from './styledComponents'

const statusOptions = {
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
  noItems: 'NOITEMS',
}

class Home extends Component {
  state = {
    showBanner: true,
    searchText: '',
    status: statusOptions.loading,
    videosList: [],
  }

  componentDidMount() {
    this.getVideosList()
  }

  getVideosList = async () => {
    const {searchText} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const getVideosApiUrl = `https://apis.ccbp.in/videos/all?search=${searchText}`
    const apiResponse = await fetch(getVideosApiUrl, options)
    const parsedResponse = await apiResponse.json()
    if (apiResponse.ok) {
      this.success(parsedResponse.videos)
    } else {
      this.setState({status: statusOptions.failure})
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
    if (formattedVideosList.length > 1) {
      this.setState({
        videosList: formattedVideosList,
        status: statusOptions.success,
      })
    } else {
      this.setState({status: statusOptions.noItems})
    }
  }

  closeBanner = () => {
    this.setState({showBanner: false})
  }

  onChangeSearchInput = event => {
    this.setState({searchText: event.target.value})
  }

  renderLoader = isDark => (
    <LoaderContainer data-testid="loader">
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

    return <HomeVideosList videosList={videosList} />
  }

  noItemsView = isDark => (
    <NoItemsContainer>
      <NoItemsImage
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png "
        alt="no items"
      />
      <NoItemsHeading isDark={isDark}>No Search results found</NoItemsHeading>
      <NoItemsDescription>
        Try different keywords or remove search filter
      </NoItemsDescription>
      <NoItemsButton> Retry</NoItemsButton>
    </NoItemsContainer>
  )

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
      case statusOptions.loading:
        return this.renderLoader(isDark)
      case statusOptions.success:
        return this.successView()
      case statusOptions.noItems:
        return this.noItemsView(isDark)
      case statusOptions.failure:
        return this.renderFailureView(isDark)
      default:
        return null
    }
  }

  onClickSearchButton = () => {
    this.setState({status: statusOptions.loading}, this.getVideosList)
  }

  render() {
    const {showBanner, searchText} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <>
              <Header />
              <HomeSectionMD>
                <SideNavBar selected="HOME" />
                <Container>
                  {showBanner && (
                    <BannerSection data-testid="banner">
                      <BannerLogoAndCloseButtonContainer>
                        <BannerLogo
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                          alt="nxt watch logo"
                        />
                        <CloseButton
                          onClick={this.closeBanner}
                          data-testid="close"
                        >
                          <AiOutlineClose />
                        </CloseButton>
                      </BannerLogoAndCloseButtonContainer>
                      <BannerDescription>
                        Buy Nxt Watch Premium prepaid plans with UPI
                      </BannerDescription>
                      <GetPremiumButton>GET IT NOW</GetPremiumButton>
                    </BannerSection>
                  )}
                  <HomeSection isDark={isDark} data-testid="home">
                    <SearchBarContainer isDark={isDark}>
                      <SearchBar
                        type="search"
                        isDark={isDark}
                        onChange={this.onChangeSearchInput}
                      />
                      <SearchButton
                        type="button"
                        placeholder="Search"
                        value={searchText}
                        isDark={isDark}
                        data-testid="searchButton"
                        onClick={this.onClickSearchButton}
                      >
                        <BsSearch />
                      </SearchButton>
                    </SearchBarContainer>
                    {this.renderRequired(isDark)}
                  </HomeSection>
                </Container>
              </HomeSectionMD>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
