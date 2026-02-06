## Handling Errors in Nested Routes:

- Errors **always bubble up** to **find** the **closest parent error boundary**.

- An **error.tsx** file **handles errors** not just for its own folder, but for **all the nested child** segment below it too.

- By **strategically placing *error.tsx*** files at **different levels** in your **route folders**, you can **control exactly how detailed your error handling gets**.

- **Where you put your error.tsx file** makes a huge difference - **it determines exactly which parts of your UI get affected** when things go wrong.