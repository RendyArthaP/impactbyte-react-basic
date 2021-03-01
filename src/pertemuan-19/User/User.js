import axios from 'axios'
import React, {useState, useEffect} from 'react'
import ListUser from './ListUser'

const User = () => {
  const [inputUser, setInputUser] = useState({})
  const [listUsers, setListUsers] = useState([])
  const [update, setUpdate] = useState(false)

  const fetchData = () => {
    const url = "https://6023a95a6bf3e6001766b546.mockapi.io/user"
    axios.get(url)
      .then((res) => setListUsers(res.data))
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleSubmit = () => {
    const url = "https://6023a95a6bf3e6001766b546.mockapi.io/user"
    if(update) {
      axios.put(`https://6023a95a6bf3e6001766b546.mockapi.io/user/${inputUser.id}`, inputUser)
        .then(result => {
          console.log('success')
          fetchData()
          setInputUser("")
        })
        .catch(err => console.log(err))
    } else {
      axios.post(url, {user: inputUser.user})
        .then(result => {
          setListUsers([...listUsers, result.data])
          setInputUser("")
        })
        .catch(err => console.log(err))
    }
  }

  const handleDelete = (listUser) => {
    axios.delete(`https://6023a95a6bf3e6001766b546.mockapi.io/user/${listUser.id}`)
      .then(result => {
        let newData = listUsers.filter(value => value.id !== listUser.id)
        setListUsers([...newData])
        setInputUser("")
      })
      .catch(err => console.log(err))
  }
  
  const handleUpdate = (listUser) => {
    setUpdate(true)
    setInputUser(listUser)
  }

  return (
    <div>
      <input 
        type="text"
        value={inputUser.user || ""}
        onChange={(e) => setInputUser({...inputUser, user: e.target.value})}
      />
      <button 
        onClick={handleSubmit}
      >
        {update ? 'Update' : 'Submit'}
      </button>
      <ListUser 
        listUsers={listUsers}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
      />
    </div>
  )
}

export default User
