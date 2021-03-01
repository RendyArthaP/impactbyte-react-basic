import axios from 'axios'
import React, {useState, useEffect} from 'react'
import ListUser from './ListUser'

const User = () => {
  const [inputUser, setInputUser] = useState("")
  const [listUsers, setListUsers] = useState([])

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
    axios.post(url, {user: inputUser})
      .then(result => {
        setListUsers([...listUsers, result.data])
        setInputUser("")
      })
      .catch(err => console.log(err))
  }
 
  return (
    <div>
      <input 
        type="text"
        value={inputUser}
        onChange={(e) => setInputUser(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
      <ListUser listUsers={listUsers}/>
    </div>
  )
}

export default User
