import React from 'react'
import { connect } from 'react-redux'
import { getBoards } from '../actions/board_actions'
import BoardBar from './board_bar'

const mstp = (state, ownProps) => ({
  board: state.entities.boards[ownProps.match.params.id]
})

const mdtp = dispatch => ({
  getBoards: () => dispatch(getBoards())
})

class Board extends React.Component {
  componentDidMount() {
    this.props.getBoards()
  }

  render() {
    const { board } = this.props

    const style = board
      ? {
          background: `url(${board.image})`,
          backgroundSize: 'cover'
        }
      : {}
    return (
      <div className="board" style={style}>
        <BoardBar board={board} />
      </div>
    )
  }
}

export default connect(
  mstp,
  mdtp
)(Board)
