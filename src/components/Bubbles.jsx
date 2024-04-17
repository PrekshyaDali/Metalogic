import React from 'react'

export default function Bubbles(props) {
  return (
    <div className = {`absolute bottom-10 animate-bubble h-44 w-44 bg-white rounded-full ${props.className}`}></div>
  )
}
