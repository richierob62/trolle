import React from 'react'
import ProfileMenu from './profile_menu'
import { connect } from 'react-redux'
import { toggleProfileMenu } from '../actions/ui_actions'

const mstp = state => ({
  isOpen: !!state.ui.nav.profile_menu,
  currentUser: state.entities.users[state.session.id]
})

const mdtp = dispatch => ({
  toggleProfileMenu: () => dispatch(toggleProfileMenu())
})

class ProfileMenuButton extends React.Component {
  render() {
    const { toggleProfileMenu, isOpen, currentUser } = this.props
    const initials = currentUser.name
      .split(' ')
      .map(n => n[0].toUpperCase())
      .join('')
    return (
      <div className="profile-btn-bg">
        <div className="profile-btn-icon" onClick={toggleProfileMenu}>
          {initials}
        </div>
        {isOpen && (
          <ProfileMenu
            currentUser={currentUser}
            toggleProfileMenu={toggleProfileMenu}
          />
        )}
      </div>
    )
  }
}

export default connect(
  mstp,
  mdtp
)(ProfileMenuButton)
