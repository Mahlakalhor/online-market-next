"use client";

import type { Product } from "@/api/getproduct";

type Props = {
  product: Product;
};

export default function ProductDetails({ product }: Props) {
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 mt-10">
      <div className="flex flex-col md:flex-row gap-16">
        {/* Images */}
        <div className="flex gap-3">
          <div className="flex flex-col gap-3">
            {product.image.map((img, i) => (
              <div
                key={i}
                className="border max-w-24 border-gray-500/30 rounded overflow-hidden cursor-pointer"
              >
                <img src={img} alt={product.name} />
              </div>
            ))}
          </div>

          <div className="border border-gray-500/30 max-w-[420px] rounded overflow-hidden">
            <img src={product.image[0]} alt="Selected product" />
          </div>
        </div>

        <div className="text-sm w-full md:w-1/2">
          <h1 className="text-3xl font-medium">{product.name}</h1>

          <div className="flex items-center gap-1 mt-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <img
                key={i}
                src="/Img/star.svg"
                className="w-4"
                style={{
                  opacity: i < 4 ? 1 : 0.35,
                  filter:
                    "brightness(0) saturate(100%) invert(63%) sepia(41%) saturate(559%) hue-rotate(104deg) brightness(92%) contrast(90%)",
                }}
              />
            ))}
            <p className="text-base ml-2">(4)</p>
          </div>

          <div className="mt-6">
            <p className="text-gray-500/70 line-through">
              MRP: ${product.price}
            </p>
            <p className="text-2xl font-medium text-[#4fbf8b]">
              ${product.offerPrice}
            </p>
            <span className="text-gray-500/70">(inclusive of all taxes)</span>
          </div>

          <p className="text-base font-medium mt-6">About Product</p>
          <ul className="list-disc ml-4 text-gray-500/70">
            {p.description.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>

          <div className="flex items-center mt-10 gap-4 text-base">
            <button className="w-full py-3.5 font-medium bg-gray-100 text-gray-800/80 hover:bg-gray-200 transition">
              Add to Cart
            </button>

            <button className="w-full py-3.5 font-medium bg-[#4fbf8b] text-white hover:opacity-90 transition">
              Buy now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
