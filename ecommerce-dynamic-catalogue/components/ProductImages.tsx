'use client'

import Image from 'next/image'
import { useState } from 'react'

const images = [
  {
    id: 1,
    url: 'https://i.pinimg.com/1200x/30/ad/f2/30adf29846915cad2d809189e3affa3f.jpg',
  },
  {
    id: 2,
    url: 'https://i.pinimg.com/1200x/30/ad/f2/30adf29846915cad2d809189e3affa3f.jpg',
  },
  {
    id: 3,
    url: 'https://i.pinimg.com/1200x/30/ad/f2/30adf29846915cad2d809189e3affa3f.jpg',
  },
  {
    id: 4,
    url: 'https://i.pinimg.com/1200x/30/ad/f2/30adf29846915cad2d809189e3affa3f.jpg',
  },
]

const ProductImages = () => {
  const [index, setIndex] = useState(0)

  return (
    <div>
      {/* Main Image */}
      <div className="h-[500px] relative">
        <Image
          src={images[index].url}
          alt={`Product image ${index + 1}`}
          fill
          sizes="50vw"
          className="object-cover rounded-md"
        />
      </div>

      {/* Thumbnail Images */}
      <div className="flex justify-between gap-4 mt-8">
        {images.map((img, i) => (
          <div
            key={img.id}
            className={`relative w-24 h-24 cursor-pointer rounded-md overflow-hidden border-2 transition-all ${
              i === index ? 'border-blue-500' : 'border-transparent'
            }`}
            onClick={() => setIndex(i)}
          >
            <Image
              src={img.url}
              alt={`Thumbnail ${i + 1}`}
              fill
              sizes="20vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductImages
