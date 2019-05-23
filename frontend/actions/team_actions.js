export const RECEIVE_TEAMS = 'RECEIVE_TEAMS'

export const getTeams = () => (dispatch, getState) =>
  new Promise((resolve, reject) => {
    return resolve({
      1: {
        id: 1,
        title: 'Dummy Team A',
        user_id: 1,
        members: [1, 2]
      },
      2: {
        id: 2,
        title: 'Dummy Team B',
        user_id: 1,
        members: [1, 2]
      }
    })
  }).then(teams =>
    dispatch({
      type: RECEIVE_TEAMS,
      teams
    })
  )
