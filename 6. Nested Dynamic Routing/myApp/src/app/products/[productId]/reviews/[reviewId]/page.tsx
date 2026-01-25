import React from 'react'

interface MyReviwId {
    params: Promise<{ reviewId: string, productId: string }>
}

async function page({ params }: MyReviwId) {
    const {reviewId, productId }= await params;

    return (
        <div>
            <h2>Review {reviewId} for Product {productId}</h2>
        </div>
    )
}

export default page