'use client';
import Link from 'next/link'
import ProductCard from './components/ProductCard'

export default function Home() {
  return (
    <main>
      <h1>Hello world!</h1>
      <Link href="/users">跳转至用户界面</Link>
      <ProductCard />
    </main>
  )
}
