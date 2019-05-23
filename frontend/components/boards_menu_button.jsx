import React from 'react'
import BoardsMenu from './boards_menu'
import { connect } from 'react-redux'
import { toggleBoardsMenu } from '../actions/ui_actions'

const mstp = state => ({
  isOpen: !!state.ui.nav.boards_menu
})

const mdtp = dispatch => ({
  toggleBoardsMenu: () => dispatch(toggleBoardsMenu())
})

class BoardMenuButton extends React.Component {
  render() {
    const { toggleBoardsMenu, isOpen } = this.props
    return (
      <div className="board-btn-bg">
        <div className="board-btn-icon" onClick={toggleBoardsMenu}>
          Boards
        </div>
        {isOpen && <BoardsMenu />}
      </div>
    )
  }
}

export default connect(
  mstp,
  mdtp
)(BoardMenuButton)
