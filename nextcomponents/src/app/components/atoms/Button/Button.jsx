"use client"

import React from 'react';

// This is a simple button atom
// It needs to receive an onClick handler and its text content from its parent
export const Button = () => {
  return (
    <button 
      
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    >
      Púlsame
    </button>
  );
};