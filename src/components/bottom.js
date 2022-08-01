import {Component} from 'react'
import CreatePassWordCards from './card'

class CreateBottomContainer extends Component {
  state = {searchInput: '', wantToShowPasswords: false}

  searching = event => {
    this.setState({searchInput: event.target.value})
  }

  checkBoxClicked = () => {
    this.setState(prevState => ({
      wantToShowPasswords: !prevState.wantToShowPasswords,
    }))
  }

  render() {
    const {passwords, deletePassword} = this.props
    const {searchInput, wantToShowPasswords} = this.state

    const getFilteredList = () => {
      const {details} = this.props
      const list = details
      const filteredList = list.filter(each =>
        each.website.toLowerCase().includes(searchInput.toLowerCase()),
      )
      return filteredList
    }

    const passwordsList = getFilteredList()

    return (
      <div className="bottom-container-with-passwords">
        <div className="password-top-container">
          <div className="passwords-count-box">
            <p className="your-passwords">Your passwords</p>
            <div className="box">{passwords}</div>
          </div>

          <div className="input-search-box">
            <div className="input-search-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="input-logo"
              />
            </div>

            <input
              type="search"
              value={searchInput}
              placeholder="Search"
              className="input-text"
              onChange={this.searching}
            />
          </div>
        </div>
        <hr
          style={{
            color: '#9ba9eb',
            backgroundColor: '#9ba9eb',
            height: 1,
          }}
        />

        <div className="checkBox-container">
          <input type="checkbox" id="checkbox" onClick={this.checkBoxClicked} />
          <label htmlFor="checkbox" className="label">
            Show Passwords
          </label>
        </div>

        <div className="card-or-no-passwords-box">
          {passwords === 0 ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
              alt="no passwords"
              className="no-password-img"
            />
          ) : (
            <CreatePassWordCardsFun
              detailsOfList={passwordsList}
              fun={deletePassword}
              wantToShowPasswords={wantToShowPasswords}
            />
          )}

          {passwords === 0 ? (
            <p className="no-passwords">No Passwords</p>
          ) : null}
        </div>
      </div>
    )
  }
}

const CreatePassWordCardsFun = props => {
  const {detailsOfList, fun, wantToShowPasswords} = props

  return (
    <ul className="ul">
      {detailsOfList.map(each => (
        <CreatePassWordCards
          details={each}
          key={each.id}
          fun={fun}
          wantToShowPasswords={wantToShowPasswords}
        />
      ))}
    </ul>
  )
}

export default CreateBottomContainer
