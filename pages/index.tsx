import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/products">
        <a>All Products</a>
      </Link>

      <Link href="/buildtest">
        <a>Build Test</a>
      </Link>
    </div>
  );
}
