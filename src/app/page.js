// src/app/page.js
import Image from "next/image";
import Herosection from '../components/HeroSection';
import Productpage from './(frontend)/products/Page';
import Review from './(frontend)/review/Page';
import Shipping from './(frontend)/shipping/Page';

export default function Home() {
  return (
   <>
    
     <Herosection/>
     <Productpage/>
     <Review/>
     <Shipping/>
   </>
  );
}
