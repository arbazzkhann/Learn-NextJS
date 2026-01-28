import Link from 'next/link'
import { use } from 'react';

export default function page({ params, searchParams }: {
    params: Promise<{ articleId: string }>,
    searchParams: Promise<{ lang: "en" | "es" | "fr" }>
}) {
    const { articleId } = use(params);
    const { lang = "en" } = use(searchParams);

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
    )
}