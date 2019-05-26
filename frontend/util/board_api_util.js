export const createBoard = board =>
  $.ajax({
    method: 'POST',
    url: '/api/boards',
    data: { board }
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
