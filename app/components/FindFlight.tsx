"use client";
import React, { useState } from 'react';
import SearchForm from './SearchForm';
import FlightList from './FlightList';
import MockFlight from '../../api/flight.json';

export const metadata = {
  title: "Find Flight | Flyinn Amadeus",
  description: "Discover the most affordable airplane tickets on a reliable platform. Explore personalized flights from among hundreds of airline options",
};

interface Flight {
  flightNbr: string;
  airlineName: string;
  deptTime: string;
  deptCity: string;
  arivalTime: string;
  arivalCity: string;
  noOfStops: string;
  price: string;
  id : string;
}

const FindFlight: React.FC = () => {
  const initialDeparture = '';
  const initialArrival = '';
  const initialJourneyDate = '';
  const initialReturnDate = '';
  const initialFilteredFlights: Flight[] = [];

  const [showResults, setShowResults] = useState<boolean>(false);
  const [tripType, setTripType] = useState<'oneWay' | 'roundTrip'>('roundTrip');
  const [departure, setDeparture] = useState<string>('');
  const [arrival, setArrival] = useState<string>('');
  const [journeyDate, setJourneyDate] = useState<string>('');
  const [returnDate, setReturnDate] = useState<string>('');
  const [filteredFlights, setFilteredFlights] = useState<Flight[]>(initialFilteredFlights);

  const resetInputValues = () => {
    setDeparture(initialDeparture);
    setArrival(initialArrival);
    setJourneyDate(initialJourneyDate);
    setReturnDate(initialReturnDate);
    setFilteredFlights([]);
  };

  const handleTripTypeChange = (newTripType: 'oneWay' | 'roundTrip') => {
    resetInputValues();
    setTripType(newTripType);
  };

  const handleSearch = () => {
    if (
      (tripType === 'roundTrip' && (!journeyDate || !returnDate || !departure || !arrival)) ||
      (tripType === 'oneWay' && (!journeyDate || !departure || !arrival))
    ) {
      alert('Please Enter The Information Completely !');
      return;
    }

    const filtered = MockFlight.filter(
      flight =>
        flight.deptCity.toLowerCase() === departure.toLowerCase() &&
        flight.arivalCity.toLowerCase() === arrival.toLowerCase()
    );

    setFilteredFlights(filtered);
    setShowResults(true);
  };

  return (
    <>
      <SearchForm
        tripType={tripType}
        departure={departure}
        setDeparture={setDeparture}
        arrival={arrival}
        setArrival={setArrival}
        journeyDate={journeyDate}
        setJourneyDate={setJourneyDate}
        returnDate={returnDate}
        setReturnDate={setReturnDate}
        handleTripTypeChange={handleTripTypeChange}
        handleSearch={handleSearch}

      />
     {filteredFlights.length > 0 ? ( 
        <FlightList flights={filteredFlights} />
      ) : (
        <p>
          {showResults && <FlightList flights={filteredFlights} />}
        </p>
      )}
    </>
  );
};

export default FindFlight;
