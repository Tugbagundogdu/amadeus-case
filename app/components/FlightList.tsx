import React, { useEffect, useState } from 'react';
import Loading from "./Loading";
import Link from 'next/link';

interface Flight {
  flightNbr: string;
  airlineName: string;
  deptTime: string;
  arivalTime: string;
  price: string;
  deptCity: string;
  arivalCity: string;
  id: string;
}

interface FlightListProps {
  flights: Flight[];
}

const FlightList: React.FC<FlightListProps> = ({ flights }) => {

    const [isLoading, setIsLoading] = useState(true);
    const [sortedFlights, setSortedFlights] = useState<Flight[]>
    (flights); 
    const [isAscending, setIsAscending] = useState(true);
  
    useEffect(() => {
      const delay = setTimeout(() => {
        setIsLoading(false);
      }, 2000);
  
      return () => clearTimeout(delay);
    }, []);

    const sortByPrice = () => {
      const sorted = [...sortedFlights];
      sorted.sort((a, b) => {
        const priceA = parseInt(a.price.replace('$', ''));
        const priceB = parseInt(b.price.replace('$', ''));
        return isAscending ? priceA - priceB : priceB - priceA;
      });
      setSortedFlights(sorted);
      setIsAscending(!isAscending); 
    };

  return (
    <div className="bg-gray-100 p-6 rounded-lg">
    <h2 className="text-3xl text-center text-slate-700 font-bold mb-4">Filtered Flights</h2>
    {isLoading ? (
      <Loading />
    ) : (
      <div className="grid gap-4">
        <div className='flex justify-center '>
          <button onClick={sortByPrice} className="bg-slate-700 hover:bg-slate-900 text-white px-4 py-2 rounded-md mb-4 w-56">
            {isAscending ? 'Sort by Price (Ascending)' : 'Sort by Price (Descending)'}
          </button>
          </div>
          {sortedFlights.length > 0 ? (
            sortedFlights.map((flight, index) => (
              <div key={index} className="border p-4 rounded-lg shadow-md">
              <div className="flex flex-col items-center">
                <p className="text-red-500 text-lg font-semibold">Flight Number: {flight.flightNbr}</p>
                <p className="text-green-700 mt-1 text-center">Airline: {flight.airlineName}</p>
                <div className="flex text-yellow-900 mt-1">
                  <p className="mr-6">Departure Airport: {flight.deptCity}</p>
                  <p>Arrival Airport: {flight.arivalCity}</p>
                </div>
                <div className="flex mt-1 text-yellow-900">
                  <p className="mr-6">Departure Time: {flight.deptTime}</p>
                  <p>Arrival Time: {flight.arivalTime}</p>
                </div>
                <p className="mt-1 text-green-700">Price: {flight.price}</p>
              </div>
              <div className="mt-4 flex justify-center">
                  <Link className='bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md' href={`/FindFlight/${flight.id}`}>
                      Buy Ticket                   
                  </Link>
                </div>
            </div>
          ))
        ) : (
          <p className="text-3xl text-center text-red-500">No Flights Matching The Selected Criteria!</p>
        )}
      </div>
    )}
  </div>
);
};

export default FlightList;
