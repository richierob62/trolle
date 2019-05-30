import React from 'react'
import { Draggable } from 'react-beautiful-dnd'

export default ({ card, index }) => (
  <Draggable draggableId={card.id} index={index}>
    {(provided, snapshot) => {
      return (
        <div
          id={`card-${card.id}`}
          className={`card ${snapshot.isDragging ? 'is-dragging' : ''}`}
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
