import React from 'react'

const ListUser = ({listUsers, handleDelete, handleUpdate}) => {
  return (
    <div>
      {listUsers.map((listUser) => (
        <div key={listUser.id}>
          <span>{listUser.user}</span>
          <button onClick={() => handleDelete(listUser)}>X</button>
          <button onClick={() => handleUpdate(listUser)}>Edit</button>
        </div>
      ))}
    </div>
  )
}

export default ListUser
