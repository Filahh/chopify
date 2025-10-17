'use client';
import React from 'react';
import MenuSection from "@/app/components/MenuSection";
import PageTransition from '@/app/components/PageTransition';

const lunchItems = [
  { name: 'Jollof Rice & Chicken', price: '₦3000', img: '/jollof-chicken.jpg' },
  { name: 'Efo Riro & Swallow', price: '₦3500', img: '/efo-riro.jpg' },
  { name: 'Ofada Rice & Sauce', price: '₦2800', img: '/ofada.jpg' },
];

export default function LunchPage() {
  return (
    <PageTransition>
        <section className="min-h-screen bg-white text-center py-20 px-6">
            <h1 className="text-4xl md:text-5xl font-bold text-purple mb-10">Lunch</h1>
            <MenuSection items={lunchItems} />
        </section>
    </PageTransition>
  );
}
