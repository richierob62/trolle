import React from 'react'
import { Draggable } from 'react-beautiful-dnd'

export default ({ card, index }) => (
  <Draggable draggableId={card.id} index={index}>
    {(provided, snapshot) => {
      if (snapshot.isDragging) {
        return (
          <div
            className="dragged-card"
            data-title={card.title}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            {card.title}
          </div>
        )
      }
      return (
        <div
          className="card"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {card.title}
        </div>
      )
    }}
  </Draggable>
)
