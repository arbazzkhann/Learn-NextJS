import React from 'react'

function layout({children}: {children: React.ReactNode}) {
  return (
    <div>
        <header className='bg-green-500 text-white'>This is header of settings</header>
        <main>{children}</main>
        <footer className='bg-yellow-500 text-white'>This is footer of settings</footer>
    </div>
  )
}

export default layout