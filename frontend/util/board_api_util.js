export const createBoard = board =>
  $.ajax({
    method: 'POST',
    url: '/api/boards',
    data: { board }
  })

export const getBoards = () =>
  $.ajax({
    method: 'GET',
    url: '/api/boards'
  })
