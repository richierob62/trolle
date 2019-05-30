import React from 'react'
import { connect } from 'react-redux'
import ListAdder from './list_adder'
import List from './list'
import { createList } from '../actions/list_actions'
import { moveCard } from '../actions/card_actions'
import { DragDropContext } from 'react-beautiful-dnd'
import ReactDOM from 'react-dom'

const mstp = state => ({
  lists: Object.values(state.entities.lists),
  cards: state.entities.cards
})

const mdtp = dispatch => ({
  createList: (list, board) => dispatch(createList(list, board)),
  moveCard: moveData => dispatch(moveCard(moveData))
})

class ListCollection extends React.Component {
  constructor(props) {
    super(props)
    this.onDragEnd = this.onDragEnd.bind(this)
    this.onDragStart = this.onDragStart.bind(this)
    this.onDragUpdate = this.onDragUpdate.bind(this)
  }

  onDragStart(e) {}

  onDragUpdate(e) {}

  onDragEnd(result) {
    const { destination, source, draggableId: card_id } = result
    const { lists } = this.props

    if (!destination) {
      return
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return
    }

    const newListId = destination.droppableId
    const destinationList = lists.find(l => l.id === newListId)
    const idsOfCardsToDemote = destinationList.cards.slice(destination.index)

    this.props.moveCard({ card_id, idsOfCardsToDemote, newListId })
  }

  render() {
    const { lists, createList, board } = this.props

    return (
      <div className="list-holder">
        <ul>
          <DragDropContext
            onDragStart={this.onDragStart}
            onDragEnd={this.onDragEnd}
            onDragUpdate={this.onDragUpdate}
          >
            {lists.map(l => (
              <li className="list-item" key={l.id}>
                <List list={l} />
              </li>
            ))}
          </DragDropContext>
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
