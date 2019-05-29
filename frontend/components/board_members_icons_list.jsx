import React from 'react'
import { connect } from 'react-redux'
import { getMembers } from '../actions/board_actions'

const MemberIcon = ({ member }) => {
  const initials = member.name
    .split(' ')
    .map(n => n[0].toUpperCase())
    .join('')
  return (
    <li className="profile-btn-bg">
      <div className="profile-btn-icon">{initials}</div>
    </li>
  )
}

const mstp = (state, ownProps) => ({
  members: Object.values(state.entities.users).filter(
    u => ownProps.board.members.indexOf(u.id) >= 0
  )
})

const mdtp = dispatch => ({
  getMembers: id => dispatch(getMembers(id))
})

class IconList extends React.Component {
  componentDidMount() {
    this.props.getMembers(this.props.board.id)
  }

  render() {
    return (
      <ul className="icon-list">
        {this.props.members.map(m => (
          <MemberIcon key={m.id} member={m} />
        ))}
      </ul>
    )
  }
}

export default connect(
  mstp,
  mdtp
)(IconList)
