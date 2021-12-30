import {AiFillFire} from 'react-icons/ai'
import ThemeContext from '../../context/ThemeContext'
import Header from '../Header'
import SideNavBar from '../SideNavBar'
import SavedVideoItem from '../SavedVideoItem'
import {
  SavedVideosContainer,
  SavedVideoList,
  NoVideos,
  NoVideosHeading,
  NoVideosDescription,
  SavedVideosListContainer,
  SavedVideosIconContainer,
  SavedVideosHeading,
  SavedVideosSectionContainer,
} from './styledComponents'

const SavedVideos = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDark, savedList} = value
      return (
        <>
          <Header />
          <SavedVideosContainer>
            <SideNavBar selected="SAVEDVIDEOS" />
            <SavedVideoList isDark={isDark}>
              {savedList.length === 0 ? (
                <>
                  <NoVideos
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png "
                    alt="no videos"
                  />
                  <NoVideosHeading isDark={isDark}>
                    No saved videos found
                  </NoVideosHeading>
                  <NoVideosDescription isDark={isDark}>
                    You can save your videos while watching them
                  </NoVideosDescription>
                </>
              ) : (
                <div>
                  <SavedVideosSectionContainer>
                    <SavedVideosIconContainer>
                      <AiFillFire
                        className={
                          isDark ? 'trending-icon dark' : 'trending-icon'
                        }
                      />
                    </SavedVideosIconContainer>
                    <SavedVideosHeading isDark={isDark}>
                      Trending
                    </SavedVideosHeading>
                  </SavedVideosSectionContainer>
                  <SavedVideosListContainer>
                    {savedList.map(each => (
                      <SavedVideoItem details={each} key={each.id} />
                    ))}
                  </SavedVideosListContainer>
                </div>
              )}
            </SavedVideoList>
          </SavedVideosContainer>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default SavedVideos
