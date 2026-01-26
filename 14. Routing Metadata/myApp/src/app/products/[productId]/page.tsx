import { Metadata } from 'next';

//type of Props
type Props = {
    params: Promise<{productId: string}>
}

//for dynamic metadata
export const generateMetadata = async ({ params } : Props): Promise<Metadata> => {
    const { productId } = await params;
    const title: string = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(`iPhone ${productId}`);
        }, 100)
    })

    return {
        title
    }
}

///main export module
export default async function page({ params }: Props) {
    const { productId } = await params;

    return (
        <div>This is product page, and productId is {productId}</div>
    )
}