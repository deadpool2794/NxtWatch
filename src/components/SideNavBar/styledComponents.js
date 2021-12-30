import styled from 'styled-components'

export const SideNavContainer = styled.div`
  width: 30%;
  height: 94vh;
  flex-shrink: 0;
  max-width: 200px;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const NavFooterHeading = styled.p`
  color: ${props => (props.isDark ? '#f9f9f9' : '#181818')};
  padding-left: 12px;
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 600;
`

export const SideNavBarFooter = styled.p`
  color: ${props => (props.isDark ? '#f9f9f9' : '#181818')};
  font-weight: 500;
`

export const LogoImage = styled.img`
  height: 24px;
  width: 24px;
  margin: 12px;
  margin-right: 4px;
  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
`
