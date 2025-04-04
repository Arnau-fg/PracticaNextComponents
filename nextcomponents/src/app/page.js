import Image from "next/image";
import React from 'react';
import { DefaultTemplate } from './components/templates/DefaultTemplate/DefaultTemplate';

// This is the main page that uses the DefaultTemplate
// TODO: If you choose to manage state here, you'll need to implement it

export default function Home() {
  return (

    <DefaultTemplate />

  );
}
