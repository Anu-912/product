"use client";
import React, { useState } from "react";
import { Product } from "../type";

export const Navigation = ({ product }: { product: Product }) => {
  const buttons = [
    "All",
    "Beauty",
    "Fragrances",
    " Furniture",
    " Groceries",
    "Home Decoration",
    " Kitchen Accessories",
    "Laptops",
    "Smartphones",
    "Sports Accessories",
    "Vehicle",
  ];
  //   export default function CategoryFilter({ product }) {
  //   const [activeCategory, setActiveCategory] = useState('All');

  //   const filteredProducts = useMemo(() => {
  //     if (activeCategory === 'All') return product;
  //     return product.filter(p => p.category === activeCategory);
  //   }, [activeCategory, product]);

  return (
    <nav className='border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900'>
      <div className='mx-auto max-w-7xl px-6'>
        <ul className='flex gap-1 overflow-x-auto py-3 no-scrollbar'>
          {buttons.map((key) => (
            <button
              key={key}
              // onClick={() => setActiveCategory(key)}
              className='rounded-full bg-zinc-900 px-4 py-1.5 text-sm font-medium text-white dark:bg-zinc-100 dark:text-zinc-900'
            >
              {key}
            </button>
          ))}
        </ul>
      </div>
    </nav>
  );
};
