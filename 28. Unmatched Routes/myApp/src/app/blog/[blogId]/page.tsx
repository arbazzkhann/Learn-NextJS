interface Prop {
    params: Promise<{blogId: string}>
}

export default async function page({ params }: Prop) {
    const { blogId } = await params;

  return (
    <div>
        <h1 className="font-bold text-5xl">Hello, blogId: "{blogId}"</h1>
    </div>
  );
}