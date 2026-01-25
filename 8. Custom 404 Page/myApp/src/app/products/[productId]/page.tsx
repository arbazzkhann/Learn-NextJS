import { notFound } from "next/navigation";

interface MyProductId {
  params: Promise<{productId: string}>
}

const page = async ({params}: MyProductId) => {
  const { productId } = await params;

  if(parseInt(productId) > 1000) {
    notFound();
  }

  return (
    <div>ProductId is {productId}</div>
  )
}

export default page