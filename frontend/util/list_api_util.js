export const createList = (list, board) =>
  $.ajax({
    method: 'POST',
    url: `/api/boards/${board.id}/lists`,
    data: { list }
  })
