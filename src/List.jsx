import React from 'react'
export function List({ id, image, name, age }) {
  return (
    <div key={id} className="person">
      <img
        src={image}
        alt={name}
        className="img"
        style={{ width: '75px', borderRadius: '100%' }}
      />
      <h2>{name}</h2>
      <h3>Age: {age}</h3>
    </div>
  )
}
