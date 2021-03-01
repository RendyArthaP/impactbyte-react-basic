import axios from 'axios'
import React,{useEffect, useState} from 'react'

const BelajarUseEffect = () => {
  const [posts, setPosts] = useState([])

  const fetchData = () => {
    // const url = "https://jsonplaceholder.typicode.com/posts"
    // fetch(url)
    //   .then((response) => response.json())
    //   .then((result) => setPosts(result))

    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setPosts(response.data))
  }

  useEffect(() => {
    fetchData()
  }, [])
  
  return (
    <div>
      <h1>test</h1>
      {posts.map((item,id) => (
        <div key={id}>
          <h1>{item.title}</h1>
          <span>{item.body}</span>
        </div>
      ))}
    </div>
  )
}

export default BelajarUseEffect
