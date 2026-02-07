# Handling Errors in Layouts

- To **handle errors** within a specific layout (***layout.js*** or ***template.js***) and **its children**, place an `error.js` file in that **layout's parent segment**.

- **Mechanism:** The error.js file acts as an error boundary for all nested components beneath it in the file hierarchy. It displays a fallback UI when an error occurs within that segment, while keeping higher-level layouts interactive.

- **Location Example:** If an error occurs in `app/dashboard/layout.js`, the `app/dashboard/error.js` **will not catch it** because the **error boundary is nested inside the layout component itself**. Instead, the error.js in the `app/error.js` (***or a higher-level parent***) would **catch it**.