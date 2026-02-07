"use client"
import React from 'react'

export default function error({error}: {error: Error}) {  

  return (
    <div>
        <h1 className='text-bold font-2xl'>{error.message}</h1>
    </div>
  );
}