'use client';
import Link from 'next/link';

export default function MenuPage() {
  return (
    <section id="menu" className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-20 bg-white">
      <h1 className="text-4xl md:text-5xl font-bold text-purple mb-6">Our Menu</h1>
      <p className="text-gray-600 max-w-md mb-10">
        Choose a category below to explore delicious Nigerian dishes for every time of the day.
      </p>

      <div className="flex flex-col md:flex-row gap-6">
        <Link href="/menu/breakfast" className="px-8 py-4 bg-teal text-white font-semibold rounded-full hover:bg-dark-brown transition">
          Breakfast
        </Link>
        <Link href="/menu/lunch" className="px-8 py-4 bg-teal text-white font-semibold rounded-full hover:bg-dark-brown transition">
          Lunch
        </Link>
        <Link href="/menu/dinner" className="px-8 py-4 bg-teal text-white font-semibold rounded-full hover:bg-dark-brown transition">
          Dinner
        </Link>
      </div>
    </section>
  );
}
