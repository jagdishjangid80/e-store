// src/app/(frontend)/page.js
import Herosection from '@/components/HeroSection';
import Productpage from './products/Page';
import Review from './review/Page';
import Shipping from './shipping/Page';

export default function Home() {
  return (
    <>
      <Herosection />
      <Productpage />
      <Review />
      <Shipping />
    </>
  );
}