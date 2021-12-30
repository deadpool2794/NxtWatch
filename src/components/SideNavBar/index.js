import ThemeContext from '../../context/ThemeContext'
import SideBarNavList from '../SideBarNavList'
import {
  SideNavContainer,
  NavFooterHeading,
  SideNavBarFooter,
  LogoImage,
} from './styledComponents'

const SideNavBar = props => (
  <ThemeContext.Consumer>
    {value => {
      const {isDark} = value
      const {selected} = props
      return (
        <SideNavContainer isDark={isDark}>
          <SideBarNavList selected={selected} />
          <div>
            <NavFooterHeading isDark={isDark}>CONTACT US</NavFooterHeading>
            <LogoImage
              isDark={isDark}
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png "
              alt="facebook logo"
            />
            <LogoImage
              isDark={isDark}
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png "
              alt="twitter logo"
            />
            <LogoImage
              isDark={isDark}
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png "
              alt="linked in logo"
            />
            <SideNavBarFooter isDark={isDark}>
              Enjoy! Now to see your channels and recommendations!
            </SideNavBarFooter>
          </div>
        </SideNavContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default SideNavBar
