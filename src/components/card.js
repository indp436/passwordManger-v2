const CreatePassWordCards = props => {
  const {details, fun, wantToShowPasswords} = props

  const {website, username, password, id} = details
  const letter = username.slice(0, 1)

  const deleteIconClicked = () => {
    fun(id)
  }

  return (
    <li className="li">
      <div className="circle-box">{letter}</div>
      <div className="details-box">
        <p className="website-name">{website}</p>
        <p className="username">{username}</p>
        <p className="password">
          {wantToShowPasswords ? (
            password
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              className="stars"
              alt="stars"
            />
          )}
        </p>
      </div>
      <button
        className="delete-button"
        type="button"
        onClick={deleteIconClicked}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default CreatePassWordCards
