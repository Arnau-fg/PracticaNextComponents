"use client"

import React from 'react';

// This is a simple counter display atom
// It needs to receive the count value from its parent
export const Counter = ({ count }) => {
  return (
    <div className="text-4xl font-bold">
      Count: {count}
    </div>
  );
};