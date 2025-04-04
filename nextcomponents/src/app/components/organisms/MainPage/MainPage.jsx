"use client";
import React from 'react';
import { Counter } from '../../atoms/Counter/Counter';

// Recibimos count como prop desde DefaultTemplate
export const MainPage = ({ count }) => {
  return (
    <div className="flex-1 p-4">
      <h1 className="text-2xl font-bold mb-4">Main Content</h1>
      {/* Pasamos count al componente Counter */}
      <Counter count={count} />
    </div>
  );
};
