import React from 'react'

interface MyProductId {
    params: Promise<{ productId: string }>
}

async function page({ params }: MyProductId) {
    const productId = (await params).productId;
    return (
        <div>
            This is {productId}'s productId page.
        </div>
    )
}

export default page