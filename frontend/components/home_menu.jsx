import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getTeams } from '../actions/team_actions'

const mstp = state => ({
  teams: Object.values(state.entities.teams),
  selectedTeam: state.ui.selectedTeam || { id: -1 }
})

const mdtp = dispatch => ({
  getTeams: () => dispatch(getTeams())
})

const SubmenuItem = ({ icon, text, link }) => (
  <li>
    <Link to={link}>
      <span>{icon}</span>
      {text}
    </Link>
  </li>
)

const TeamMenuLink = ({ team, selectedTeam }) => (
  <li>
    <Link to={`/teams/${team.id}`}>
      <span>i</span>
      {team.title}
    </Link>
    {team.id !== selectedTeam.id && (
      <ul>
        <SubmenuItem
          icon=""
          text="Highlights"
          link={`/teams/${team.id}/highlights`}
        />
        <SubmenuItem
          icon=""
          text="All team boards"
          link={`/teams/${team.id}/boards`}
        />
        <SubmenuItem
          icon=""
          text="Members"
          link={`/teams/${team.id}/members`}
        />
        <SubmenuItem
          icon=""
          text="Settings"
          link={`/teams/${team.id}/settings`}
        />
      </ul>
    )}
  </li>
)

class HomeMenu extends React.Component {
  componentDidMount() {
    this.props.getTeams()
  }

  render() {
    const { teams, selectedTeam } = this.props
    return (
      <ul>
        <li>
          <Link to={`/boards`}>
            <span>i</span>Boards
          </Link>
        </li>
        <li>
          <Link to={`/`}>
            <span>i</span>Home
          </Link>
        </li>
        <li>TEAMS</li>
        {teams.map(team => (
          <TeamMenuLink key={team.id} team={team} selectedTeam={selectedTeam} />
        ))}
        <li>
          <span>i</span>Create a team
        </li>
      </ul>
    )
  }
}

export default connect(
  mstp,
  mdtp
)(HomeMenu)
