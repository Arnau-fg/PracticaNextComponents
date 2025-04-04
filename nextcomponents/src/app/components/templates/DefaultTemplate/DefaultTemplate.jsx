"use client";

import React, { useState } from 'react';
import { SideBar } from '../../organisms/SideBar/SideBar';
import { MainPage } from '../../organisms/MainPage/MainPage';

export const DefaultTemplate = () => {
  // Definimos el estado del contador
  const [count, setCount] = useState(0);

  // Función para incrementar el contador
  const handleIncrement = () => {
    console.log("Botón presionado. Contador actual:", count);
    setCount(prevCount => prevCount + 1); // Incrementamos el contador
  };

  return (
    <div className="flex min-h-screen">
      {/* Pasamos handleIncrement como prop a SideBar */}
      <SideBar onButtonClick={handleIncrement} />
      {/* Pasamos count como prop a MainPage */}
      <MainPage count={count} />
    </div>
  );
};
