import {Component} from 'react'
import BrowserItem from '../browserItem'

import './index.css'

class HomeBrowserHistory extends Component {
  constructor(props) {
    super(props)
    const {initialHistoryList} = props
    this.state = {
      searchInput: '',
      historyList: initialHistoryList,
    }
  }

  onChangeSearchInput = event => {
    console.log(event.target.value)
    this.setState({searchInput: event.target.value})
  }

  onDeletHistory = id => {
    const {historyList} = this.state
    const filteredList = historyList.filter(eachdelet => eachdelet.id !== id)

    this.setState({historyList: filteredList})
  }

  render() {
    const {historyList} = this.state
    const {searchInput} = this.state

    const showList = historyList.filter(eachItem =>
      eachItem.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div>
        <div className="navBarStyling">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            className="historyImg"
            alt="History logo"
          />
          <div className="searchContainer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              className="searchImg"
              alt="Search logo"
            />
            <input
              type="search"
              onChange={this.onChangeSearchInput}
              className="inputEl"
              value={searchInput}
            />
          </div>
        </div>

        <ul className="ulStyle">
          {showList.length < 1
            ? 'There is no history to show'
            : showList.map(eachHistory => (
                <BrowserItem
                  browserHistoryDetails={eachHistory}
                  key={eachHistory.id}
                  onDeletHistory={this.onDeletHistory}
                />
              ))}
        </ul>
      </div>
    )
  }
}

export default HomeBrowserHistory
