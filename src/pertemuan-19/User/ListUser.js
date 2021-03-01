import React from 'react'

const ListUser = ({listUsers}) => {
  return (
    <div>
      {listUsers.map((listUser) => (
        <div key={listUser.id}>
          <span>{listUser.user}</span>
          <button>X</button>
          <button>Edit</button>
        </div>
      ))}
    </div>
  )
}

export default ListUser
