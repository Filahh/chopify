'use client';
import React from 'react';
import MenuSection from "@/app/components/MenuSection";
import PageTransition from '@/app/components/PageTransition';

const breakfastItems = [
  { name: 'Yam & Egg Sauce', price: '₦2500', img: '/yam-egg.jpg' },
  { name: 'Akara & Pap', price: '₦1800', img: '/akara-pap.jpg' },
  { name: 'Bread & Beans', price: '₦2000', img: '/beans-bread.jpg' },
];

export default function BreakfastPage() {
  return (
    <PageTransition>
      <section className="min-h-screen bg-white text-center py-20 px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-purple mb-10">Breakfast</h1>
        <MenuSection items={breakfastItems} />
      </section>
    </PageTransition>
  );
}
