import Image from 'next/image'
import Link from 'next/link'

// Example static product data
const products = [
  {
    id: 1,
    name: 'Cool Sneakers',
    price: 49.99,
    slug: 'cool-sneakers',
    mainImage: 'https://i.pinimg.com/1200x/26/5c/dd/265cdda32e494abb2c7ba41901c27f5d.jpg',
    secondImage: 'https://i.pinimg.com/1200x/67/48/7e/67487ee324a5b45474b3630909cc17c8.jpg',
    description: 'Comfortable and stylish sneakers for everyday wear.',
  },
  {
    id: 2,
    name: 'Stylish Backpack',
    price: 39.99,
    slug: 'stylish-backpack',
    mainImage: 'https://i.pinimg.com/1200x/3e/82/8f/3e828f5d730c60e48ba7ac580ebcbf74.jpg',
    secondImage: 'https://i.pinimg.com/736x/f1/82/e9/f182e9f547300fc44124e946bbad8771.jpg',

    description: 'Durable backpack perfect for travel or school.',
  },
  {
    id: 3,
    name: 'Classic T-Shirt',
    price: 19.99,
    slug: 'classic-tshirt',
    mainImage: 'https://i.pinimg.com/1200x/f6/71/2b/f6712bb54bc9ef5318009c2727896da8.jpg',
    secondImage: 'https://i.pinimg.com/1200x/65/f1/12/65f1129d80982f1aaa21ec9105aa191e.jpg',

    description: 'Soft cotton t-shirt with a timeless design.',
  },
  {
    id: 4,
    name: 'Leather Wallet',
    price: 29.99,
    slug: 'Leather Wallet',
    mainImage: 'https://i.pinimg.com/736x/02/7e/33/027e33c3f16816cf1422b9cb2e102b7c.jpg',
    secondImage: 'https://i.pinimg.com/736x/c4/c4/7b/c4c47b6f8cded2add6220e466708a799.jpg',

    description: 'Slim and durable wallet made from genuine leather.',
  },
  {
    id: 5,
    name: 'Sports Watch',
    price: 59.99,
    slug: 'sports-watch',
    mainImage: 'https://i.pinimg.com/1200x/81/96/43/8196431117538b3c8539c22e1c1d157e.jpg',
    secondImage: 'https://i.pinimg.com/1200x/5b/be/c8/5bbec8f38c7a49b659cf028316ce2818.jpg',

    description: 'Water-resistant watch with a modern sporty look.',
  },
  {
    id: 6,
    name: 'Wireless Earbuds',
    price: 89.99,
    slug: 'WireLess Earbuds',
    mainImage: 'https://i.pinimg.com/736x/25/b9/83/25b9831c748b9af40ba25b98725b8d0b.jpg',
    secondImage: 'https://i.pinimg.com/736x/26/5c/dd/265cdda32e494abb2c7ba41901c27f5d.jpg',

    description: 'High-quality earbuds with noise cancellation.',
  },
  {
    id: 7,
    name: 'Yoga Mat',
    price: 24.99,
    slug: 'yoga-mat',
    mainImage: 'https://i.pinimg.com/736x/83/c5/4a/83c54a63a72144c8c99304f2b92864d4.jpg',
    secondImage: 'https://i.pinimg.com/736x/26/5c/dd/265cdda32e494abb2c7ba41901c27f5d.jpg',

    description: 'Non-slip yoga mat for all types of exercises.',
  },
  {
    id: 8,
    name: 'Travel Mug',
    price: 14.99,
    slug: 'travel-mug',
    mainImage: 'https://i.pinimg.com/1200x/34/aa/bc/34aabc11d644e6ae446c645f49810fe0.jpg',
    secondImage: 'https://i.pinimg.com/736x/26/5c/dd/265cdda32e494abb2c7ba41901c27f5d.jpg',

    description: 'Insulated mug to keep your drinks hot or cold.',
  },
  {
    id: 9,
    name: 'Bluetooth Speaker',
    price: 44.99,
    slug: 'bluetooth-speaker',
    mainImage: 'https://i.pinimg.com/736x/25/b9/83/25b9831c748b9af40ba25b98725b8d0b.jpg',
    secondImage: 'https://i.pinimg.com/736x/26/5c/dd/265cdda32e494abb2c7ba41901c27f5d.jpg',

    description: 'Portable speaker with rich, clear sound.',
  },
  {
    id: 10,
    name: 'Denim Jacket',
    price: 69.99,
    slug: 'denim-jacket',
    mainImage: 'https://i.pinimg.com/736x/25/b9/83/25b9831c748b9af40ba25b98725b8d0b.jpg',
    secondImage: 'https://i.pinimg.com/736x/26/5c/dd/265cdda32e494abb2c7ba41901c27f5d.jpg',

    description: 'Classic denim jacket for casual and trendy looks.',
  },
]

const ProductList = () => {
  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      {products.map(product => (
        <Link
          href={`/${product.slug}`}
          className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
          key={product.id}
        >
          <div className="relative w-full h-80">
            <Image
              src={product.mainImage}
              alt={product.name}
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity ease duration-500"
            />
            <Image
              src={product.secondImage}
              alt={product.name}
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md"
            />
          </div>
          <div className="flex justify-between">
            <span className="font-medium">{product.name}</span>
            <span className="font-semibold">${product.price}</span>
          </div>
          <div className="text-sm text-gray-500">{product.description}</div>
          <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-lama hover:text-white">
            Add to Cart
          </button>
        </Link>
      ))}
    </div>
  )
}

export default ProductList
