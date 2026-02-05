import React from 'react'

interface Prop {
    params: Promise<{productId: string}>;
}

export default async function page({params}: Prop) {
    const { productId } = await params;

    if(productId === "0") {
        throw new Error("Intentional Error :)");
    }

  return (
    <div>
        <h1>Product id: {productId}</h1>
    </div>
  );
}
