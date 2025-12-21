import type { Product } from "@/api/getproduct";

type Props = {
  products: Product[];
};

export default function ProductsList({ products }: Props) {
  return (
    <section className="mt-16 px-6 md:px-16 lg:px-24 xl:px-32">
      <p className="text-2xl md:text-3xl font-medium">All Products</p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-6 lg:grid-cols-5 mt-6">
        {products.map((p) => (
          <div
            key={p._id}
            className="border border-gray-500/20 rounded-md max-w-54 md:px-4 px-3 py-2"
          >
            <div className="group cursor-pointer flex items-center justify-center py-2">
              <img
                className="group-hover:scale-105 transition max-w-26 md:max-w-36"
                alt={p.name}
                src={p.image?.[0]}
              />
            </div>

            <div className="text-gray-500/60 text-sm">
              <p>{p.category}</p>

              <p className="text-gray-700 font-medium text-lg truncate w-full">
                {p.name}
              </p>

              <div className="flex items-center gap-1 mt-1">
                {Array.from({ length: 5 }).map((_, i) => {
                  const rating = p.rating ?? 4;
                  const filled = i < Math.round(rating);

                  return (
                    <img
                      key={i}
                      src="/Img/star.svg"
                      alt="star"
                      className="w-3.5 h-3.5"
                      style={{
                        opacity: filled ? 1 : 0.35,
                        filter:
                          "brightness(0) saturate(100%) invert(63%) sepia(41%) saturate(559%) hue-rotate(104deg) brightness(92%) contrast(90%)",
                      }}
                    />
                  );
                })}

                <p className="text-gray-500/60">
                  ({p.rating ? Math.round(p.rating) : 4})
                </p>
              </div>

              <div className="flex items-end justify-between mt-2">
                <p className="md:text-xl text-base font-medium text-[#4fbf8b]">
                  ${p.offerPrice}
                  {p.offerPrice < p.price && (
                    <span className="text-gray-500/60 md:text-sm text-xs line-through ml-1">
                      ${p.price}
                    </span>
                  )}
                </p>

                <button className="flex items-center cursor-pointer justify-center gap-1 bg-[#4fbf8b]/10 border border-[#4fbf8b]/40 px-2 md:w-20 w-16 h-8.5 rounded text-[#4fbf8b]">
                  <img
                    src="/Img/basket.svg"
                    alt="basket"
                    className="w-3.5 h-3.5"
                    style={{
                      filter:
                        "brightness(0) saturate(100%) invert(63%) sepia(41%) saturate(559%) hue-rotate(104deg) brightness(92%) contrast(90%)",
                    }}
                  />
                  Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
