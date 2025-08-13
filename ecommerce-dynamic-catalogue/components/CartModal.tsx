'use client'

import Image from 'next/image'

const CartModal = () => {
  // TEMPORARY
  const cartItems = true

  return (
    <div className="w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20">
      {!cartItems ? (
        <div className="">Cart is Empty</div>
      ) : (
        <>
          <h2 className="text-xl">Shopping Cart</h2>
          {/* LIST */}
          <div className="flex flex-col gap-8">
            {/* ITEM */}
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="flex items-center gap-4">
                <Image
                  src="https://i.pinimg.com/1200x/30/ad/f2/30adf29846915cad2d809189e3affa3f.jpg"
                  alt="Product Image"
                  width={50}
                  height={50}
                  className="rounded-md"
                />
                <div className="flex flex-col">
                  <span className="font-semibold">Product Name</span>
                  <span className="text-gray-500 text-sm">Quantity: 1</span>
                </div>
                <span className="ml-auto font-semibold">$20.00</span>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default CartModal
