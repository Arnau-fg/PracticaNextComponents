"use client"

import React from 'react';
import { Button } from '../../atoms/Button/Button';

// This is the SideBar organism
// TODO: You need to implement the state and handler for the button click
// The button click should increment a counter in MainPage
// Hint: You'll need to lift the state up or use a state management solution
export const SideBar = () => {
  
  const handleClick = () => {
    // TODO: Implement the click handler
    console.log('Button clicked - need to increment counter');
  };

  return (
    <div className="w-64 bg-gray-100 p-4">
      <h2 className="text-xl font-semibold mb-4">SideBar</h2>
      <Button onClick={handleClick}>Increment Counter</Button>
    </div>
  );
};