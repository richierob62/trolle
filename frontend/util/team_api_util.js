export const getTeams = () =>
  $.ajax({
    method: 'GET',
    url: '/api/teams'
  })
