import styled from 'styled-components'

export const LoginContainer = styled.div`
  padding: 0;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`

export const AutomaticLogin = styled.p`
  font-size: 10px;
  cursor: pointer;
  color: ${props => (props.isDark ? '#ffffff' : '#475569')};
`

export const LoginForm = styled.form`
  padding: 32px;
  width: 400px;
  background-color: ${props => {
    const {isDark} = props
    return isDark ? 'black' : '#ffffff'
  }};
  box-shadow: 0px 4px 4px 0px #231f20;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  padding-bottom: 42px;
`
export const LoginLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 24px;
  margin-bottom: 16px;
`
export const LoginLogo = styled.img`
  height: 100%;
`

export const Label = styled.label`
  font-size: 12px;
  font-weight: 600;
  color: ${props => (props.isDark ? '#ffffff' : '#475569')};
  margin-bottom: 4px;
  margin-top: 16px;
`
export const Input = styled.input`
  background-color: transparent;
  border-style: solid;
  padding: 12px;
  border-width: 1.5px;
  border-radius: 4px;
  border-color: ${props => (props.isDark ? ' #475569' : '#e2e8f0')};
  outline: none;
  margin-bottom: 16px;
  color: ${props => (props.isDark ? '#ffffff' : '#475569')};
`
export const CheckBox = styled.input`
  border-color: ${props => (props.isDark ? ' #475569' : '#e2e8f0')};
  margin-right: 6px;
  cursor: pointer;
`

export const CheckBoxLabel = styled.label`
  color: ${props => (props.isDark ? '#ffffff' : 'black')};
  font-weight: 600;
`

export const LoginButton = styled.button`
  padding: 12px;
  border-width: 0;
  border-radius: 4px;
  outline: none;
  margin-top: 16px;
  color: #ffffff;
  font-family: 'Roboto';
  font-weight: 600;
  background-color: #4f46e5;
  cursor: pointer;
`

export const ErrorMsg = styled.p`
  font-size: 12px;
  color: red;
`
export const AutomaticLoginLink = styled.span`
  color : blue;
`