import React from 'react';
import { Truck, Headphones, Percent, RotateCcw } from 'lucide-react';

const services = [
  {
    icon: <RotateCcw size={40} />,
    title: '7–Days Returns',
    description: 'Risk–free shopping with easy returns.',
  },
  {
    icon: <Truck size={40} />,
    title: 'Free Shipping',
    description: 'No extra costs, just the price you see.',
  },
  {
    icon: <Headphones size={40} />,
    title: '24/7 Support',
    description: '24/7 support, alway here just for you.',
  },
  {
    icon: <Percent size={40} />,
    title: 'Member Discounts',
    description: 'Special offers for our loyal customers.',
  },
];

const Page = () => {
  return (
    <div className="w-full mx-auto py-10 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {services.map((service, index) => (
          <div key={index}>
            <div className="flex justify-center mb-4 text-black">{service.icon}</div>
            <h3 className="text-lg font-semibold mb-1">{service.title}</h3>
            <p className="text-sm text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
