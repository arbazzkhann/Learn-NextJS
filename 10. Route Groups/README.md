# Route Groups

* It let us logically **organize our routes** and **project files** without impacting the URL structure.

* Create by naming a folder with **parentheses**, like (marketing) or (auth) within the app directory.

* Lets implement authentication routes under **auth directory**:
    - Register
    - Login
    - Forgot password

    * Now we can access our routes: **/auth/register**, **/auth/login**, and **/auth/forgot-password**.


## Folder Structure:

```txt
app/
└─── (auth)/
    ├── register/
    │   └── page.tsx
    ├── login/
    │   └── page.tsx
    └── forgot-password/
        └── page.tsx
```