import React from 'react'
import Script from 'next/script'

const contact = () => {
  return (
    <div>
      <Script>
        {`alert("Welcome to contact page.")`}
      </Script>
      <p>this is contact.</p>
    </div>
  )
}

export default contact