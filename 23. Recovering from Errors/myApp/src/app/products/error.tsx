"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function error({error, reset}: {error: Error, reset: () => void}) {
    const router = useRouter();
    const reload = () => {
        startTransition(() => {
            router.refresh();
            reset();
        })
    }
  return (
    

    <div>
        <h1>Error Occur</h1>
        <h2>Error is: {error.message}</h2>
        <button onClick={() => reload()}>Try again</button>
    </div>
  );
}