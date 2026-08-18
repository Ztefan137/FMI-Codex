"use client";

import React, { useState } from 'react';
import FMICodexLogo from '@/components/logo';

export default function Home() {
  return(
    <main className='bg-[#f7f7f7] flex flex-col h-screen'>
      <div className="w-screen p-4">  
          <div className='rounded-3xl bg-white p-4 card flex justify-between items-center'>
            <FMICodexLogo></FMICodexLogo>
            <div className='bg-gray-200 p-1 flex rounded-4xl'>
              <div className='menu-item'>Home</div>
              <div className='menu-item'>Courses</div>
              <div className='menu-item'>Something</div>
              <div className='menu-item'>Contribute</div>
            </div>
            <div className='text-gray-800'>Hello</div>
          </div> 
      </div>
      <div className='grid grid-cols-3 grid-rows-2 gap-4 p-3 h-full'>
          <div className='bg-[#ffffff] col-span-1 row-span-2 col-start-1 row-start-1 card text-gray-900'>div1</div>
          <div className='bg-[#0366d6] col-span-2 row-span-1 col-start-2 row-start-1 card'>div2</div>
          <div className='bg-[#ffffff] col-span-1 row-span-1 col-start-2 row-start-2 card'>div3</div>
          <div className='bg-[#74d3ff] col-span-1 row-span-1 col-start-3 row-start-2 card'>div4</div>
      </div>
    </main>
  );
}