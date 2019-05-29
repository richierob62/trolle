import React from 'react'
import { getMatchingUsers, inviteUsers } from '../actions/user_actions.js'
import { connect } from 'react-redux'
import { merge } from 'lodash'
import UserList from './user_list'

const mstp = state => ({
  matching_users: Object.values(state.ui.matching_users)
})

const mdtp = dispatch => ({
  getMatchingUsers: (matching, board_id) =>
    dispatch(getMatchingUsers(matching, board_id)),
  inviteUsers: user_ids => dispatch(inviteUsers(user_ids))
})

class InviteDialog extends React.Component {
  constructor(props) {
    super(props)
    this.handleMemberSelect = this.handleMemberSelect.bind(this)
    this.inviteUsers = this.inviteUsers.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.state = {
      selected_users: {},
      matching_string: ''
    }
  }

  inviteUsers(e) {
    e.preventDefault()
    const user_ids = Object.values(this.state.selected_users).map(u => u.id)
    const board_id = this.props.board.id
    this.props.inviteUsers(user_ids, board_id)
    this.setState({
      open: false
    })
  }

  handleMemberSelect(user) {
    const newSelected = merge({}, this.state.selected_users)
    newSelected[user.id] = user
    this.setState({
      selected_users: newSelected
    })
  }

  handleMemberUnselect(user) {
    const newSelected = merge({}, this.state.selected_users)
    delete newSelected[user.id]
    this.setState({
      selected_users: newSelected
    })
  }

  handleInputChange(e) {
    this.setState(
      {
        matching_string: e.target.value
      },
      () => {
        if (this.state.matching_string === '') return
        const board_id = this.props.board.id
        this.props.getMatchingUsers(this.state.matching_string, board_id)
      }
    )
  }

  render() {
    const { matching_users } = this.props

    return (
      <div className="invite-dialog">
        <div className="top-row">
          <div className="title">Invite To Board</div>
          <i onClick={close} className="fas fa-times close" />
        </div>
        <form onSubmit={this.inviteUsers}>
          <input
            className="name"
            type="text"
            value={this.state.matching_string}
            onChange={this.handleInputChange}
          />
          {matching_users.length > 0 && (
            <div className="matches">
              <UserList users={matching_users} />
            </div>
          )}
          <input
            className={`invite-selected-btn ${
              Object.keys(this.state.selected_users).length > 0
                ? 'enabled'
                : 'disabled'
            }`}
            type="submit"
            value="Send Invitation"
          />
        </form>
      </div>
    )
  }
}

export default connect(
  mstp,
  mdtp
)(InviteDialog)
