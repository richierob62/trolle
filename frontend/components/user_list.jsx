import React from 'react'

export default ({ users }) => (
  <ul>
    {users.map(u => (
      <li key={u.id}>{u.name}</li>
    ))}
  </ul>
)