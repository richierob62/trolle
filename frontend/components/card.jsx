import React from 'react'
import { Draggable } from 'react-beautiful-dnd'

export default ({ card, index }) => (
  <Draggable draggableId={card.id} index={index}>
    {(provided, snapshot) => {
      // if (snapshot.isDragging)
      //   provided.draggableProps.style.transform =
      //     provided.draggableProps.style.transform + ' transform: rotate(10deg)'
      console.log(provided.draggableProps.style.transform)

      return (
        <div
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
