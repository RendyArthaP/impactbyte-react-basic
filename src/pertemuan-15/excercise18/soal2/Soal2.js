import React from 'react'
import {datas} from '../soal2/data'

const Soal2 = () => {
  return (
    <div>
      {datas.map((data) => (
        <div key={data.id}>
          <h1>{data.nama}</h1>
          <span>{data.pekerjaan}</span>
        </div>
      ))}
    </div>
  )
}

export default Soal2
