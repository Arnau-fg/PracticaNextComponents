"use client"

import React from 'react';
import { SideBar } from '../../organisms/SideBar/SideBar';
import { MainPage } from '../../organisms/MainPage/MainPage';



// This is the default template that combines SideBar and MainPage
// TODO: You might need to manage the shared state here and pass it down


export const DefaultTemplate = () => {
  
  return (
    <div className="flex min-h-screen">
      <SideBar />
      <MainPage />
    </div>
  );
};