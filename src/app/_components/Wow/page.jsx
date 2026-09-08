"use client"; // Required if using the App Router

import { useEffect } from 'react';

export default function Wow() {
  useEffect(() => {
    // Dynamically import wowjs only on the client side
    const initWow = async () => {
      const WOW = (await import('wowjs')).default;
      new WOW({
        live: false // Prevents sudden layout shifts or infinite triggers in React
      }).init();
    };

    initWow();
  }, []);

  return (
    <main style={{ minHeight: '200vh', padding: '2rem' }}>
      <h1>Scroll down to see the magic</h1>
      
      {/* Spacer to allow scrolling */}
      <div style={{ height: '80vh' }}></div>

      {/* Animated Element */}
      <div className="wow animate__animated animate__fadeInUp" data-wow-duration="2s">
        <h2 style={{ background: 'lightblue', padding: '2rem', textAlign: 'center' }}>
          I faded up using WOW.js!
          </h2>
      </div>
    </main>
  );
}
