"use client"; // Needed for using useState

import { useState } from "react";
import Link from "next/link"; // Use Link for navigation in Next.js
import { FaShoppingCart, FaUser, FaBars } from "react-icons/fa";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="font-sans">
      {/* Top Bar */}
      <div className="bg-white shadow-sm text-sm">
        <div className="flex justify-between items-center py-2 px-6 lg:px-24 max-w-screen-xl mx-auto">
          {/* Language/Currency */}
          <div className="flex items-center space-x-4 text-lg">
            <span>EN</span>
            <span className="text-gray-400">•</span>
            <span>USD</span>
          </div>

          {/* Right section (Profile, Cart, Search) */}
          <div className="flex items-center space-x-8 text-lg">
            {/* Profile Link */}
            <Link href="/profile" className="flex items-center text-gray-600 hover:text-black">
              <FaUser className="mr-1" /> My profile
            </Link>

            {/* Cart with Items */}
            <div className="relative flex items-center text-gray-600 hover:text-black">
              <FaShoppingCart className="text-lg mr-2" />
              <span>Items</span>
              <span className="absolute -top-2 -right-2 text-xs bg-red-600 text-white rounded-full px-2">2</span>
            </div>

            {/* Total Price */}
            <div className="flex items-center text-gray-600">
              <span className="mr-2">$0.00</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-white shadow-md">
        <div className="flex justify-between items-center py-4 px-6 lg:px-24 max-w-screen-xl mx-auto">
          {/* Logo */}
          <div className="text-2xl font-bold text-blue-500">E-Comm</div>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-24 text-xl font-medium">
            <Link href="/" className="text-gray-600 hover:text-blue-500">HOME</Link>
            <Link href="/bags" className="text-gray-600 hover:text-blue-500">BAGS</Link>
            <Link href="/sneakers" className="text-gray-600 hover:text-blue-500">SNEAKERS</Link>
            <Link href="/belt" className="text-gray-600 hover:text-blue-500">BELT</Link>
            <Link href="/contact" className="text-gray-600 hover:text-blue-500">CONTACT</Link>
          </nav>

          {/* Burger Menu for Small Screens */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="block md:hidden">
            <FaBars className="text-2xl text-gray-600" />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden py-4 px-6 bg-white shadow-md space-y-4">
          <Link href="/" className="block text-gray-600 hover:text-blue-500">HOME</Link>
          <Link href="/bags" className="block text-gray-600 hover:text-blue-500">BAGS</Link>
          <Link href="/sneakers" className="block text-gray-600 hover:text-blue-500">SNEAKERS</Link>
          <Link href="/belt" className="block text-gray-600 hover:text-blue-500">BELT</Link>
          <Link href="/contact" className="block text-gray-600 hover:text-blue-500">CONTACT</Link>
        </nav>
      )}


{/* Hero Section */}
<div className="relative bg-cover bg-center h-[500px] flex items-center text-white pl-20" 
    style={{ backgroundImage: "url('/banner.jpg')" }}>
  <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay for contrast */}
  <div className="relative z-10">
    <h1 className="text-5xl md:text-6xl font-bold leading-tight drop-shadow-lg">Super Flash Sale</h1>
    <h2 className="text-5xl md:text-5xl mt-4 font-bold drop-shadow-lg">50% Off</h2>
  </div>
</div>



{/* Product Cards overlapping the hero section */}
<div className="relative z-20 -mt-32 flex justify-center py-16 flex-wrap">
  {/* Product 1 */}
  <div className="bg-white shadow-lg p-6 w-[360px] hover:shadow-xl transition-shadow duration-300">
    <img src="/sneakers-image1.jpeg" alt="Bag" className="w-full h-48 object-cover rounded" />
    <div className="mt-4 text-center">
      <h3 className="text-lg font-medium">FS - QUILTED MAXI CROSS BAG</h3>
      <div className="flex justify-center items-center mt-2 space-x-2 text-gray-500">
        <span className="line-through">$534.33</span>
        <span className="text-red-600">24% Off</span>
      </div>
      <div className="text-xl font-bold text-blue-500 mt-2">$299.43</div>
    </div>
  </div>

  {/* Product 2 */}
  <div className="bg-white shadow-lg p-6 w-[360px] hover:shadow-xl transition-shadow duration-300">
    <img src="/sneakers-image2.jpeg" alt="Nike Air 270 React" className="w-full h-48 object-cover rounded" />
    <div className="mt-4 text-center">
      <h3 className="text-lg font-medium">FS - Nike Air Max 270 React</h3>
      <div className="flex justify-center items-center mt-2 space-x-2 text-gray-500">
        <span className="line-through">$534.33</span>
        <span className="text-red-600">24% Off</span>
      </div>
      <div className="text-xl font-bold text-blue-500 mt-2">$299.43</div>
    </div>
  </div>

  {/* Product 3 */}
  <div className="bg-white shadow-lg p-6 w-[360px] hover:shadow-xl transition-shadow duration-300">
    <img src="/sneakers-image3.jpg" alt="Nike Air Max" className="w-full h-48 object-cover rounded" />
    <div className="mt-4 text-center">
      <h3 className="text-lg font-medium">FS - Nike Air Max 270 React</h3>
      <div className="flex justify-center items-center mt-2 space-x-2 text-gray-500">
        <span className="line-through">$534.33</span>
        <span className="text-red-600">24% Off</span>
      </div>
      <div className="text-xl font-bold text-blue-500 mt-2">$299.43</div>
    </div>
  </div>
</div>
<div className="container mx-auto px-4 py-12"> {/* Container with auto left-right margin and padding */}
{/* Heading */}
      <h2 className="text-center text-3xl font-bold mb-8">BEST SELLER</h2>

      {/* Filter buttons */}
      <div className="flex justify-center space-x-6 mb-8">
        <button className="text-blue-500 border-b-2 border-blue-500 font-semibold">All</button>
        <button className="text-gray-500 hover:text-blue-500">Bags</button>
        <button className="text-gray-500 hover:text-blue-500">Sneakers</button>
        <button className="text-gray-500 hover:text-blue-500">Belt</button>
        <button className="text-gray-500 hover:text-blue-500">Sunglasses</button>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-0">
      {/* Product Card */}
        <div className="relative bg-white shadow-md rounded-lg p-4">
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">HOT</div>
          <img
            src="/s1.jpeg" // replace with actual image paths
            alt="Nike Air Max 270 React"
            className="h-48 w-full object-cover rounded-lg mb-4"
          />
          <h3 className="text-lg font-semibold">Nike Air Max 270 React</h3>
          <div className="flex items-center space-x-1">
            <span className="text-yellow-400">★★★★☆</span>
            <span className="text-sm text-gray-500">(24)</span>
          </div>
          <div className="flex justify-between items-center mt-4">
            <p className="text-blue-500 font-semibold">$299.43</p>
            <p className="text-gray-400 line-through">$534.43</p>
          </div>
        </div>

        {/* Repeat this structure for the other product cards */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <img
            src="/s2.jpeg"
            alt="Nike Air Max 270 React"
            className="h-48 w-full object-cover rounded-lg mb-4"
          />
          <h3 className="text-lg font-semibold">Nike Air Max 270 React</h3>
          <div className="flex items-center space-x-1">
            <span className="text-yellow-400">★★★★☆</span>
            <span className="text-sm text-gray-500">(24)</span>
          </div>
          <div className="flex justify-between items-center mt-4">
            <p className="text-blue-500 font-semibold">$299.43</p>
            <p className="text-gray-400 line-through">$534.43</p>
          </div>
        </div>

        {/* Add as many product cards as needed */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <img
            src="/s3.jpeg"
            alt="Nike Air Max 270 React"
            className="h-48 w-full object-cover rounded-lg mb-4"
          />
          <h3 className="text-lg font-semibold">Nike Air Max 270 React</h3>
          <div className="flex items-center space-x-1">
            <span className="text-yellow-400">★★★★☆</span>
            <span className="text-sm text-gray-500">(24)</span>
          </div>
          <div className="flex justify-between items-center mt-4">
            <p className="text-blue-500 font-semibold">$299.43</p>
            <p className="text-gray-400 line-through">$534.43</p>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <img
            src="/s4.jpeg"
            alt="Nike Air Max 270 React"
            className="h-48 w-full object-cover rounded-lg mb-4"
          />
          <h3 className="text-lg font-semibold">Nike Air Max 270 React</h3>
          <div className="flex items-center space-x-1">
            <span className="text-yellow-400">★★★★☆</span>
            <span className="text-sm text-gray-500">(24)</span>
          </div>
          <div className="flex justify-between items-center mt-4">
            <p className="text-blue-500 font-semibold">$299.43</p>
            <p className="text-gray-400 line-through">$534.43</p>
          </div>
        </div>
                {/* Product Card */}
                <div className="bg-white shadow-md rounded-lg p-4">
          <img
            src="/s5.jpeg"
            alt="Nike Air Max 270 React"
            className="h-48 w-full object-cover rounded-lg mb-4"
          />
          <h3 className="text-lg font-semibold">Nike Air Max 270 React</h3>
          <div className="flex items-center space-x-1">
            <span className="text-yellow-400">★★★★☆</span>
            <span className="text-sm text-gray-500">(24)</span>
          </div>
          <div className="flex justify-between items-center mt-4">
            <p className="text-blue-500 font-semibold">$299.43</p>
            <p className="text-gray-400 line-through">$534.43</p>
          </div>
        </div>

        {/* Repeat this structure for the other product cards */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <img
            src="/s6.jpeg"
            alt="Nike Air Max 270 React"
            className="h-48 w-full object-cover rounded-lg mb-4"
          />
          <h3 className="text-lg font-semibold">Nike Air Max 270 React</h3>
          <div className="flex items-center space-x-1">
            <span className="text-yellow-400">★★★★☆</span>
            <span className="text-sm text-gray-500">(24)</span>
          </div>
          <div className="flex justify-between items-center mt-4">
            <p className="text-blue-500 font-semibold">$299.43</p>
            <p className="text-gray-400 line-through">$534.43</p>
          </div>
        </div>

        {/* Add as many product cards as needed */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <img
            src="/s7.jpeg"
            alt="Nike Air Max 270 React"
            className="h-48 w-full object-cover rounded-lg mb-4"
          />
          <h3 className="text-lg font-semibold">Nike Air Max 270 React</h3>
          <div className="flex items-center space-x-1">
            <span className="text-yellow-400">★★★★☆</span>
            <span className="text-sm text-gray-500">(24)</span>
          </div>
          <div className="flex justify-between items-center mt-4">
            <p className="text-blue-500 font-semibold">$299.43</p>
            <p className="text-gray-400 line-through">$534.43</p>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <img
            src="/s8.jpeg"
            alt="Nike Air Max 270 React"
            className="h-48 w-full object-cover rounded-lg mb-4"
          />
          <h3 className="text-lg font-semibold">Nike Air Max 270 React</h3>
          <div className="flex items-center space-x-1">
            <span className="text-yellow-400">★★★★☆</span>
            <span className="text-sm text-gray-500">(24)</span>
          </div>
          <div className="flex justify-between items-center mt-4">
            <p className="text-blue-500 font-semibold">$299.43</p>
            <p className="text-gray-400 line-through">$534.43</p>
          </div>
        </div>

      </div>

      <div className="text-center mt-8">
        <button className="text-blue-500 underline">LOAD MORE</button>
      </div>
    </div>


    <div className="bg-white py-16">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        {/* Free Shipping */}
        <div>
          <div className="text-red-500 text-5xl mb-4">
            🚚 {/* You can replace this with an SVG icon */}
          </div>
          <h3 className="text-xl font-semibold">FREE SHIPPING</h3>
          <p className="text-gray-500 mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>

        {/* 100% Refund */}
        <div>
          <div className="text-red-500 text-5xl mb-4">
            💸 {/* You can replace this with an SVG icon */}
          </div>
          <h3 className="text-xl font-semibold">100% REFUND</h3>
          <p className="text-gray-500 mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>

        {/* Support 24/7 */}
        <div>
          <div className="text-red-500 text-5xl mb-4">
            🎧 {/* You can replace this with an SVG icon */}
          </div>
          <h3 className="text-xl font-semibold">SUPPORT 24/7</h3>
          <p className="text-gray-500 mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>
      </div>

    </div>

        {/* Footer Section */}
        <footer className="bg-white py-6 text-center text-gray-700">
          <p>&copy; 2024 Resume Builder. All Rights Reserved.</p>
        </footer>

    </div>
  );
}
