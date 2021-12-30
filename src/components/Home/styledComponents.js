import styled from 'styled-components'

export const BannerSection = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png ');
  width: 100%;
  padding: 32px;
  background-size: cover;
`

export const BannerLogoAndCloseButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const BannerLogo = styled.img`
  width: 100px;
`

export const CloseButton = styled.button`
  border-width: 0;
  background-color: transparent;
`

export const BannerDescription = styled.p`
  color: #313131;
  font-family: 'Roboto';
  width: 60%;
`

export const GetPremiumButton = styled.button`
  border-style: solid;
  margin-top: 32px;
  margin-bottom: 16px;
  background-color: transparent;
  border-width: 1.5px;
  border-color: #313131;
  color: #313131;
  padding: 8px;
  font-family: 'Roboto';
  font-weight: 700;
`

export const HomeSection = styled.div`
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
  padding: 16px;
  min-height: 65vh;
  flex-shrink: 0;
`

export const SearchBarContainer = styled.div`
  display: flex;
  width: 60%;
  padding-left: 16px;
`

export const SearchButton = styled.button`
  width: 60px;
  border-width: 1px;
  border-style: solid;
  font-size: 16px;
  border-color: #e2e8f0;
  background-color: ${props => (props.isDark ? '#313131' : '#f1f5f9')};
  color: ${props => (props.isDark ? '#f9f9f9' : '#181818')};
`

export const SearchBar = styled.input`
  flex-grow: 1;
  outline: none;
  border-color: #e2e8f0;
  border-width: 1px;
  border-style: solid;
  padding: 8px;
  background-color: transparent;
  color: ${props => (props.isDark ? '#ffffff' : '#181818')};
`

export const LoaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 24px;
`

export const NoItemsImage = styled.img`
  width: 40%;
  margin-left: auto;
  margin-right: auto;
`
export const NoItemsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const NoItemsHeading = styled.h1`
  color: ${props => (props.isDark ? '#ffffff' : '#181818')};
  margin: 12px;
  font-family: 'Roboto';
`
export const NoItemsDescription = styled.p`
  color: ${props => (props.isDark ? '#e2e8f0' : '#1e293b')};
  margin: 12px;
`

export const NoItemsButton = styled.button`
  padding: 12px;
  border-width: 0;
  border-radius: 4px;
  outline: none;
  margin-top: 16px;
  color: white;
  font-family: 'Roboto';
  font-weight: 600;
  background-color: #4f46e5;
  cursor: pointer;
`

export const HomeSectionMD = styled.div`
  display: flex;
`

export const Container = styled.div`
  width: 100%;
`
