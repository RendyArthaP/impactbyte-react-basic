import React, { useState } from 'react'

const Soal1 = () => {
  const [counter, setCounter] = useState(0)

  const increase = () => {
    setCounter(counter + 1)
  }

  const decrease = () => {
    if(counter > 0) {
      setCounter(counter - 1)
    }
  }

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={increase}>
        Counter +
      </button>
      <button onClick={decrease}>
        Counter -
      </button>
    </div>
  )
}

export default Soal1
