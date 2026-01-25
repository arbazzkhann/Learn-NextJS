'use client'
import { usePathname } from "next/navigation"

function notFound() {
  const pathname = usePathname();
  const productId = pathname.split('/')[2];

  return (
    <>
      <div>Page for "{productId}" is Not Found!</div>
    </>
  )
}

export default notFound