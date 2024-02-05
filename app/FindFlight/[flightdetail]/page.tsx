'use client';
import React from 'react'
import Flight from '../../../api/flight.json';
import Image from 'next/image';
import Photo from '../../assets/Flight Booking-cuate.svg';
import { useParams, useSearchParams } from 'next/navigation';

export const metadata = {
  title: "Find Flight | Flyinn Amadeus",
  description: "Discover the most affordable airplane tickets on a reliable platform. Explore personalized flights from among hundreds of airline options",
};


const page: React.FC<any> = () => {

  const {flightdetail} = useParams();
  console.log(flightdetail);
 
  const FlightDetail = Flight.find(
    (flight) => flight.id === flightdetail);
    

    console.log(FlightDetail);


  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 md:flex-row">
    <div className="md:mr-6">
      <Image src={Photo} alt="Flight Photo" priority={true} width={400} height={400} />
    </div>
    <div className="border p-8 rounded-lg shadow-lg shadow-gray-600 mt-4 md:mt-0 w-full md:w-2/4">
      <h1 className='text-center text-2xl text-green-800 text-bold mb-7 '>Congratulations The Purchase Has Been Successfully Completed!</h1>
      <div className="flex flex-col items-center">
        <p className="text-red-500 text-lg font-semibold mb-2">Flight Number: {FlightDetail?.flightNbr}</p>
        <p className="text-green-700 text-lg">Airline: {FlightDetail?.airlineName}</p>
        <div className="flex text-yellow-900 mt-3">
          <p className="mr-4">Departure Airport: {FlightDetail?.deptCity}</p>
          <p>Arrival Airport: {FlightDetail?.arivalCity}</p>
        </div>
        <div className="flex mt-3 text-yellow-900">
          <p className="mr-4">Departure Time: {FlightDetail?.deptTime}</p>
          <p>Arrival Time: {FlightDetail?.arivalTime}</p>
        </div>
        <p className="mt-3 text-green-700 text-lg">Price: {FlightDetail?.price}</p>
      </div>
    </div>
  </div>
  )
}

export default page
