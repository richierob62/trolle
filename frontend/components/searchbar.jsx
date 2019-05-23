import React from 'react'
import SearchResultsList from './search_results_list'
import { connect } from 'react-redux'
import { toggleSearchResultsList } from '../actions/ui_actions'

const mstp = state => ({
  isOpen: !!state.ui.nav.search_results_list,
  searchResults: Object.values(state.entities.cards).filter(card => {
    debugger
    const card_string = (card.title + ' ' + card.description).toLowerCase()
    const search_string = state.ui.nav.searchString.toLowerCase()
    return card_string.indexOf(search_string) >= 0
  })
})

const mdtp = dispatch => ({
  toggleSearchResultsList: () => dispatch(toggleSearchResultsList())
})

class SearchResultsListButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchString: ''
    }
  }

  handleInputChange(e) {
    // update search input
    // debounce 1sec
    // fire search
  }

  render() {
    const {
      toggleSearchResultsList,
      isOpen,
      searchString,
      searchResults
    } = this.props
    return (
      <div className="searchbar-container">
        <div className="searchbar-box">
          <input
            value={searchString}
            onFocus={() => {
              if (!isOpen) toggleSearchResultsList()
            }}
            onBlur={() => {
              if (isOpen) toggleSearchResultsList()
            }}
            onChange={this.handleInputChange.bind(this)}
          />
          {!isOpen && <span className="magnify" />}
        </div>

        {isOpen && <SearchResultsList searchResults={searchResults} />}
      </div>
    )
  }
}

export default connect(
  mstp,
  mdtp
)(SearchResultsListButton)
