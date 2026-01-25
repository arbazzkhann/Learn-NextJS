interface MyParams {
  params: Promise<{productId: string}>
}

const page = async ({ params }: MyParams) => {

  const productId = (await params).productId

  return (
    <div>
      This is the ProductId: {productId}
    </div>
  )
}

export default page