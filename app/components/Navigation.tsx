import React, { useState } from "react";

export const Navigation = () => {
  return (
    <nav className='border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900'>
      <div className='mx-auto max-w-7xl px-6'>
        <ul className='flex gap-1 overflow-x-auto py-3 no-scrollbar'>
          <li>
            <button className='rounded-full bg-zinc-900 px-4 py-1.5 text-sm font-medium text-white dark:bg-zinc-100 dark:text-zinc-900'>
              All
            </button>
          </li>
          <li>
            <button className='rounded-full px-4 py-1.5 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800'>
              Beauty
            </button>
          </li>
          <li>
            <button className='rounded-full px-4 py-1.5 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800'>
              Fragrances
            </button>
          </li>
          <li>
            <button className='rounded-full px-4 py-1.5 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800'>
              Furniture
            </button>
          </li>
          <li>
            <button className='rounded-full px-4 py-1.5 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800'>
              Groceries
            </button>
          </li>
          <li>
            <button className='rounded-full px-4 py-1.5 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800'>
              Home Decoration
            </button>
          </li>
          <li>
            <button className='rounded-full px-4 py-1.5 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800'>
              Kitchen Accessories
            </button>
          </li>
          <li>
            <button className='rounded-full px-4 py-1.5 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800'>
              Laptops
            </button>
          </li>
          <li>
            <button className='rounded-full px-4 py-1.5 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800'>
              Smartphones
            </button>
          </li>
          <li>
            <button className='rounded-full px-4 py-1.5 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800'>
              Sports Accessories
            </button>
          </li>
          <li>
            <button className='rounded-full px-4 py-1.5 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800'>
              Vehicle
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};
