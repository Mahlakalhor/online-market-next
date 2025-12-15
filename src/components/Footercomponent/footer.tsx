import Image from "next/image";
export const Footer = () => {
  return (
    <div className="bg-primary/10 px-6 md:px-16 lg:px-24 xl:px-32 mt-24 bg-[#4fbf8b]/10">
      <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500">
        <div>
          <Image src="/Img/logo.svg" alt="logo" width={120} height={40} />
          <p className="max-w-102.5 mt-6">
            We deliver fresh groceries and snacks straight to your door. Trusted
            by thousands, we aim to make your shopping experience simple and
            affordable.
          </p>
        </div>

        <div className="flex flex-wrap justify-between w-3/8 space-y-5">
          <div>
            <h2 className="font-semibold text-base text-gray-900 md:mb-5 mb-2">
              Quick Links
            </h2>

            <ul className="text-sm space-y-1">
              <li>
                <a className="hover:underline transition" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="hover:underline transition" href="#">
                  Best Sellers
                </a>
              </li>
              <li>
                <a className="hover:underline transition" href="#">
                  Offers &amp; Deals
                </a>
              </li>
              <li>
                <a className="hover:underline transition" href="#">
                  Contact Us
                </a>
              </li>
              <li>
                <a className="hover:underline transition" href="#">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-base text-gray-900 md:mb-5 mb-2">
              Need help?
            </h2>

            <ul className="text-sm space-y-1">
              <li>
                <a className="hover:underline transition" href="#">
                  Delivery Information
                </a>
              </li>
              <li>
                <a className="hover:underline transition" href="#">
                  Return &amp; Refund Policy
                </a>
              </li>
              <li>
                <a className="hover:underline transition" href="#">
                  Payment Methods
                </a>
              </li>
              <li>
                <a className="hover:underline transition" href="#">
                  Track your Order
                </a>
              </li>
              <li>
                <a className="hover:underline transition" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-base text-gray-900 md:mb-5 mb-2">
              Follow Us
            </h2>

            <ul className="text-sm space-y-1">
              <li>
                <a className="hover:underline transition" href="#">
                  Instagram
                </a>
              </li>
              <li>
                <a className="hover:underline transition" href="#">
                  Twitter
                </a>
              </li>
              <li>
                <a className="hover:underline transition" href="#">
                  Facebook
                </a>
              </li>
              <li>
                <a className="hover:underline transition" href="#">
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <p className="py-4 text-center text-sm md:text-base">
        Copyright 2025 © GreatStack.dev All Right Reserved.
      </p>
    </div>
  );
};
