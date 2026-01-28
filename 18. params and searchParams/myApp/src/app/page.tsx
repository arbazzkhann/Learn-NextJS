import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Welcome Home</h1>
      {/* <Link href="/blog">Blog</Link>
      <Link href="/products">Products</Link> */}
      <Link className='m-5' href="/article/id?language=en">Read in English</Link>
      <Link className='m-5' href="/article/id?language=es">Read in Spanish</Link>
      <Link className='m-5' href="/article/id?language=fr">Read in French</Link>
    </div> 
  );
}
