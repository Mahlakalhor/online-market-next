import Image from "next/image";
import Link from "next/link";
const categories = [
  {
    title: "Bakery & Breads",
    image: "/Img/bakery.png",
    href: "/products?cat=bakery",
    bg: "bg-[#E0F6FE]",
  },
  {
    title: "Dairy Products",
    image: "/Img/dairy.png",
    href: "/products?cat=dairy",
    bg: "bg-[#FEE6CD]",
  },
  {
    title: "Cold Drinks",
    image: "/Img/drinks.png",
    href: "/products?cat=drinks",
    bg: "bg-[#F0F5DE]",
  },
  {
    title: "Fresh Fruits",
    image: "/Img/fruits.png",
    href: "/products?cat=fruits",
    bg: "bg-[#FEE0E0]",
  },
  {
    title: "Grains & Cereals",
    image: "/Img/grains.png",
    href: "/products?cat=grains",
    bg: "bg-[#F1E3F9]",
  },
  {
    title: "Instant Food",
    image: "/Img/instant.png",
    href: "/products?cat=instant",
    bg: "bg-[#E1F5EC]",
  },
];

export default function Home() {
  return (
    <>
      <section className="px-6 md:px-16 lg:px-24 xl:px-32 mt-10">
        <div className="relative w-full overflow-hidden rounded-2xl">
          <Image
            src="/Img/banner.png"
            alt="banner"
            width={1600}
            height={520}
            className="w-full h-auto"
            priority
          />

          <div className="absolute inset-0 flex items-center">
            <div className="px-6 md:px-12 lg:px-16 max-w-xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Freshness You Can Trust, Savings You Will Love!
              </h1>

              <div className="mt-6 flex items-center gap-4">
                <Link
                  href="/products list"
                  className="inline-flex items-center gap-2 px-7 py-3 bg-[#4fbf8b] hover:bg-[#419f73] transition rounded text-white font-medium"
                >
                  Shop now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-16 lg:px-24 xl:px-32 mt-16">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl md:text-3xl font-medium">Categories</h2>
          <Link
            href="/products"
            className="text-sm text-gray-600 hover:text-gray-900"
          >
            View all
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 mt-6">
          {categories.map((cat) => (
            <Link
              key={cat.title}
              href={cat.href}
              className={`${cat.bg} group rounded-xl py-6 px-3 flex flex-col items-center justify-center gap-3 cursor-pointer`}
            >
              <Image
                src={cat.image}
                alt={cat.title}
                width={110}
                height={110}
                className="transition group-hover:scale-105"
              />
              <p className="text-sm font-medium text-center">{cat.title}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-16 lg:px-24 xl:px-32 mt-24">
        <div className="relative w-full overflow-hidden rounded-2xl">
          <Image
            src="/Img/bottom_banner.png"
            alt="bottom banner"
            width={1600}
            height={520}
            className="w-full h-auto"
            priority
          />

          <div className="absolute inset-0 flex items-center justify-end">
            <div className="pr-10 max-w-lg">
              <h2 className="text-2xl font-semibold text-primary mb-6">
                Why We Are the Best?
              </h2>
              <div className="flex items-start gap-4 mt-3">
                <Image
                  src="/Img/delivery_truck_icon.svg"
                  alt="delivery icon"
                  width={44}
                  height={44}
                />
                <div>
                  <h3 className="text-lg font-semibold">Fastest Delivery</h3>
                  <p className="text-gray-500/70 text-sm">
                    Groceries delivered in under 30 minutes.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 mt-3">
                <Image
                  src="/Img/leaf_icon.svg"
                  alt="freshness icon"
                  width={44}
                  height={44}
                />
                <div>
                  <h3 className="text-lg font-semibold">
                    Freshness Guaranteed
                  </h3>
                  <p className="text-gray-500/70 text-sm">
                    Fresh produce straight from the source.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 mt-3">
                <Image
                  src="/Img/coin_icon.svg"
                  alt="price icon"
                  width={44}
                  height={44}
                />
                <div>
                  <h3 className="text-lg font-semibold">Affordable Prices</h3>
                  <p className="text-gray-500/70 text-sm">
                    Quality groceries at unbeatable prices.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 mt-3">
                <Image
                  src="/Img/trust_icon.svg"
                  alt="trust icon"
                  width={44}
                  height={44}
                />
                <div>
                  <h3 className="text-lg font-semibold">
                    Trusted by Thousands
                  </h3>
                  <p className="text-gray-500/70 text-sm">
                    Loved by 10,000+ happy customers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-24 pb-14 flex flex-col items-center justify-center text-center space-y-3 px-6">
        <h1 className="text-3xl font-medium">Never Miss a Deal!</h1>

        <p className="text-gray-500/80 pb-6">
          Subscribe to get the latest offers, new arrivals, and exclusive
          discounts
        </p>

        <div className="flex items-center w-full max-w-2xl h-12">
          <input
            type="text"
            placeholder="Enter your email id"
            className="flex-1 h-full border border-gray-500/30 rounded-l-md px-4 outline-none text-gray-600"
          />

          <button className="h-full px-8 bg-primary text-white rounded-r-md bg-[#4fbf8b] transition">
            Subscribe
          </button>
        </div>
      </section>
    </>
  );
}
