interface Prop {
    params: Promise<{blogId: string}>
}

export default async function page({params}: Prop) {
    const { blogId } = await params;
    await new Promise(resolve => {
        setTimeout(() => {
            resolve("Intentional Delay");
        }, 5000);
    });
  return (
    <div>
        <h1>His is blod id page and id is: "{blogId}"</h1>
    </div>
  )
}
