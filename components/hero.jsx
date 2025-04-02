"use client"
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import { useRef, useEffect } from 'react'
import { BackgroundLines } from './ui/background-lines'
import { Spotlight } from './ui/spotlight-new'

const Hero = () => {

    const imageRef = useRef();

    useEffect(() => {
      const imageElement = imageRef.current;

      const handleScroll = () => {
        const scrollPosition = window.scrollY;
      const scrollThreshold = 100;
        if(scrollPosition > scrollThreshold) {
            imageElement.classList.add("scrolled");
          } else {
            imageElement.classList.remove("scrolled");
          };
      };
      

      window.addEventListener("scroll", handleScroll);

      return () => window.removeEventListener("scroll", handleScroll);

    }, []);

  return (
    
    <div className='pb-20 px-4'>
      <div className='container mx-auto text-center'>
      <div className='bg-black'>
      {/* <Spotlight /> */}
      <BackgroundLines  className="flex items-center justify-center w-full flex-col px-4 bg-black">
      
        <h1 className='text-3xl md:text-8xl lg:text-[105px] pb-6 gradient-title'>
        Manage Your Finances <br/> with Intelligence
        </h1>
        <p className='text-xl text-gray-500 mb-8 max-w-2xl mx-auto'> 
            An AI-powered platform that helps you manage your finances with ease and optimize your spending with real-time insights.
        </p>
        <div className='flex justify-center space-x-4'>
            <Link href="/dashboard">
                <Button size="lg" className='px-8 bg-white text-black hover:gradient-title animate-pulse'>Get Started</Button>
            </Link>

            <Link href="/dashboard">
                <Button size="lg" className='px-8 hover:gradient-title animate-pulse'>Watch Demo</Button>
            </Link>
        </div>
        </BackgroundLines>
        </div>


<div className='hero-image-wrapper'>
    <div ref={imageRef} className='hero-image'>
        <Image src="/preview(1).jpg" alt="hero" width={400} height={400} className='rounded-lg shadow-2xl border mx-auto' priority />
    </div>
</div>
      </div>
    </div>
  )
}

export default Hero
