import Image from "next/image";
import Homepage from './home/Page';
import Productpage from './products/Page';
import Review from './review/Page';
import Shipping from './shipping/Page';

export default function Home() {
  return (
   <>
     <Homepage/>
     <Productpage/>
     <Review/>
     <Shipping/>
   </>
  );
}
