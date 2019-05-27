import React from 'react'
import BoardThumb from './board_thumb'
import { Link } from 'react-router-dom'

export default ({ team, boards, history }) => (
  <div className="recent-boards">
    <div className="heading">
      <i className="fas fa-user-friends" />
      <div className="title">{team.title}</div>
      <Link to={`/teams/${team.id}/boards`}>Boards</Link>
      <Link to={`/teams/${team.id}/members`}>Members</Link>
    </div>
    <div className="boards-holder">
      {boards.map(b => (
        <BoardThumb key={b.id} board={b} history={history} />
      ))}
    </div>
  </div>
)
