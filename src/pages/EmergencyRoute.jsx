import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FaHospitalUser } from "react-icons/fa"; // Add this line
import GlowingButton from "./components/GlowingButton"; // Adjust the path as needed
import MainPage from "./pages/MainPage";
import HospitalSignin from "./pages/HospitalSignin";
import HosSignup from "./pages/HosSignup";

function openGoogleMaps(hospitalName, latitude, longitude) {
  const baseUrl = "https://www.google.com/maps/search/?api=1&query=";
  const query = `${encodeURIComponent(hospitalName)}+@${latitude},${longitude}`;
  const url = `${baseUrl}${query}`;
  window.open(url, "_blank");
}

function App() {
  return (
    <>
      <div className="bg-white min-h-screen">
        {/* <!-- Navbar --> */}
        <nav className="flex w-full h-[10vh] justify-around px-2 text-xl shadow-sm fixed top-0 left-0 z-50 bg-white">
          <div className="flex p-2">
            <FaHospitalUser size={60} />
            <div className="px-3 pt-3 text-3xl max-md:text-xl max-md:mt-2">
              CityCare
            </div>
          </div>
          <div className="flex pt-[3vh] gap-x-8 text-slate-600 max-md:hidden">
            <div className="flex p-2 cursor-pointer gap-x-8">
              <div className="hover:scale-110">Services</div>
              <div className="hover:scale-110">ContactUs</div>
              <div className="hover:scale-110">Login</div>
              <div className="hover:scale-110">Signup</div>
              <div className="hover:scale-110">crazy</div>
            </div>
          </div>
          <div className="pt-3 ">
            <GlowingButton />
          </div>
        </nav>

        {/* <!-- Main Content --> */}
        <div className="container mx-auto mt-[12vh] p-4">
          {/* New Heading */}
          <h2 className="text-3xl font-bold mb-8 text-gray-800">
            Emergency Rooms Available in:
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* <!-- Emergency Rooms Card --> */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() =>
                      openGoogleMaps("Fortis Hospital", 28.5672, 77.2100)
                    }
                    className="w-full bg-white p-3 rounded shadow text-left hover:bg-gray-50 transition duration-300 flex justify-between items-center"
                  >
                    <span>Fortis Hospital</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </li>
                {/* Add other hospitals in similar structure */}
              </ul>
            </div>

            {/* Another Emergency Rooms Card */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() =>
                      openGoogleMaps("Max Hospital", 28.5682, 77.2210)
                    }
                    className="w-full bg-white p-3 rounded shadow text-left hover:bg-gray-50 transition duration-300 flex justify-between items-center"
                  >
                    <span>Max Hospital</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </li>
                {/* Add other hospitals in similar structure */}
              </ul>
            </div>
            {/* Additional emergency room cards can be added here */}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
