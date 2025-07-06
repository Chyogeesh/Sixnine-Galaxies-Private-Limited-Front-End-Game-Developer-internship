'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';

export default function BestSellingProducts() {
  const products = [
    { id: 1, name: 'Product 1', image: '/images/product1.jpg' },
    { id: 2, name: 'Product 2', image: '/images/product2.jpg' },
  ];
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const buttons = document.querySelectorAll('.product-button');
      buttons.forEach((button) => {
        button.addEventListener('click', () => {
          gsap.to(containerRef.current, {
            x: button.dataset.direction === 'left' ? '+100' : '-100',
            duration: 0.5,
            ease: 'power2.out',
          });
        });
        button.addEventListener('mouseenter', () => {
          gsap.to(button, { scale: 1.1, duration: 0.3, ease: 'power1.out' });
        });
        button.addEventListener('mouseleave', () => {
          gsap.to(button, { scale: 1, duration: 0.3, ease: 'power1.out' });
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Best Selling Products</h2>
        <div className="relative overflow-hidden" ref={containerRef}>
          <div className="flex space-x-4">
            {products.map((product) => (
              <div key={product.id} className="w-64 h-80 bg-gray-200 rounded-lg flex-shrink-0">
                <Image src={product.image} alt={product.name} width={256} height={320} className="w-full h-full object-cover rounded-lg" />
                <p className="text-center mt-2">{product.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-4 space-x-4">
          <button className="product-button bg-gray-800 text-white px-4 py-2 rounded-full" data-direction="left">←</button>
          <button className="product-button bg-gray-800 text-white px-4 py-2 rounded-full" data-direction="right">→</button>
        </div>
      </div>
    </section>
  );
}
