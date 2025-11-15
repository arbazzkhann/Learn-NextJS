import React from 'react'

const page = async ({params}) => {
  const { id } = await params;

  return (
    <div>localhost:3000/user/<b>{id}</b>/comments</div>
  )
}

export default page