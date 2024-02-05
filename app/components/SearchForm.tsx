// SearchForm.tsx
import React from 'react';
import Cities from '../../api/cities.json';


interface SearchFormProps {
  tripType: 'oneWay' | 'roundTrip';
  departure: string;
  setDeparture: React.Dispatch<React.SetStateAction<string>>;
  arrival: string;
  setArrival: React.Dispatch<React.SetStateAction<string>>;
  journeyDate: string;
  setJourneyDate: React.Dispatch<React.SetStateAction<string>>;
  returnDate: string;
  setReturnDate: React.Dispatch<React.SetStateAction<string>>;
  handleTripTypeChange: (newTripType: 'oneWay' | 'roundTrip') => void;
  handleSearch: () => void;
}

const SearchForm: React.FC<SearchFormProps> = ({
  tripType,
  departure,
  setDeparture,
  arrival,
  setArrival,
  journeyDate,
  setJourneyDate,
  returnDate,
  setReturnDate,
  handleTripTypeChange,
  handleSearch,
}) => {


  return (
    <div className='w-1/2 mx-auto p-6 bg-slate-300 rounded-lg shadow-lg mt-28 mb-24'>
      <div className='mb-4 text-center'>
        <label className='block text-3xl font-medium text-gray-700 mb-6'>Trip Type</label>
        <div className='flex items-center justify-center space-x-4'>
          <label className='inline-flex items-center'>
            <input
              type='radio'
              className='form-radio text-blue-500'
              name='tripType'
              value='oneWay'
              checked={tripType === 'oneWay'}
              onChange={() => handleTripTypeChange('oneWay')}
            />
            <span className='ml-2'>One Way</span>
          </label>
          <label className='inline-flex items-center'>
            <input
              type='radio'
              className='form-radio text-blue-500'
              name='tripType'
              value='roundTrip'
              checked={tripType === 'roundTrip'}
              onChange={() => handleTripTypeChange('roundTrip')}
            />
            <span className='ml-2'>Round Trip</span>
          </label>
        </div>
      </div>

      <div className='flex mb-4 space-x-4'>
        <div className='w-1/2'>
          <label className='block text-sm font-medium text-gray-700 mb-1'>Departure Airport</label>
          <select
            className='form-select block w-full mt-1 p-2 rounded-lg outline-none'
            value={departure}
            onChange={(e) => setDeparture(e.target.value)}
          >
            <option value=''>Select</option>
            {Cities.map((city) => (
              <option id={city.id} key={city.id} value={city.name}>
                {city.name}
              </option>
            ))}
          </select>
        </div>

        <div className='w-1/2'>
          <label className='block text-sm font-medium text-gray-700 mb-1'>Arrival Airport</label>
          <select
            className='form-select block w-full mt-1 p-2 rounded-lg outline-none'
            value={arrival}
            onChange={(e) => setArrival(e.target.value)}
          >
            <option value=''>Select</option>
            {Cities.map((city) => (
              <option id={city.id} key={city.id} value={city.name}>
                {city.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className='mb-4'>
        <label className='block text-sm font-medium text-gray-700 mb-1'>Journey Date</label>
        <input
          type='date'
          className='form-input block w-full mt-1 p-2 rounded-lg outline-none '
          min={new Date().toISOString().split('T')[0]}
          value={journeyDate}
          onChange={(e) => setJourneyDate(e.target.value)}
        />
      </div>

      {tripType === 'roundTrip' && (
        <div className='mb-4'>
          <label className='block text-sm font-medium text-gray-700 mb-1'>Return Date</label>
          <input
            type='date'
            className='form-input block w-full mt-1 p-2 rounded-lg outline-none'
            min={journeyDate}
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
            required
          />
        </div>
      )}

      <div className='text-center'>
        <button
          className='bg-slate-700 hover:bg-slate-900 text-white font-semibold mt-6 py-2 px-4 rounded-lg shadow-lg'
          onClick={handleSearch}
        >
          SEARCH FLIGHT
        </button>
      </div>
          </div>
  );
};

export default SearchForm;
