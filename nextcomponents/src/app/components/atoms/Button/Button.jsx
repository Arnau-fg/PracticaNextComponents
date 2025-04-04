"use client"

import React from 'react';

// Este es el botón que recibe el handler `onClick` y el texto
export const Button = ({ onClick, children }) => {
  return (
    <button 
      onClick={onClick}
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    >
      {children}
    </button>
  );
};
