import {Component} from 'react'
import {v4 as id} from 'uuid'
import './index.css'
import CreateBottomContainer from './bottom'

class Create extends Component {
  state = {
    list: [],
    websiteInput: '',
    usernameInput: '',
    passwordInput: '',
  }

  websiteTyping = event => {
    this.setState({websiteInput: event.target.value})
  }

  usernameTyping = event => {
    this.setState({usernameInput: event.target.value})
  }

  passwordTyping = event => {
    this.setState({passwordInput: event.target.value})
  }

  deletePassword = UniqueId => {
    const {list} = this.state
    const filteredList = list.filter(each => each.id !== UniqueId)
    this.setState({
      list: filteredList,
    })
  }

  AddButtonClicked = () => {
    const {usernameInput, passwordInput, websiteInput} = this.state
    const newPassword = {
      id: id(),
      username: usernameInput,
      website: websiteInput,
      password: passwordInput,
    }

    this.setState(prevState => ({
      list: [...prevState.list, newPassword],
      usernameInput: '',
      websiteInput: '',
      passwordInput: '',
    }))
  }

  render() {
    const {websiteInput, usernameInput, passwordInput, list} = this.state

    const passwordsCount = list.length

    return (
      <div className="bg">
        <div className="main-container">
          <div className="logo-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
              className="app-logo"
              alt="app-logo"
            />
          </div>
          <div className="top-container">
            <div className="input-container">
              <p className="add-new-password">Add New Password</p>
              <div className="input-website-box">
                <div className="input-logo-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                    alt="website"
                    className="input-logo"
                  />
                </div>

                <input
                  type="text"
                  placeholder="Enter Website"
                  className="input-text"
                  onChange={this.websiteTyping}
                  value={websiteInput}
                />
              </div>

              <div className="input-website-box">
                <div className="input-logo-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                    alt="username"
                    className="input-logo"
                  />
                </div>

                <input
                  type="text"
                  placeholder="Enter Username"
                  className="input-text"
                  onChange={this.usernameTyping}
                  value={usernameInput}
                />
              </div>

              <div className="input-website-box">
                <div className="input-logo-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                    alt="password"
                    className="input-logo"
                  />
                </div>

                <input
                  type="password"
                  placeholder="Enter Password"
                  className="input-text"
                  onChange={this.passwordTyping}
                  value={passwordInput}
                />
              </div>
              <div className="button-box">
                <button
                  className="add-button"
                  type="button"
                  onClick={this.AddButtonClicked}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
          <CreateBottomContainer
            details={list}
            passwords={passwordsCount}
            deletePassword={this.deletePassword}
          />
        </div>
      </div>
    )
  }
}

export default Create
