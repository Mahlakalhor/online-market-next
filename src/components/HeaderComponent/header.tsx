"use client";
import Image from "next/image";
import Link from "next/link";
import { useUIStore } from "@/store/ui";


export const Header = () => {
  const openAuth = useUIStore((s) => s.openAuth);

  return (
    <div className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300">
      <Link href="/">
        <Image
          src="/Img/logo.svg"
          alt="logo"
          width={120}
          height={40}
          priority
        />
      </Link>

      <div className="hidden md:flex items-center gap-8">
        <Link href="/">Home</Link>
        <Link href="/list">All Product</Link>

        <div className="flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full max-lg:hidden">
          <input
            type="text"
            placeholder="Search products"
            className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
          />
          <Image src="/Img/search.svg" alt="search" width={16} height={16} />
        </div>

        <div className="relative cursor-pointer">
          <Image
            src="/Img/shop.svg"
            alt="cart"
            width={24}
            height={24}
            className="opacity-80"
          />
          <span className="absolute -top-2 -right-3 text-xs text-white bg-[#4fbf8b] w-4.5 h-4.5 rounded-full flex items-center justify-center">
            0
          </span>
        </div>

        <button
          onClick={() => openAuth("login")}
          className="px-4 h-10 rounded-md bg-[#4fbf8b] text-white"
        >
          Login
        </button>
      </div>
    </div>
  );
};
