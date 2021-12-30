import {Switch, Route, Redirect} from 'react-router-dom'
import {Component} from 'react'
import ThemeContext from './context/ThemeContext'
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import VideoDetails from './components/VideoDetails'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'

import './App.css'

class App extends Component {
  state = {
    isDark: false,
    savedList: [],
  }

  toggleTheme = () => {
    this.setState(prevState => ({
      isDark: !prevState.isDark,
    }))
  }

  addToSavedList = videoDetails => {
    const {savedList} = this.state
    const updatedSavedList = [...savedList, videoDetails]
    this.setState({savedList: updatedSavedList})
  }

  removeFromSavedList = id => {
    const {savedList} = this.state
    const filteredSavedList = savedList.filter(each => each.id !== id)
    this.setState({savedList: filteredSavedList})
  }

  render() {
    const {isDark, savedList} = this.state
    return (
      <ThemeContext.Provider
        value={{
          isDark,
          toggleTheme: this.toggleTheme,
          savedList,
          addToSavedList: this.addToSavedList,
          removeFromSavedList: this.removeFromSavedList,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/videos/:id" component={VideoDetails} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}
export default App
