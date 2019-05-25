import React from 'react'
import { connect } from 'react-redux'
import { toggleCreatingBoard } from '../actions/ui_actions'
import CreateBoardForm from './create_board_form'

const mstp = state => ({
  creatingBoard: state.ui.nav.creating_board
})

const mdtp = dispatch => ({
  toggleCreatingBoard: () => dispatch(toggleCreatingBoard())
})

const CreateButton = ({ toggleCreatingBoard }) => (
  <div className="create-board-button" onClick={toggleCreatingBoard}>
    Create new board...
  </div>
)

const CreateBoard = ({ creatingBoard, toggleCreatingBoard, teams }) =>
  creatingBoard ? (
    <CreateBoardForm toggleCreatingBoard={toggleCreatingBoard} teams={teams} />
  ) : (
    <CreateButton toggleCreatingBoard={toggleCreatingBoard} />
  )

export default connect(
  mstp,
  mdtp
)(CreateBoard)
