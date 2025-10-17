'use client';
import React from 'react';
import MenuSection from "@/app/components/MenuSection";
import PageTransition from '@/app/components/PageTransition';

const dinnerItems = [
  { name: 'Fried Rice & Turkey', price: '₦3500', img: '/fried-rice.jpg' },
  { name: 'Poundo & Egusi', price: '₦3200', img: '/poundo-egusi.jpg' },
  { name: 'Nkwobi', price: '₦4000', img: '/nkwobi.jpg' },
];

export default function DinnerPage() {
  return (
    <PageTransition>
        <section className="min-h-screen bg-white text-center py-20 px-6">
            <h1 className="text-4xl md:text-5xl font-bold text-purple mb-10">Dinner</h1>
            <MenuSection items={dinnerItems} />
        </section>
    </PageTransition>
  );
}
