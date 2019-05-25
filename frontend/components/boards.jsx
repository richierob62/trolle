import React from 'react'
import { connect } from 'react-redux'
import { getTeams } from '../actions/team_actions'
import RecentlyViewedBoards from './recently_viewed_boards'
import PersonalBoards from './personal_boards'
import TeamTabs from './team_tabs'
import CreateBoardButton from './create_board_button'

const mstp = state => ({
  teams: Object.values(state.entities.teams)
})

const mdtp = dispatch => ({
  getTeams: () => dispatch(getTeams())
})

class Boards extends React.Component {
  render() {
    const { teams } = this.props
    return (
      <div>
        <RecentlyViewedBoards />
        <PersonalBoards />
        {teams.map(t => (
          <TeamTabs key={t.id} team={t} />
        ))}
        <CreateBoardButton teams={teams}/>
      </div>
    )
  }
}

export default connect(
  mstp,
  mdtp
)(Boards)
