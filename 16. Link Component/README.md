## Link Component in NextJS:

* For **client-side navigation**, Next.js gives us the `<Link>` component.
* The `<Link>` component is a **React component** that extends the HTML `<a>` element, and it's the **primary way** to **navigate** between routes in NextJS.
* To use it, we'll need to import it from **"next/link"**.

- `<Link>` additionally takes a prop called **"replace"**.
- replace will **overrides the current history** instead to adding a new one.

### Example:
```tsx
import Link from "next/link";

export default page = () => {
    return (
        <div>
            <nav>
                <ul>
                    <Link href="/"><li>Home</li></Link>
                    <Link href="/about"><li>About</li></Link>
                    <Link href="/contact"><li>Contact</li></Link>
                </ul>
            </nav>
        </div>
    )
}
```



