"use client"
import React from 'react'

export default function globalError({error}: {error: Error}) {
  return (
    <div>
        <h1>global-error</h1>
        <h2>Error: {error.message}</h2>
    </div>
  );
}