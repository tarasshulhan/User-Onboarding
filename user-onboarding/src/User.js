import React from 'react'

function User({ details }) {
  if (!details) {
    return <h3>Working fetching your user&apos;s details...</h3>
  }

  return (
    <div className='user container'>
      <h3>{details.name}</h3>
      <p>Email: {details.email}</p>
      <img src={details.avatar}></img>
    </div>
  )
}

export default User