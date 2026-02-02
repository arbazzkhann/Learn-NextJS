import { getRandomValues } from 'crypto';
import React from 'react'

interface Prop {
    params: Promise<{blogId: string}> 
}

export default async function page({params}: Prop) {
    const { blogId } = await params;

    //generating intentional error
    const myError: boolean = true
    if(myError) {
        throw new Error("Intentional Error occurred!");
    }

    return (
        <div>
            <h2>This is the "{blogId}"'s blog page</h2>
        </div>
    );
}