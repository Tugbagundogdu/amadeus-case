import React from 'react';
import FindFlight from '../components/FindFlight';

export const metadata = {
  title: "Find Flight | Flyinn Amadeus",
  description: "Discover the most affordable airplane tickets on a reliable platform. Explore personalized flights from among hundreds of airline options",
};

const Page: React.FC = () => {
  return (
    <div>
      <FindFlight />
    </div>
  );
};

export default Page;
