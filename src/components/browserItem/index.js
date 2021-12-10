import './index.css'

const BrowserItem = props => {
  const {browserHistoryDetails, onDeletHistory} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = browserHistoryDetails

  const onDelete = () => {
    onDeletHistory(id)
  }

  return (
    <div className="listItem">
      <div className="oneItem">
        <p className="timeStyle">{timeAccessed}</p>
        <img src={logoUrl} className="logoimg" alt="itemlogo" />
        <h1 className="titleStyle">{title}</h1>
        <p className="domainUrlStyle">{domainUrl}</p>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
        alt="Delet logo"
        className="deletImg"
        onClick={onDelete}
      />
    </div>
  )
}

export default BrowserItem
