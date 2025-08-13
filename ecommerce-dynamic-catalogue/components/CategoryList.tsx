import Image from 'next/image'
import Link from 'next/link'

const CategoryList = () => {
  return (
    <div className="px-4 overflow-x-scroll scrollbar-hide">
      <div className="flex gap-4 md:gap-8">
        <Link href="/" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src="https://i.pinimg.com/1200x/20/29/d5/2029d51d3f51b028d6f0d4b7bab3c44d.jpg"
              alt=""
              fill
              sizes="20vw"
              className="object-cover"
            />
          </div>
          <h1 className="mt-8 font-light text-xl tracking-wide">Smart watch</h1>
        </Link>
        <Link href="/" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src="https://i.pinimg.com/736x/cc/5d/26/cc5d26a7b04387bc0208bfd3660c0dcf.jpg"
              alt=""
              fill
              sizes="20vw"
              className="object-cover"
            />
          </div>
          <h1 className="mt-8 font-light text-xl tracking-wide">Leather Belt</h1>
        </Link>
        <Link href="/" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src="https://i.pinimg.com/1200x/e0/8f/d7/e08fd7d9ccc9d1220b30f57a73de6c17.jpg"
              alt=""
              fill
              sizes="20vw"
              className="object-cover"
            />
          </div>
          <h1 className="mt-8 font-light text-xl tracking-wide">T-shirt</h1>
        </Link>
        <Link href="/" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src="https://i.pinimg.com/1200x/aa/5b/4a/aa5b4a2687a4ae76164d01c49a04df38.jpg"
              alt=""
              fill
              sizes="20vw"
              className="object-cover"
            />
          </div>
          <h1 className="mt-8 font-light text-xl tracking-wide">Wireless Earbuds</h1>
        </Link>
        <Link href="/" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6 ">
          <div className="relative bg-slate-100 w-full h-96">
            <Image
              src="https://i.pinimg.com/1200x/30/ad/f2/30adf29846915cad2d809189e3affa3f.jpg"
              alt=""
              fill
              sizes="20vw"
              className="object-cover"
            />
          </div>
          <h1 className="mt-8 font-light text-xl tracking-wide">Bluetooth Headphone</h1>
        </Link>
      </div>
    </div>
  )
}

export default CategoryList
