import React from 'react'

const page = async ({params}) => {
    const paramsObj = await params;
    const { id, commentId } = paramsObj;
  return (
    <div>
        <p>Id: {id}</p>
        <p>Comment Id: {commentId}</p>
    </div>
  )
}

export default page