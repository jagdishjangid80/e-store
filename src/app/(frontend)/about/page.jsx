import React from "react";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <>
      {/* Hero Section with Background Image */}
      <section className="relative w-full h-64 flex items-center justify-center">
        <Image
          src="/images/about.png"
          alt="About Us background"
          fill
          className="object-cover z-0"
          priority={false}
        />
        <div className="absolute z-10 flex flex-col items-center justify-center text-center">
          <h1
            id="about-heading"
            className="text-4xl md:text-5xl font-bold text-black mb-2 drop-shadow-lg"
          >
            About Us
          </h1>

          {/* Breadcrumbs */}
          <nav className="text-black text-sm" aria-label="Breadcrumb">
            <ol className="flex items-center justify-center space-x-2">
              <li>
                <Link
                  href="/"
                  className="hover:underline focus:outline-none"
                >
                  Home
                </Link>
              </li>
              <li aria-hidden="true">
                <span className="mx-2">/</span>
              </li>
              <li className="text-black" aria-current="page">
                About Us
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* About Content Section */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-semibold mb-4 text-gray-900">Who We Are</h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Welcome to <span className="font-bold text-primary">E-store</span>,
          your one-stop destination for quality, convenience, and innovation in
          online shopping. Founded with a mission to redefine the eCommerce
          experience, we are passionate about bringing you a carefully curated
          selection of products that meet your everyday needs—whether it's
          fashion, electronics, home essentials, beauty, or lifestyle goods. Our
          goal is to deliver not just products, but value, trust, and a seamless
          shopping journey.
        </p>
      </section>

      {/* What Sets Us Apart Section */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-semibold mb-4 text-gray-900">
          What Sets Us Apart
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li className="text-gray-700">
            <span className="font-semibold">Customer Satisfaction:</span> Your
            happiness is our priority. From browsing to checkout, we're here to
            make your shopping experience effortless and enjoyable.
          </li>
          <li className="text-gray-700">
            <span className="font-semibold">Quality &amp; Affordability:</span>{" "}
            We partner directly with trusted suppliers and brands to offer
            high-quality products at competitive prices.
          </li>
          <li className="text-gray-700">
            <span className="font-semibold">Fast &amp; Reliable Shipping:</span>{" "}
            We understand the excitement of online shopping, so we work hard to
            ensure your orders arrive on time.
          </li>
          <li className="text-gray-700">
            <span className="font-semibold">Secure Shopping:</span> Your data is
            safe with us. Our platform uses cutting-edge encryption and payment
            security technologies.
          </li>
        </ul>
      </section>

      {/* Call to Action Section */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <p className="text-lg">
          As a growing brand, we believe in constantly evolving—adding new
          products, improving our services, and listening to what our customers
          want. Whether you're shopping for yourself or finding the perfect
          gift, we're here to help you discover something you'll love.
        </p>
        <p className="text-gray-700 mb-4">
          Thank you for choosing{" "}
          <span className="font-bold text-primary">E-store</span>. Let's make
          shopping smarter, simpler, and more enjoyable—together.
        </p>
      </section>
    </>
  );
};

export default Page;
