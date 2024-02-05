import React from 'react';
import Image from 'next/image';
import Flight from './assets/Flying.gif';
import Foti from './assets/flightbooking.svg';

export const metadata = {
  title: "Flyinn Amadeus",
  description:
      "Discover the most affordable airplane tickets on a reliable platform. Explore personalized flights from among hundreds of airline options",
};


const Homepage: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center">
      <div className='lg:w-1/2 text-yellow-300 text-lg font-bold mt-28 text-center lg:ml-32 '>
        <h2><span className='text-slate-600 text-3xl mx-2 '>DİSCOVER</span> THE PERFECT FLIGHT FOR YOUR</h2>
        <h2 className='my-4'>NEXT JOURNEY AND SECURE YOUR SEAT <span className='text-slate-600 text-4xl font-semibold mx-2 '>TODAY</span></h2>
        <h2>OUR PLATFORM OFFERS A WIDE RANGE OF OPTIONS,</h2>
        <h2 className='my-4'>MAKING<span className='text-slate-600 text-4xl font-semibold mx-2 '>TRAVEL</span> PLANNING EFFORTLESS...</h2>
        <div className='mt-8 mx-auto lg:ml-32 '>
          <Image priority={true} src={Foti} alt='foti' width={400} height={400} />
        </div>
      </div>

      <div className="lg:w-1/2 flex flex-col items-center justify-center h-screen mb-28">
        <div className="flex items-center flex-col mb-4 text-slate-600">
          <h1 className="text-4xl font-bold text-center">Find And Book</h1>
          <h1 className="text-4xl font-bold text-center">A Great Experience</h1>
        </div>
        <div className="flex items-center justify-center mt-4 mb ">
          <div className="mx-auto lg:ml-0">
            <Image src={Flight} alt="gif" height={400} width={400} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
