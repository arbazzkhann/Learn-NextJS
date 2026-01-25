# Private Folders in NextJS

* A way to tell NextJS, **"Hey, this folder is just for internal stuff - don't include it in the routing system"**.

* The **folder** and **sub-folders** are **excluded from routing**.

* Add an **underscrore at the start of the folder name** (ex., *_lib, _myPrivateDir*, etc).


## Benefits of Private Folders:

- Keeping your **UI logic seprate** from routing logic.
- Having a consistent way to **organize internal files** in your project.
- Making it **easier to group related files** in your code editor.
- **Avoding potential naming conflicts** with future Next.js file naming conventions.

TIP: If you actually want an underscore in your URL, use "**%5F**" instead. That's just the URL-encoded version of an underscore.