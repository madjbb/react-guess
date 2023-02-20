import React from 'react'

function Button({text, handler}) {
  return (
    <Button onClick={handler}>{text}</Button>
  )
}

export default Button