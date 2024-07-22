import React from 'react'

const Card = (props) => {
  return (
    <div className={`${props.bg} p-6 rounded-lg shadow-md`}>
       {props.children}
    </div>
  )
}

Card.defaultProps = {
    bg: "bg-gray-100"
}

export default Card
