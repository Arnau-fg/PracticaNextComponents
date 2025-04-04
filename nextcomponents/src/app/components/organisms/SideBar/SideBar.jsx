"use client";

import React from 'react';
import { Button } from '../../atoms/Button/Button';

// Recibimos la función onButtonClick como prop
export const SideBar = ({ onButtonClick }) => {
  return (
    <div className="w-64 bg-gray-100 p-4">
      <h2 className="text-xl font-semibold mb-4">SideBar</h2>
      {/* El botón llama a onButtonClick cuando se hace clic */}
      <Button onClick={onButtonClick}>Increment Counter</Button>
    </div>
  );
};
