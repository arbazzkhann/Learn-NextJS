interface MyParamsSlug {
    params: Promise<{slug: string[]}>
} 

async function page( {params}: MyParamsSlug ) {
    const {slug} = await params;

    if(slug?.length === 2) {
        return <h1>This is Feature "{slug[0]}" and Concept "{slug[1]}"</h1>
    }
    else if(slug?.length === 1) {
        return <h1>This is Feature "{slug[0]}"</h1>
    }

    return (
        <h1>Docs home page.</h1>
    )
}

export default page