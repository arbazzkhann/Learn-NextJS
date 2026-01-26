## Routing Metadata

* The Metadata API in Next.js is a powerful feature that lets us **define metadata for each page**.
* Metadata ensures our content looks great when it's shared or **indexed by search engines**.

- Two ways to handle metadata in **layout.tsx** or **page.tsx** files:
    1. export a ***static metadata object***.
    2. export a ***dynamic generateMetadata function***.

* <u>**Note:**</u>:
    - *You cannot use both at same time*.
    - *You cannot use with **"use client"** directive*.

## Configuring metadata:

* <u>**Metadata rules**</u>:
    - Both **layout.tsx** and **page.tsx** can export metadata. 
    - **layout.tsx** metadata applies to **all its pages**.
    - While **page.tsx metadata** is **specific to that page**.

    * **Metadata follows a *top-down* order**, starting from the **root level**.
    * When **Metadata exists in multiple places** along a route, they **merge together**.
    * With **page Metadata overriding** **layout metadata** for **matching properties**.

### Example (Static Metadata):

```tsx
export const metadata = {
    title: "About Arbaz Khan",
    description: "I am description of Arbaz Khan"
}
```

### Example (Dynamic Metadata):

```tsx
type Props = {
    params: Promise<{productId: string}>
}

export const generateMetadata = async ({ params } : Props): Promise<Metadata> => {
    const { productId } = await params;

    return {
        title: `Product ${productId}`
    }
}
```


### Real World Example:

* In eCommerce web application where you might have a product catalog, you could fetch the product details within this function and set the titlte accordingly.

```tsx
import { Metadata } from 'next';

type Props = {
    params: Promise<{productId: string}>
}

export const generateMetadata = async ({ params } : Props): Promise<Metadata> => {
    const { productId } = await params;
    const title: string = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(`iPhone ${productId}`);
        }, 100)
    })

    return {
        title
    }
}
```