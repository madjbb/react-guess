import React from 'react'
import Button from './Button'

function Controls({setter}) {
  return (
    <div>
      {/* <Button text={`-`} handler={() => setter((value) => value - 1)}></Button> */}
      {/* <Button text={`-`} handler={() => setter((value) => value + 1)}></Button> */}
      <button onClick={() => setter((value) => value - 1)}>-</button>
      <button onClick={() => setter((value) => value + 1)}>+</button>
    </div>
  )
}

export default Controls