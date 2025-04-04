"use client"

import React from 'react';
import { Counter } from '../../atoms/Counter/Counter';

// This is the MainPage organism
// TODO: You need to implement the counter state here
// The counter should be updated when the button in SideBar is clicked
export const MainPage = () => {
  const [count, setCount] = React.useState(0);

  // TODO: You might need to pass this function to SideBar
  const incrementCount = () => {
    setCount(prev => prev + 1);
  };

  return (
    <div className="flex-1 p-4">
      <h1 className="text-2xl font-bold mb-4">Main Content</h1>
      <Counter count={count} />
    </div>
  );
};