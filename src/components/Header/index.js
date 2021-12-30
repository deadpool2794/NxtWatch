import Popup from 'reactjs-popup'
import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {FaMoon} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut, FiSun} from 'react-icons/fi'
import ThemeContext from '../../context/ThemeContext'
import {
  HeaderNavContainer,
  WebsiteLogo,
  HeaderOptions,
  HeaderButton,
  LogoutPopup,
  LogoutConfirmation,
  ButtonContainer,
  LogoutButton,
  CancelButton,
  Profile,
  HeaderLogoutButton,
} from './styledComponents'
import './index.css'

const Header = props => (
  <ThemeContext.Consumer>
    {value => {
      const {isDark, toggleTheme} = value
      const onClickThemeButton = () => {
        toggleTheme()
      }

      const onClickLogout = () => {
        Cookies.remove('jwt_token')
        const {history} = props
        history.replace('/login')
      }

      return (
        <HeaderNavContainer isDark={isDark}>
          <Link to="/" className="home-link">
            <WebsiteLogo
              src={
                isDark
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
              }
              alt="website logo"
            />
          </Link>

          <HeaderOptions isDark={isDark}>
            <HeaderButton
              type="button"
              onClick={onClickThemeButton}
              data-testid="theme"
              isDark={isDark}
            >
              {isDark ? <FiSun /> : <FaMoon />}
            </HeaderButton>
            <GiHamburgerMenu className="menu-item" />
            <Popup
              modal
              trigger={
                <HeaderButton isDark={isDark}>
                  <FiLogOut className="menu-item" />
                </HeaderButton>
              }
            >
              {close => (
                <LogoutPopup isDark={isDark}>
                  <LogoutConfirmation isDark={isDark}>
                    Are you sure, you want to logout?
                    <ButtonContainer>
                      <CancelButton type="button" onClick={close}>
                        Cancel
                      </CancelButton>
                      <LogoutButton type="button" onClick={onClickLogout}>
                        Confirm
                      </LogoutButton>
                    </ButtonContainer>
                  </LogoutConfirmation>
                </LogoutPopup>
              )}
            </Popup>
            <Profile
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />
            <Popup
              modal
              trigger={
                <HeaderLogoutButton isDark={isDark} type="button">
                  Logout
                </HeaderLogoutButton>
              }
            >
              {close => (
                <LogoutPopup isDark={isDark}>
                  <LogoutConfirmation isDark={isDark}>
                    Are you sure, you want to logout
                    <ButtonContainer>
                      <CancelButton type="button" onClick={close}>
                        Cancel
                      </CancelButton>
                      <LogoutButton type="button" onClick={onClickLogout}>
                        Confirm
                      </LogoutButton>
                    </ButtonContainer>
                  </LogoutConfirmation>
                </LogoutPopup>
              )}
            </Popup>
          </HeaderOptions>
        </HeaderNavContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default withRouter(Header)
