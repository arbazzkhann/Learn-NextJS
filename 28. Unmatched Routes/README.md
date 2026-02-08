# Unmatched Routes

## Navigation from the UI:

- When navigating through the UI (like clicking links), Next.js keeps showing whatever was in the unmatched routes slots before.

- **<ins>Page Reload</ins>**:
Next.js looks for a `default.tsx` file in each unmatched slot.

- **This file is critical** as **it serves as a fallback** to render content **when the framework cannot retrieve a slot's active state** ***from the current URL***.

- **Without the file**, you'll get the **404 error**.