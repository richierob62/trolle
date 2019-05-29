import React from 'react'
import { connect } from 'react-redux'
import ListAdder from './list_adder'
import List from './list'
import { createList } from '../actions/list_actions'

const mstp = state => ({
lists: Object.values(state.entities.lists)
})

const mdtp = dispatch => ({
createList: (list, board) => dispatch(createList(list, board))
})

class ListCollection extends React.Component {
  render() {
    const { lists, createList, board } = this.props

    return (
      <div className="list-holder">
        <ul>
          {lists.map(l => (
            <li className="list-item" key={l.id}>
              <List list={l} />
            </li>
          ))}
        </ul>
        <ListAdder
          first={lists.length === 0}
          board={board}
          createList={createList}
        />
      </div>
    )
  }
}

export default connect(
  mstp,
  mdtp
)(ListCollection)
