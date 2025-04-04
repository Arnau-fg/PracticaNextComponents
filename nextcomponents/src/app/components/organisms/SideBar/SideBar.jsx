"use client"

import React from 'react';
import { Button } from '../../atoms/Button/Button';

// This is the SideBar organism
// TODO: You need to implement the state and handler for the button click
// The button click should increment a counter in MainPage

export const SideBar = () => {

  return (
    <div className="w-64 bg-gray-100 p-4">
      <h2 className="text-xl font-semibold mb-4">SideBar</h2>
      <Button>Increment Counter</Button>
    </div>
  );
};