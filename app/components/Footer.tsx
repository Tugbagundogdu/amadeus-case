import Link from 'next/link';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 py-16">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
            <h6 className="text-white uppercase mb-4">About</h6>
            <p className="text-justify text-gray-400"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo nulla neque, provident distinctio aliquid, eius cupiditate voluptates laborum, iure laudantium quisquam ullam temporibus minus enim pariatur reprehenderit non ipsum? Reprehenderit delectus commodi voluptas cumque quasi, qui numquam rem nihil itaque debitis placeat eos rerum sapiente saepe! Ea commodi nulla animi. </p>
          </div>
          <div className="w-full md:w-1/4 px-4">
            <h6 className="text-white uppercase mb-4">Categories</h6>
            <ul className="footer-links text-gray-400">
              <li><Link href="#">Flights Country</Link></li>
              <li><Link href="#">Airlines</Link></li>
              <li><Link href="#">Cities & Airports</Link></li>
              <li><Link href="#">Popular routes</Link></li>
              <li><Link href="#">Offers and Tips</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 px-4">
            <h6 className="text-white uppercase mb-4">Quick Links</h6>
            <ul className="footer-links text-gray-400">
              <li><Link href="#">About Us</Link></li>
              <li><Link href="#">Contact Us</Link></li>
              <li><Link href="#">Contribute</Link></li>
              <li><Link href="#">Privacy Policy</Link></li>
              <li><Link href="#">Sitemap</Link></li>
            </ul>
          </div>
        </div>
        <hr className="border-gray-600 mt-8"/>
      </div>
      <div className="container mx-auto mt-8">
        <div className="text-center text-gray-400">
          <p>&copy; 2024 All Rights Reserved by Tugba Gundogdu.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
