# Trolle ( troh-lay )

This is a clone of the popular task management web application, Trello. It allows users to create projects (boards), group tasks (lists), and create and arrange activities (cards). Additionally, users can keep their boards private, share them with teams they create, or make them public to the world.

Trolle was created as a demonstation of my skills set and is not intended for commercial use or in any manner that would compete with Trello.

---

## The Live Site

Trolle is hosted on heroku <a href="https://trolle-app.herokuapp.com/" target="_blank">here</a>. Sign up and take it for a spin.

---

## Features

- Create Boards, Lists and Cards
- Move Cards between Lists with simple drag & drop
- Share Boards with indiciduals or teams
- Manage the privacy of your boards

---

## The Tech Stack

- **The Back End:**
  Trolle uses <a href="https://rubyonrails.org/" target="_blank">Rails 5</a> to manage a <a href="https://www.postgresql.org/" target="_blank">Postgresql</a> database. Data is served in json format using Rails' JBuilder to structure and control the data send back by the server.

- **The Front End:**
  Trolle uses React 16.8 to deliver the front end interface. The front end ecosystem also includes tools that work well with React:

  - <a href="https://reacttraining.com/react-router/" target="_blank">react router</a> handles all client-side routing
  - <a href="https://redux.js.org/" target="_blank">redux</a> handles all client-side state management
  - <a href="https://lodash.com/" target="_blank">lodash's</a> merge is used to easily manipulate state without mutating the previous state.
  - <a href="https://babeljs.io/" target="_blank">react-beautiful-dnd</a> is used to implement drag and drop capability.
  - Because ES6 is used, its becomes necessary to transpile the code into ES5 javascript. <a href="https://babeljs.io/" target="_blank">babel</a> and <a href="https://webpack.js.org/" target="_blank">webpack</a> are used to do this.

---

## Setup

If you wish to download and run it locally:

1. Clone or download the repo.
2. Run npm install to install all the javacript dependencies.
3. Run bundle exec install to install all the backend dependencies.
4. Run rails s to run the rails server
5. The site will be available at localhost:3000

---

## Challenges

One problem I faced came with the decision to use an open source library to handle drag and drop. <a href="https://babeljs.io/" target="_blank">react-beautiful-dnd</a> is a very popular library for this purpose, but its need to restrict the use of the CSS styling property `transform: rotate( 10deg )` as a core part of its strategy made it impossible to just add a class or style to the component when it was being dragged. The solution lay in React's ability to conditionally render based on state change:

```
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
                <i className="fas fa-pencil-alt" onClick={this.startEdit} />
              </div>
            )
          }}
        </Draggable>
```

---

## License

This project is made available under the terms of the <a href="https://babeljs.io/" target="_blank">**ISC**</a> license.
