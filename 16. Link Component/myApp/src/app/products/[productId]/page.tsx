type Props = {
    params: Promise<{productId: string}>
}

export default async function page({params}: Props) {
    const { productId } = await params;

    return (
        <div>
            <h1>Hello this is product is: {productId}</h1>
        </div>
    )
}
