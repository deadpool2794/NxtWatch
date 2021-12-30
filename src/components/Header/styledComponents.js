import styled from 'styled-components'

export const HeaderNavContainer = styled.nav`
  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
  height: 8vh;
  padding-left: 16px;
  padding-right: 16px;
  display: flex;
  justify-content: space-between;
`

export const WebsiteLogo = styled.img`
  height: 24px;
`

export const HeaderOptions = styled.div`
  display: flex;
  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
  color: ${props => (props.isDark ? '#f9f9f9' : '#181818')};
`

export const HeaderButton = styled.button`
  border-width: 0;
  background-color: transparent;
  color: ${props => (props.isDark ? '#f9f9f9' : '#181818')};
  cursor: pointer;
  font-size: 32px;
`

export const LogoutPopup = styled.div`
  padding: 16px;
  border-radius: 8px;
  width: 300px;
  height: 200px;
  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const LogoutConfirmation = styled.p`
  color: ${props => (props.isDark ? '#f9f9f9' : '#181818')};
  font-size: 16px;
  text-align: center;
`

export const ButtonContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 32px;
  width: 200px;
  display: flex;
  justify-content: space-between;
`

export const LogoutButton = styled.button`
  color: white;
  background-color: #4f46e5;
  border-radius: 4px;
  border-width: 0px;
  font-family: 'Roboto';
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center
  cursor: pointer;
  

`

export const CancelButton = styled.button`
  color: #94a3b8;
  border-color: #94a3b8;
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  background-color: transparent;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center
  cursor: pointer;
`

export const Profile = styled.img`
  height: 60%;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 16px;
  margin-right: 16px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const HeaderLogoutButton = styled.button`
 color: white;
  color:${props => (props.isDark ? ' #ffffff' : '#4f46e5')};
  border-style: solid;
  border-color:  ${props => (props.isDark ? ' #ffffff' : '#4f46e5')};
  background-color: transparent;
  border-radius: 4px;
  border-width: 1px;
  font-family: 'Roboto';
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center
  cursor: pointer;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 16px;
  margin-right: 16px;


  @media screen and (max-width: 768px) {
    display: none;
  }
`
