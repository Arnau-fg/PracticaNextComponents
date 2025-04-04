"use client";

import React from 'react';

// Mostramos el valor de count
export const Counter = ({ count = 0 }) => {
  return (
    <div className="text-4xl font-bold">
      Count: {typeof count === 'number' ? count : 0} {/* Aseguramos que `count` es un número */}
    </div>
  );
};
