"use client"

import React from 'react';
import { SideBar } from '../../organisms/SideBar/SideBar';
import { MainPage } from '../../organisms/MainPage/MainPage';



// This is the default template that combines SideBar and MainPage

// Here you can manage the shared state and pass it down to the components
// As well as the handler for the button click in SideBar


export const DefaultTemplate = () => {
  
  return (
    <div className="flex min-h-screen">
      <SideBar />
      <MainPage />
    </div>
  );
};