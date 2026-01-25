# Layouts

* Pages are route-specific UI Components.
* A layout is UI that is shared between multiple pages in your app.
    (like header and footer, they are appear on every page).

## How to create layout:

* Default export a React component from **layout.jsx** or **layout.tsx**.
* That component **takes a children prop**, which Next.js will **populate with your page content**.

- In app directory **layout.tsx** is created by default.
- This layout file is **mantatory**.
- It also called a **root layout**.

* Every layout component **need children prop**. (page content will go)
* **page.tsx** will be the **children of layout component**.