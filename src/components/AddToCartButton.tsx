"use client";

type Props = {
  onAdd?: () => void;
};

export default function AddToCartButton({ onAdd }: Props) {
  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onAdd?.();
      }}
      className="flex items-center cursor-pointer justify-center gap-1 bg-[#4fbf8b]/10 border border-[#4fbf8b]/40 px-2 md:w-20 w-16 h-8.5 rounded text-[#4fbf8b]"
    >
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
  );
}