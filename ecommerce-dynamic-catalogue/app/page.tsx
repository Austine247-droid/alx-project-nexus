// "use client";

import CategoryList from '@/components/CategoryList'
import ProductList from '@/components/ProductList'
import Slider from '@/components/Slider'

const HomePage = () => {
  return (
    <div>
      {/* Hero Slider */}
      <Slider />

      {/* Featured Products */}
      <section className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl mb-6">Featured Products</h1>
        <ProductList />
      </section>

      {/* Categories */}
      <section className="mt-24">
        <h1 className="text-2xl px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mb-12">Categories</h1>
        <CategoryList />
      </section>

      {/* New Products */}
      <section className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl mb-6">New Products</h1>
        <ProductList />
      </section>
    </div>
  )
}

export default HomePage
