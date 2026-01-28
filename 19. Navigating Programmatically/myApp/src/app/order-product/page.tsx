"use client"
import React from 'react'
import { useRouter } from 'next/navigation';

export default function c() {
    const router = useRouter();

    const handleClick = () => {
        console.log("Placing your order");
        router.push('/');
    }

  return (
    <div>
        <h1>Order product</h1>
        <button onClick={handleClick} className="text-red-500">Place order</button>
    </div>
  );
}
