import React from 'react';
// import 

const page = async ({params}) => {
    const { id } = await params
  return (
    <div>Your id is {id}</div>
  )
}

export default page