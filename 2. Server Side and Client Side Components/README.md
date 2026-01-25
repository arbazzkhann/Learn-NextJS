## React Server Components (RSC):

* React Server Components is a **new architecture** that was **introduced by the React team** and quickly **adopted by Next.js**

* This architecture introduces a new approach to creating React components by dividing them into two distinct types:

    - **<u>Server components</u> :**
        * By default, Next.js treats **all components as server components**.
        * These components can **perform server-side tasks** like **reading files** or **fetching data directly from a database**.
    
    - **<u>Client components</u> :**
        * To **create a client components**, you'll need to add the **"use client"** directive at the top of your components file.
        * While client components **can't perform server-side tasks** like reading files, they can **use hooks** and **handle user interactions**.