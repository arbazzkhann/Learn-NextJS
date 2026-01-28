## params:

* parmas is a **promise** that **resolves to an object containing** the **dynamic route parameters** 
(like - *id*)


## searchParams:

* searchParams is a **promise** that **resolves to an object containing** the **query parameters**
(like - *filters* and *sorting*)

---

* While **page.tsx has access to both** params and searchParams, **layout.tsx only has access to params**.


### Example:

#### Server Component:
```tsx
import Link from 'next/link'

export default async function page({ params, searchParams }: {
    params: Promise<{ articleId: string }>,
    searchParams: Promise<{ lang: "en" | "es" | "fr" }>
}) {
    const { articleId } = await params;
    const { lang = "en" } = await searchParams;

    return (
        <div>
            <h1>News article {articleId}</h1>
            <p>Reading in {lang} </p>

            <div>
                <Link className='m-5' href={`/`}>HOME</Link>
                <Link className='m-5' href={`/article/${articleId}?lang=en`}>English</Link>
                <Link className='m-5' href={`/article/${articleId}?lang=es`}>Spanish</Link>
                <Link className='m-5' href={`/article/${articleId}?lang=fr`}>French</Link>
            </div>
        </div>
    );
}
```


#### Client Component:
Because server component doesn't support ***async await***.


```tsx
import Link from 'next/link'

export default async function page({ params, searchParams }: {
    params: Promise<{ articleId: string }>,
    searchParams: Promise<{ lang: "en" | "es" | "fr" }>
}) {
    const { articleId } = await params;
    const { lang = "en" } = await searchParams;

    return (
        <div>
            <h1>News article {articleId}</h1>
            <p>Reading in {lang} </p>

            <div>
                <Link className='m-5' href={`/`}>HOME</Link>
                <Link className='m-5' href={`/article/${articleId}?lang=en`}>English</Link>
                <Link className='m-5' href={`/article/${articleId}?lang=es`}>Spanish</Link>
                <Link className='m-5' href={`/article/${articleId}?lang=fr`}>French</Link>
            </div>
        </div>
    );
}
```