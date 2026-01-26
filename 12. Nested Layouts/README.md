# Nested Layouts in NextJS

## Example:

* Consider an application with a main website and a separate dashboard section. You can implement this with the following file structure:

### File Structure:

```txt
app/
├── layout.tsx         // Root Layout (applies to all pages)
├── page.tsx           // Home page (uses Root Layout)
├── dashboard/
│   ├── layout.tsx     // Dashboard Layout (applies to /dashboard/* routes)
│   ├── page.tsx       // Dashboard index page (/dashboard)
│   ├── settings/
│   │   ├── page.tsx   // Settings page (/dashboard/settings)
│   │   └── layout.tsx // Optional: Further nested layout for settings
└── (other-routes)/
```