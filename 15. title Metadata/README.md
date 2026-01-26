## titile Metadata in NextJS

* The title field's primary purpose is to define the **document title**.
* It can be either a **string** or an **object**.

- You can import **Metadata from next**.
```tsx
import { Metadata } from "next";
```
- It is a **type of Object** having two properties: 1. **title** and 2. **description**.
- **Both properties are optional**.

```tsx
const metadata: Metadata {
    title: "",
    description: ""
}
```

### title as String:

```tsx
export const metadata: Metadata = {
    title: "Hey this is title"
}
```


### title as object:
* It gives three properties:
    1. **default**:
        * default property acts as a **fallback** for any child routes that don't specify their own title.
        * **Example:** If you set the value to "Hello this is default".
            * if any **child route donsn't have their own title** then **Next.js will set this as title**.
        
    2. **template**:
        * It is useful when you want to add consistent prefix or suffixes to your titles.
        * This property applies to child routes

    3. **absolute**
        * absolute is **overriding everything** of parant title

```tsx
export const metadata: Metadata = {
    title: {
        default: "",
        template: "%s | ARBAZ",
        absolute: ""
    }
}
```