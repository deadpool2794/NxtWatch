import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import ThemeContext from '../../context/ThemeContext'
import {
  LoginContainer,
  LoginForm,
  LoginLogoContainer,
  LoginLogo,
  Label,
  Input,
  CheckBox,
  CheckBoxLabel,
  LoginButton,
  ErrorMsg,
} from './styledComponents'

class Login extends Component {
  state = {showPassword: false, username: '', password: '', errorMsg: ''}

  onChangeShowPassword = () => {
    const passwordElement = document.getElementById('passwordInput')
    if (passwordElement.type === 'password') {
      passwordElement.type = 'text'
    } else {
      passwordElement.type = 'password'
    }

    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  onSubmitLoginForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const options = {
      method: 'POST',
      body: JSON.stringify({username, password}),
    }

    const loginApiUrl = 'https://apis.ccbp.in/login'
    const loginResponse = await fetch(loginApiUrl, options)
    const parsedLoginResponse = await loginResponse.json()
    if (loginResponse.ok) {
      this.loginSuccess(parsedLoginResponse.jwt_token)
    } else {
      this.loginFailure(parsedLoginResponse.error_msg)
    }
  }

  loginFailure = errorMsg => {
    this.setState({errorMsg})
  }

  loginSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 7})
    const {history} = this.props
    history.replace('/')
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {showPassword, username, password, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <LoginContainer isDark={isDark}>
              <LoginForm isDark={isDark} onSubmit={this.onSubmitLoginForm}>
                <LoginLogoContainer>
                  <LoginLogo
                    src={
                      isDark
                        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                    }
                    alt="website logo"
                  />
                </LoginLogoContainer>
                <Label htmlFor="usernameInput" isDark={isDark}>
                  USERNAME
                </Label>
                <Input
                  id="usernameInput"
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={this.onChangeUsername}
                />
                <Label htmlFor="passwordInput" isDark={isDark}>
                  PASSWORD
                </Label>
                <Input
                  id="passwordInput"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={this.onChangePassword}
                  isDark={isDark}
                />
                <div>
                  <CheckBox
                    id="showPasswordCheckBox"
                    type="checkbox"
                    isDark={isDark}
                    checked={showPassword}
                    onChange={this.onChangeShowPassword}
                  />
                  <CheckBoxLabel htmlFor="showPasswordCheckBox" isDark={isDark}>
                    Show Password
                  </CheckBoxLabel>
                </div>
                <LoginButton type="submit">Login</LoginButton>
                {errorMsg === '' ? (
                  <ErrorMsg>{}</ErrorMsg>
                ) : (
                  <ErrorMsg>*{errorMsg}</ErrorMsg>
                )}
              </LoginForm>
            </LoginContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Login
