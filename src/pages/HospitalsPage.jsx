import React from 'react';
import './App.css'; // Optional: Add your own CSS file for additional styling

const HospitalPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
};

const Header = () => {
  return (
    <nav className="bg-white border-b border-gray-200 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <svg className="h-8 w-8 mr-2" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z" />
          </svg>
          <span className="font-bold text-2xl text-gray-800">City Care</span>
        </div>
        <div className="flex space-x-4 items-center">
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Services
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Contact Us
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Login
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            Signup
          </a>
          <button className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition duration-300 shadow-md emergency-glow">
            EMERGENCY
          </button>
        </div>
      </div>
    </nav>
  );
};

const MainContent = () => {
  return (
    <main className="container mx-auto pt-12 px-4 flex-grow">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
        Our Hospital Network
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {hospitalData.map((hospital, index) => (
          <HospitalCard key={index} {...hospital} />
        ))}
      </div>
    </main>
  );
};

const HospitalCard = ({ name, image, established, mapLink }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-6">
        {/* Truncate the hospital name if it's too long */}
        <h2 className="text-2xl font-semibold mb-2 text-blue-600 truncate" title={name}>
          {name.length > 20 ? `${name.slice(0, 20)}...` : name}
        </h2>
        <p className="text-gray-600 mb-4">
          <i className="far fa-calendar-alt mr-2"></i>
          <time dateTime={established} className="italic">
            Established {new Date(established).getFullYear()}
          </time>
        </p>
        <a
          href={mapLink}
          target="_blank"
          className="text-blue-500 hover:text-blue-700 mb-4 block"
          rel="noopener noreferrer"
        >
          <i className="fas fa-map-marker-alt mr-2"></i>View Location
        </a>
        {/* Flex container to align buttons horizontally */}
        <div className="flex justify-center items-center mt-4 space-x-2">
          <button className="bg-green-500 text-white px-3 py-2 rounded hover:bg-green-600 transition duration-300 shadow-md">
            More Details
          </button>
          <button className="bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600 transition duration-300 shadow-md">
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
};



const Footer = () => {
  return (
    <footer className="bg-orange-600 text-white mt-12 py-8">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap justify-between">
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h3 className="text-xl font-bold mb-2">Hospital Directory</h3>
          <p>Providing quality healthcare information.</p>
        </div>
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h3 className="text-xl font-bold mb-2">Quick Links</h3>
          <ul>
            <li>
              <a href="#" className="no-underline text-white hover:text-gray-300">About Us</a>
            </li>
            <li>
              <a href="#" className="no-underline text-white hover:text-gray-300">Services</a>
            </li>
            <li>
              <a href="#" className="no-underline text-white hover:text-gray-300">Contact</a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h3 className="text-xl font-bold mb-2">Connect With Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-gray-300">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-gray-300">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-center">
        &copy; 2024 Hospital Directory. All rights reserved.
      </div>
    </div>
  </footer>
);
};


  


const hospitalData = [
  {
    name: "AIIMS Delhi",
    image: "https://images.livemint.com/img/2021/09/27/1600x900/AIIMS-K_1632722988190_1632722999911.jpg",
    established: "1956-09-25",
    mapLink: "https://goo.gl/maps/FgTfDfsjo6s6pX5h7",
  },
  {
    name: "Safdarjung Hospital",
    image: "https://images.indianexpress.com/2020/07/safdarjung-hospital.jpg",
    established: "1942-01-01",
    mapLink: "https://goo.gl/maps/ZFgVoM3xxoC8nZzeA",
  },
  {
    name: "Fortis Escorts Heart Institute",
    image: "https://www.fortishealthcare.com/sites/default/files/2020-05/Fortis-Escorts-Heart-Institute.jpg",
    established: "1988-01-01",
    mapLink: "https://goo.gl/maps/EKmS5kKH8oH6d8FP8",
  },
  {
    name: "Max Super Specialty Hospital, Saket",
    image: "https://media.healthspace.com.pk/hospitals-images/Max-Hospital-India.jpg",
    established: "2000-04-01",
    mapLink: "https://goo.gl/maps/56Ue4gkAQkm",
  },
  {
    name: "Indraprastha Apollo Hospital",
    image: "https://www.apollohospitals.com/frontend/assets/images/Indraprastha-apollo.jpg",
    established: "1996-08-01",
    mapLink: "https://goo.gl/maps/YW6joxHDVmw",
  },
  {
    name: "Sir Ganga Ram Hospital",
    image: "https://images.financialexpress.com/2020/05/Ganga-Ram-Hospital.jpg",
    established: "1951-04-13",
    mapLink: "https://goo.gl/maps/RX2pZcUqdm72",
  },
  {
    name: "BLK Super Specialty Hospital",
    image: "https://www.blkhospital.com/assets/images/blk-build.jpg",
    established: "1959-02-01",
    mapLink: "https://goo.gl/maps/XTK9Rk2Gm872",
  },
  {
    name: "Moolchand Medcity",
    image: "https://www.moolchandhealthcare.com/images/MoolchandHosp1.jpg",
    established: "1958-05-10",
    mapLink: "https://goo.gl/maps/8f3Mv6KUBCB2",
  },
  
];

export default HospitalPage;
