export const login = user =>
  // @ts-ignore
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: { user }
  })

export const signup = user =>
  // @ts-ignore
  $.ajax({
    method: 'POST',
    url: '/api/users',
    data: { user }
  })

export const logout = () =>
  // @ts-ignore
  $.ajax({
    method: 'DELETE',
    url: '/api/session'
  })
