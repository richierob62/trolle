export const createCard = (card, list) =>
  $.ajax({
    method: 'POST',
    url: `/api/lists/${list.id}/cards`,
    data: { card }
  })
