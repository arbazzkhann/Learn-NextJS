import React from 'react'

function layout({children}: {children: React.ReactNode}) {
  return (
    <div>
        <header className='bg-red-500 text-white'>This is header of dashboard</header>
        <main>{children}</main>
        <footer className='bg-blue-500 text-white'>This is footer of dashboard</footer>
    </div>
  )
}

export default layout