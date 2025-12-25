"use client";
import { ToastContainer, toast } from "react-toastify";
import Link from "next/link";

type Product = {
  _id: string;
  name: string;
  image: string[];
  offerPrice: number;
  price: number;
  weight?: string;
};

type CartItem = {
  product: Product;
  qty: number;
};

const dummyCart: CartItem[] = [
  {
    product: {
      _id: "1",
      name: "Carrot 500g",
      image: [
        "https://raw.githubusercontent.com/avinashdm/gs-images/main/greencart/eljxcdud6fduwfim5rdx.png",
      ],
      offerPrice: 44,
      price: 50,
      weight: "N/A",
    },
    qty: 3,
  },
];

export default function ShoppingCart() {
  const items = dummyCart;

  const itemsCount = items.reduce((sum, it) => sum + it.qty, 0);
  const priceTotal = items.reduce(
    (sum, it) => sum + (it.product.offerPrice ?? it.product.price) * it.qty,
    0
  );

  const tax = +(priceTotal * 0.02).toFixed(2);
  const total = +(priceTotal + tax).toFixed(2);

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32">
      <div className="flex flex-col md:flex-row mt-16 gap-10">
        {/* LEFT: Items */}
        <div className="flex-1 max-w-4xl">
          <h1 className="text-3xl font-medium mb-6">
            Shopping Cart{" "}
            <span className="text-sm text-primary">{itemsCount} Items</span>
          </h1>

          <div className="grid grid-cols-[2fr_1fr_1fr] text-gray-500 text-base font-medium pb-3">
            <p className="text-left">Product Details</p>
            <p className="text-center">Subtotal</p>
            <p className="text-center">Action</p>
          </div>

          <div className="space-y-4">
            {items.map(({ product, qty }) => {
              const unit = product.offerPrice ?? product.price;
              const subtotal = unit * qty;

              return (
                <div
                  key={product._id}
                  className="grid grid-cols-[2fr_1fr_1fr] text-gray-500 items-center text-sm md:text-base font-medium pt-3"
                >
                  <div className="flex items-center md:gap-6 gap-3">
                    <div className="cursor-pointer w-24 h-24 flex items-center justify-center border border-gray-300 rounded overflow-hidden bg-white">
                      <img
                        src={product.image?.[0] ?? ""}
                        alt={product.name}
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div>
                      <p className="hidden md:block font-semibold text-gray-800">
                        {product.name}
                      </p>

                      <div className="font-normal text-gray-500/70">
                        <p>
                          Weight: <span>{product.weight ?? "N/A"}</span>
                        </p>

                        <div className="flex items-center gap-2">
                          <p>Qty:</p>
                          <select
                            className="outline-none bg-transparent"
                            value={qty}
                            onChange={() => {}}
                          >
                            {Array.from({ length: 9 }).map((_, i) => (
                              <option key={i + 1} value={i + 1}>
                                {i + 1}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-center text-gray-700">${subtotal}</p>

                  <button
                    className="cursor-pointer flex justify-center"
                    onClick={() => {}}
                    aria-label="Remove item"
                    title="Remove"
                  >
                    <span className="w-7 h-7 rounded-full border border-red-200 text-red-500 flex items-center justify-center">
                      ×
                    </span>
                  </button>
                </div>
              );
            })}
          </div>

          <Link
            href="/"
            className="group cursor-pointer flex items-center mt-8 gap-2 text-primary font-medium w-fit"
          >
            <span className="group-hover:-translate-x-1 transition">←</span>
            Continue Shopping
          </Link>
        </div>

        <div className="max-w-90 w-full bg-gray-100 p-5 max-md:mt-6">
          <h2 className="text-xl md:text-2xl font-medium">Order Summary</h2>
          <hr className="border-gray-300 my-5" />

          <div className="mb-6">
            <p className="text-base font-medium uppercase">Delivery Address</p>
            <div className="relative flex justify-between items-start mt-2">
              <p className="text-gray-500">No address found</p>
              <button className="text-primary hover:underline cursor-pointer">
                Change
              </button>
            </div>

            <p className="text-base font-medium uppercase mt-6">
              Payment Method
            </p>

            <select className="w-full border border-gray-300 bg-white px-3 py-2 mt-2 outline-none">
              <option value="COD">Cash On Delivery</option>
              <option value="Online">Online Payment</option>
            </select>
          </div>

          <hr className="border-gray-300" />

          <div className="text-gray-500 mt-4 space-y-2">
            <p className="flex justify-between">
              <span>Price</span>
              <span>${priceTotal.toFixed(2)}</span>
            </p>
            <p className="flex justify-between">
              <span>Shipping Fee</span>
              <span className="text-green-600">Free</span>
            </p>
            <p className="flex justify-between">
              <span>Tax (2%)</span>
              <span>${tax.toFixed(2)}</span>
            </p>

            <p className="flex justify-between text-lg font-medium mt-3 text-gray-800">
              <span>Total Amount:</span>
              <span>${total.toFixed(2)}</span>
            </p>
          </div>

          <button className="w-full py-3 mt-6 cursor-pointer bg-[#4fbf8b] text-white font-medium hover:bg-primary/90 transition">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}
