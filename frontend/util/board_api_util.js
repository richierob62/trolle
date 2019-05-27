export const createBoard = (board, team_id) =>
  $.ajax({
    method: 'POST',
    url: '/api/boards',
    data: { board, team_id }
  })

export const starBoard = id =>
  $.ajax({
    method: 'POST',
    url: `/api/boards/${id}/star`
  })

export const unStarBoard = id =>
  $.ajax({
    method: 'POST',
    url: `/api/boards/${id}/unstar`
  })

export const getBoards = () =>
  $.ajax({
    method: 'GET',
    url: '/api/boards'
  })

export const addBoardToRecent = id =>
  $.ajax({
    method: 'POST',
    url: `/api/boards/${id}/add_recent`
  })
