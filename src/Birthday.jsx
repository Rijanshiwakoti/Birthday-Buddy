import { List } from './List'
import { useState } from 'react'
import data from './data'

import React from 'react'

const Birthday = () => {
  const [person, setPerson] = useState(data)

  const handleClick = () => {
    setPerson([])
  }
  return (
    <section className="container">
      {person.map((person) => {
        const { id, name, age, image } = person
        return <List id={id} image={image} name={name} age={age} />
      })}
      <button type="button" className="btn" onClick={handleClick}>
        Clear All
      </button>
    </section>
  )
}

export default Birthday
