## Recovering from Errors:

- The **error.tsx** file defines a **Client Component** that **acts as an error boundary** for a **specific route** segment and **its nested children**. 

- **error prop:** Error object **containing details about the exception**. In production, server-side errors have generic messages for security, but include a digest property you can use to match server-side logs.

- **reset prop:** This **function** is provided to **attempt a recovery**. ***When called*** (e.g., *by a "Try again" button*), it tries to re-render the contents of the error boundary. If the cause of the error was temporary, this may resolve the issue without a full page reload. 