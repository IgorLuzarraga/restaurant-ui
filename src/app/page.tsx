import FeaturedProducts from '@/components/FeaturedProducts'
import Offer from '@/components/Offer'
import Slider from '@/components/Slider'

export default function Home() {
  return (
    <main>
      <Slider />
      <FeaturedProducts />
      <Offer />
    </main>
  )
}
