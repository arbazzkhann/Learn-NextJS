import React from 'react'

export default function layout({children}: {children: React.ReactNode}) {

  // generating an intentional error
  const myError: boolean = true;
  if(myError) {
    throw new Error("An intentional error occur");
  }

  return (
    <>  
        <header className='bg-gray-600 text-white'>
            <p>I am header of blog.</p>
        </header>
        <main>{children}</main>
        <footer className='bg-green-600 text-black'>
            <p>I am footer of blog.</p>
        </footer>
    </>
  )
}
