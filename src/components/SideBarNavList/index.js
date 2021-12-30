import {Component} from 'react'
import {Link} from 'react-router-dom'
import {AiFillHome, AiFillFire} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'
import {SiYoutubegaming} from 'react-icons/si'
import ThemeContext from '../../context/ThemeContext'
import {NavLinksList, NavItem, NavLinkName} from './styledComponents'
import './index.css'

const navLinksList = [
  {
    id: 'HOME',
    displayText: 'Home',
    icon: AiFillHome,
  },
  {
    id: 'TRENDING',
    displayText: 'Trending',
    icon: AiFillFire,
  },
  {
    id: 'GAMING',
    displayText: 'Gaming',
    icon: SiYoutubegaming,
  },
  {
    id: 'SAVEDVIDEOS',
    displayText: 'Saved Videos',
    icon: BiListPlus,
  },
]

class SideBarNavList extends Component {
  render() {
    const {selected} = this.props
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <NavLinksList>
              <NavItem
                selected={selected === navLinksList[0].id}
                isDark={isDark}
              >
                <Link to="/" className="link-nav">
                  <AiFillHome
                    className={isDark ? 'nav-icon dark' : 'nav-icon'}
                  />
                  <NavLinkName
                    selected={selected === navLinksList[0].id}
                    isDark={isDark}
                  >
                    {navLinksList[0].displayText}
                  </NavLinkName>
                </Link>
              </NavItem>
              <NavItem
                selected={selected === navLinksList[1].id}
                isDark={isDark}
              >
                <Link to="/trending" className="link-nav">
                  <AiFillFire
                    className={isDark ? 'nav-icon dark' : 'nav-icon'}
                  />
                  <NavLinkName
                    selected={selected === navLinksList[1].id}
                    isDark={isDark}
                  >
                    {navLinksList[1].displayText}
                  </NavLinkName>
                </Link>
              </NavItem>
              <NavItem
                selected={selected === navLinksList[2].id}
                isDark={isDark}
              >
                <Link to="/gaming" className="link-nav">
                  <SiYoutubegaming
                    className={isDark ? 'nav-icon dark' : 'nav-icon'}
                  />
                  <NavLinkName
                    selected={selected === navLinksList[2].id}
                    isDark={isDark}
                  >
                    {navLinksList[2].displayText}
                  </NavLinkName>
                </Link>
              </NavItem>
              <NavItem
                selected={selected === navLinksList[3].id}
                isDark={isDark}
              >
                <Link to="/saved-videos" className="link-nav">
                  <BiListPlus
                    className={isDark ? 'nav-icon dark' : 'nav-icon'}
                  />
                  <NavLinkName
                    selected={selected === navLinksList[3].id}
                    isDark={isDark}
                  >
                    {navLinksList[3].displayText}
                  </NavLinkName>
                </Link>
              </NavItem>
            </NavLinksList>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default SideBarNavList
