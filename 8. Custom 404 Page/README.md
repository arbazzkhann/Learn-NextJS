# Custom 404 Page in NextJS

[YouTube Video Link](https://youtu.be/GCipVDqBD3k?list=PLC3y8-rFHvwhIEc4I4YsRz5C7GOBnxSJY&t=152)

## How to Create:

* Creating a custom 404 page is straightforward and depends on whether you are using the modern App Router (recommended) or the older Pages Router

* **Global Custom 404 Page**:
    * Create a file named **not-found.tsx** (or .jsx) in your root app directory (e.g., *app/not-found.tsx*).
    * This component will automatically be displayed for any URL that doesn't have a matching route in your application.

* **Triggering the 404 Page Programmatically**:
    * Within any route segment, you can call the **notFound()** function from **next/navigation** to display the **closest not-found.tsx** file in the component tree when a specific condition (*like an item not being found in a database*) is met.

* **Using the Pages Router (pages/ directory)** :
    * For applications using the older pages directory, the process involves a different file name. 

* **Global Custom 404 Page**:
    * Create a file named 404.tsx (or .jsx) in your pages directory (e.g., pages/404.tsx).
    * This page is statically generated at build time.


## not-found page doesn't have Props

* We relay on **usePathname** hook from **next/navigation**.
* usePathName is **client component** thats why we have to use "use client".

```tsx
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
```