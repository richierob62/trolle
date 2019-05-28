import React from 'react'
import { getTeams } from '../actions/team_actions.js'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Dropdown from './drop_down'

const mstp = state => ({
  teams: Object.values(state.entities.teams)
})

const mdtp = dispatch => ({
  getTeams: () => dispatch(getTeams())
})

const ExistingTeamDialog = ({ team, close, showChangeDialog }) => {
  return (
    <div className="existing-team">
      <div className="top-row">
        <div className="title">{team.title}</div>
        <i onClick={close} className="fas fa-times close" />
      </div>
      <div onClick={showChangeDialog} className="change-team">
        Change Team...
      </div>
      <Link to={`/teams/${team.id}`}>View Team Page</Link>
    </div>
  )
}
const ChangeTeamDialog = ({
  team_id,
  teamOptions,
  close,
  showTeamDialog,
  handleTeamSelect
}) => {
  return (
    <div className="changing-team">
      <div className="top-row">
        <i onClick={showTeamDialog} className="fas fa-chevron-left back" />
        <div className="title">Change Team</div>
        <i onClick={close} className="fas fa-times close" />
      </div>
      <div className="part-of">This board is part of...</div>
      <select value={team_id} onChange={handleTeamSelect}>
        {teamOptions.map(o => (
          <option key={o.id} value={o.id}>
            {o.title}
          </option>
        ))}
        >
      </select>
      <div className="bottom-row">
        <div>Change</div>
        <div>Create Team</div>
      </div>
    </div>
  )
}

// <Dropdown
//   setSelected={handleTeamSelect}
//   options={teamOptions}
//   display_key={'title'}
// />
// (
// <div className="dialog">
//   <div> {heading}</div>
//   <div>{second_line}</div>

//   <div>
//     <input type="button" value="Add" />
//     <Link to="">Create Team</Link>
//   </div>
// </div>
// )}

class BoardTeamLabel extends React.Component {
  constructor(props) {
    super(props)
    this.toggleTeamDialog = this.toggleTeamDialog.bind(this)
    this.showChangeDialog = this.showChangeDialog.bind(this)
    this.showTeamDialog = this.showTeamDialog.bind(this)
    this.handleTeamSelect = this.handleTeamSelect.bind(this)
    this.checkForDialogClose = this.checkForDialogClose.bind(this)
    this.node = React.createRef()
    this.state = {
      open: false,
      team_change: false
    }
  }

  componentDidMount() {
    this.props.getTeams()
    document.addEventListener('mousedown', this.checkForDialogClose)
  }

  componentWillUnMount() {
    document.removeEventListener('mousedown', this.checkForDialogClose)
  }

  checkForDialogClose(e) {
    if (
      this.node &&
      this.node.current &&
      !this.node.current.contains(e.target) &&
      this.state.open
    ) {
      this.toggleTeamDialog()
    }
  }

  showChangeDialog() {
    this.setState({
      team_change: true
    })
  }

  showTeamDialog() {
    this.setState({
      team_change: false
    })
  }
  toggleTeamDialog() {
    this.setState({
      open: !this.state.open,
      team_change: false
    })
  }
  handleTeamSelect(e) {
    this.setState({
      new_team_id: e.target.value
    })
  }

  render() {
    if (!this.props.teams) return null

    let label = '',
      team
    const team_id = this.props.board.team_id
    if (team_id === -1) {
      label = 'Personal'
    } else {
      team = this.props.teams.find(t => t.id === team_id)
      if (team) label = team.title
    }

    const teamOptions = [
      { id: -1, title: 'Personal Boards (no team)' },
      ...this.props.teams
    ]

    return (
      <div className="board-team-label" ref={this.node}>
        <div onClick={this.toggleTeamDialog} className="label">
          {label}
        </div>
        {this.state.open && team && !this.state.team_change && (
          <ExistingTeamDialog
            team={team}
            close={this.toggleTeamDialog}
            showChangeDialog={this.showChangeDialog}
          />
        )}
        {this.state.open && team && this.state.team_change && (
          <ChangeTeamDialog
            team_id={this.state.new_team_id || team.id}
            teamOptions={teamOptions}
            close={this.toggleTeamDialog}
            showTeamDialog={this.showTeamDialog}
            handleTeamSelect={this.handleTeamSelect}
          />
        )}
      </div>
    )
  }
}
// {this.state.open && team && this.state.team_change && (
//   <ExistingTeamDialog />
// )}
// {this.state.open && !team && <ChangeTeamDialog />}

export default connect(
  mstp,
  mdtp
)(BoardTeamLabel)
