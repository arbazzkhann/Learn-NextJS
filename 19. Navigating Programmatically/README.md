# Navigating Programmatically

## 1. useRouter
- The useRouter hook is primarily used for programmatic navigation, especially in Client Components where the standard **`<Link>` component is insufficient**.

* useRouter is **react hook** thats why its a **client component**.

* Import:
    * **App Router** (recommended in modern Next.js): Import from **next/navigation**.
    * **Pages Router:** Import from **next/router**.

* useRouter Methods:
    * **router.push(href, options)** to add a new history entry
    * **router.replace(href, options)** to replace the current history entry
    * **router.back()** and **router.forward()** for navigating browser history
    * **router.refresh()** to refresh the current route while preserving client-side state. 

* In the App Router, specific hooks are used to obtain route information: 
    * **usePathname()** provides the current URL's path, and 
    * **useSearchParams()** returns an object of the current URL's query parameters. 

### Example:

```tsx
"use client"; // Marks the component as a Client Component

import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();

  const handleNavigation = () => {
    // Navigate to the dashboard page
    router.push('/dashboard');
  };

  return (
    <button type="button" onClick={handleNavigation}>
      Go to Home
    </button>
  );
}

```


## 2. redirect

```tsx
//Import
import { redirect } from "next/navigation";

//Use
redirect("href")
```
