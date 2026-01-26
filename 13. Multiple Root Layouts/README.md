## 1. Root Layout (app/layout.tsx) :

- This layout **wraps the entire application** and **must include** <u>**html**</u> and <u>**body**</u> tags.

```tsx
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
```

## 2. Nested Dashboard Layout (app/(auth)/layout.tsx) :

- This layout is **nested within the RootLayout**
- It **applies only to routes inside the auth folder** (e.g., /(auth), /(auth)/login).
- It **replaces the children prop** of the **parent RootLayout**.

```tsx
// This layout is a Server Component by default.

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
      {children}
    );
}
```


* When a user visits **/auth/login**, Next.js renders the structure as follows: RootLayout -> AuthLayout -> Login (***app/(auth)/login/page.tsx***). 