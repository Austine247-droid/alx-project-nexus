import ProductImages from '@/components/ProductImages'

const products = [
  {
    id: 1,
    name: 'Cool Sneakers',
    price: 49.99,
    slug: 'cool-sneakers',
    mainImage: '/product.png',
    secondImage: '/product.png',
    description: 'Comfortable and stylish sneakers for everyday wear.',
  },
  {
    id: 2,
    name: 'Stylish Backpack',
    price: 39.99,
    slug: 'stylish-backpack',
    mainImage: '/product.png',
    secondImage: '/product.png',
    description: 'Durable backpack perfect for travel or school.',
  },
  {
    id: 3,
    name: 'Classic Watch',
    price: 89.99,
    slug: 'classic-watch',
    mainImage: '/product.png',
    secondImage: '/product.png',
    description: 'Elegant watch to complement any outfit.',
  },
]

interface SinglePageProps {
  params: { slug: string }
}
export default async function SinglePage({ params }: SinglePageProps) {
  const product = products.find(p => p.slug === params.slug)

  if (!product) {
    return <p>No product is found</p>
  }

  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      {/* IMG */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages />
      </div>
      {/* TEXTS */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">product name</h1>
        <p className="text-gray-500">product description</p>
        <div className="h-[2px] bg-gray-100" />
        <h2 className="font-medium text-2xl">product price </h2>
        <div className="flex items-center gap-4">
          <h3 className="text-xl text-gray-500 line-through">$100</h3>
          <h2 className="font-medium text-2xl">$25</h2>
        </div>
      </div>
    </div>
  )
}
