import ThemeContext from '../../context/ThemeContext'

import Header from '../Header'
import SideNavBar from '../SideNavBar'
import {
  NotFoundSection,
  NotFoundImage,
  NotFoundText,
  NotFoundDesc,
} from './styledComponents'

const NotFound = () => {
  console.log('hii')
  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDark} = value
        return (
          <>
            <Header />
            <NotFoundSection isDark={isDark}>
              <SideNavBar />
              <div>
                <NotFoundImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
                  alt=""
                />
                <NotFoundText isDark={isDark}>Page Not Found</NotFoundText>
                <NotFoundDesc isDark={isDark}>
                  We are sorry, the page you requested could not be found.
                </NotFoundDesc>
              </div>
            </NotFoundSection>
          </>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default NotFound
