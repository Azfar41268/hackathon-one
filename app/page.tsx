import Hero from "./components/hero"
import Promotions from "./components/promotions"
import Products from "./components/products"
import Designer from "./components/designer"
import NewsLetter from "./components/newsletter"

export default function Home() {
  return (
    <div className='h-full'>
      <Hero />
      <Promotions />
      <Products />
      <Designer />
      <NewsLetter />
    </div>
  )
}
