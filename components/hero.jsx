"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { useEffect, useRef } from "react";

// client-side component
const HeroSection = () => {
  const imageRef = useRef();
  useEffect(()=> {
    const imageElement = imageRef.current;
    const handleScroll=()=>{
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;
      if(scrollPosition>scrollThreshold){
        imageElement.classList.add("scrolled");
      }
      else{
        imageElement.classList.remove("scrolled");
      }
    }
    window.addEventListener("scroll",handleScroll)
    
    return()=> window.removeEventListener("scroll",handleScroll);
  },[]);
  return (
    <div className="pb-20 px-4">
        <div className="container mx-auto text-center">
        <h1 className="text-5xl md:text-8xl lg:text-[105px] pb-6 ">Watch Expenses <br/> Spend Wisely .</h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto ">
            Tracking , Analyzing and Optimizing Expenses made Easy
        </p>
        </div>
        <div className="flex justify-center space-x-4">
          <Link href="/dashboard">
            <Button size="lg"  className="px-8"> Get Started</Button></Link>
           
        </div>
        <div className="hero-section-img">
          <div ref={imageRef} className="hero-image">
        <Image src="/banner.png" width={1000} height={600} alt="Dashboard"className="rounded-lg shadow-2xl border mx-auto"/>
       </div>
        </div>
    </div>
  )
}

export default HeroSection