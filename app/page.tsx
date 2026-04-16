"use client";

import { useState, useEffect } from "react";
import { Product, ProductApiResponse } from "./type";
import { Header } from "./components/Header";
import { Card } from "./components/Card";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { Pagination } from "./components/Pagination";

// API: https://dummyjson.com/products

const PRODUCTS_PER_PAGE = 10;
export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState<string>("");
  const [total, setTotal] = useState(0);
  const [skip, setSkip] = useState(0);
  const [category, setCategory] = useState<string>("");
  const CurrentPage = skip / PRODUCTS_PER_PAGE + 1;
  const TotalPages = Math.ceil(total / PRODUCTS_PER_PAGE);
  useEffect(() => {
    let url = `https://dummyjson.com/products?limit=${PRODUCTS_PER_PAGE}&skip=${skip}`;
    if (category) {
      url = `https://dummyjson.com/products/category/${category}?limit=${PRODUCTS_PER_PAGE}&skip=${skip}`;
    }
    if (search) {
      url = `https://dummyjson.com/products/search?q=${search}&limit=${PRODUCTS_PER_PAGE}&skip=${skip}`;
    }

    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data: ProductApiResponse) => {
        setProducts(data.products);
        setTotal(data.total);
        setSkip(data.skip);
        setLoading(false);
        setCategory(data.category);
      })
      .catch((res) => {
        setError("Something went wrong.");
      });
  }, [search, skip, category]);
  if (loading) {
    return (
      <div className='w-full text-center text-2xl text-gray-500'>
        loading ...
      </div>
    );
  }

  // TODO 8: Хайлт хийх handler
  // function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
  //   setSearch(e.target.value);
  //   setSkip(0);
  // }

  // TODO 9: Pagination handler-ууд
  // function handlePrev() { setSkip((s) => Math.max(0, s - PRODUCTS_PER_PAGE)); }
  // function handleNext() { setSkip((s) => s + PRODUCTS_PER_PAGE); }

  // TODO 10: Ачааллын төлөв (loading state)

  // TODO 11: Алдааны төлөв (error state)

  return (
    <div className='min-h-screen bg-zinc-50 dark:bg-zinc-950'>
      <Header />

      {/* Category Navigation */}
      {/* TODO 15: Идэвхтэй категорийг тодруулах, дарахад тухайн категорийн бүтээгдэхүүн шүүх */}
      {/* API: https://dummyjson.com/products/category/{category} */}
      <Navigation />

      {/* Main Content */}
      <main className='mx-auto max-w-7xl px-6 py-10'>
        {/* Search */}
        <div className='mb-8'>
          {/* TODO: value={search} onChange={handleSearch} холбох */}
          <input
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            type='text'
            placeholder='Бүтээгдэхүүн хайх...'
            className='w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 placeholder-zinc-400 shadow-sm outline-none transition-colors focus:border-zinc-400 focus:ring-2 focus:ring-zinc-200 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:placeholder-zinc-500 dark:focus:border-zinc-500 dark:focus:ring-zinc-800 sm:max-w-md'
          />
        </div>

        <p className='mb-6 text-sm text-zinc-500 dark:text-zinc-400'>
          {products.length} products found
        </p>

        {/* TODO 13: Доорх hardcode-г products.map() ашиглан солих */}

        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {products.map((product) => (
            <Card
              product={product}
              key={product.id}
            />
          ))}
        </div>

        <Pagination
          CurrentPage={CurrentPage}
          setSkip={setSkip}
          TotalPages={TotalPages}
          skip={skip}
          PRODUCTS_PER_PAGE={PRODUCTS_PER_PAGE}
        />
      </main>

      <Footer />
    </div>
  );
}

// БОНУС TODO 14: Компонент болгон задлах
//   - app/types/product.ts
//   - app/components/ProductCard.tsx
//   - app/components/SearchBar.tsx
//   - app/components/Pagination.tsx
//   - app/components/ProductList.tsx
//   - app/page.tsx
