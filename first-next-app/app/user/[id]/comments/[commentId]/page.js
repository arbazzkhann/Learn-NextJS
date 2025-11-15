import React from 'react'

const page = async ({params}) => {
    const paramsObj = await params;
    const { id, commentId } = paramsObj;
  return (
    <div>localhost:3000/user/<b>{id}</b>/<b>{commentId}</b></div>
  )
}

export default page