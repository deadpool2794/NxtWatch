import styled from 'styled-components'

export const NavLinksList = styled.ul`
  list-style-type: none;
  padding-left: 0;
`

export const NavItem = styled.li`
  display: flex;
  padding-left: 12px;
  background-color: ${props => {
    const {selected, isDark} = props
    if (selected && isDark) {
      return '#1e293b'
    }
    if (selected && !isDark) {
      return '#e2e8f0'
    }
    return 'transparent'
  }};
`

export const NavLinkName = styled.p`
  font-family: 'Roboto';
  font-size: 14px;

  color: ${props => (props.isDark ? '#f9f9f9' : '#181818')};
  font-weight: ${props => {
    const {selected} = props
    if (selected) {
      return 'bold'
    }
    return '400'
  }};
`
