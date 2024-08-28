import React, { useState } from 'react';

function App() {
  const [paracetamolDosage, setParacetamolDosage] = useState('500mg');
  const [citrazinDosage, setCitrazinDosage] = useState('10mg');
  const [azithromycinDosage,setAzithromycinDosage]=useState('250mg')
  const [showMoreDetails, setShowMoreDetails] = useState({
    paracetamol: false,
    citrazin: false,
  });

  const updateParacetamolDetails = (e) => {
    setParacetamolDosage(e.target.value);
  };

  const updateCitrazinDetails = (e) => {
    setCitrazinDosage(e.target.value);
  };

  

  const toggleMoreDetails = (medicine) => {
    setShowMoreDetails((prevState) => ({
      ...prevState,
      [medicine]: !prevState[medicine],
    }));
  };

  return (
    <div className="bg-white">
      {/* Navbar */}
      <nav className="bg-white border-b border-gray-200 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <svg
              className="h-8 w-8 mr-2"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
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
            <button className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition duration-300 shadow-md">
              EMERGENCY
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Paracetamol Card */}
          <div className="bg-white shadow-lg rounded p-6">
            <img
              src="https://via.placeholder.com/150"
              alt="Paracetamol"
              className="w-full h-32 object-cover rounded"
            />
            <h2 className="text-2xl font-bold mt-4">Paracetamol</h2>
            <div className="mt-4">
              <label
                htmlFor="paracetamol-dosage"
                className="text-gray-700 block mb-2"
              >
                Select Dosage:
              </label>
              <select
                id="paracetamol-dosage"
                value={paracetamolDosage}
                onChange={updateParacetamolDetails}
                className="bg-white border border-gray-300 rounded shadow-sm px-4 py-2 text-gray-700 w-full"
              >
                <option value="250mg">250mg</option>
                <option value="500mg">500mg</option>
                <option value="600mg">600mg</option>
              </select>
            </div>
            <div className="text-gray-700 mt-4">
              {paracetamolDosage === '250mg' && (
                <div>
                  <p>Dosage: 250mg</p>
                  <p>Age Group: 12+</p>
                  <p>Usage: Pain relief, fever reducer</p>
                  <p>Side Effects: Nausea, rash, etc.</p>
                  <p>Warnings: Do not exceed 4g per day</p>
                </div>
              )}
              {paracetamolDosage === '500mg' && (
                <div>
                  <p>Dosage: 500mg</p>
                  <p>Age Group: 12+</p>
                  <p>Usage: Pain relief, fever reducer</p>
                  <p>Side Effects: Nausea, rash, etc.</p>
                  <p>Warnings: Do not exceed 4g per day</p>
                </div>
              )}
              {paracetamolDosage === '600mg' && (
                <div>
                  <p>Dosage: 600mg</p>
                  <p>Age Group: 12+</p>
                  <p>Usage: Pain relief, fever reducer</p>
                  <p>Side Effects: Nausea, rash, etc.</p>
                  <p>Warnings: Do not exceed 4g per day</p>
                </div>
              )}
            </div>
            <button
              onClick={() => toggleMoreDetails('paracetamol')}
              className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
            >
              {showMoreDetails.paracetamol ? 'Hide Details' : 'More Details'}
            </button>
            {showMoreDetails.paracetamol && (
              <div className="mt-4 text-gray-700">
                <p>
                  Paracetamol, also known as acetaminophen in some countries, is
                  a common over-the-counter medication used to treat pain and
                  reduce fever.
                </p>
                <p>
                  <strong>Mechanism of action:</strong> Reduces the production
                  of prostaglandins, which cause pain and fever.
                </p>
                <p>
                  <strong>Safety profile:</strong> Generally safe, but can cause
                  liver damage if taken in excessive amounts.
                </p>
                <p>
                  <strong>Contraindications:</strong> Consult a doctor if you
                  have liver disease or consume large amounts of alcohol.
                </p>
                <p>
                  <strong>Interactions:</strong> Can interact with other
                  medications, so inform your healthcare provider about all
                  drugs you're taking.
                </p>
              </div>
            )}
          </div>

          {/* Citrazin Card */}
          <div className="bg-white shadow-lg rounded p-6">
            <img
              src="https://via.placeholder.com/150"
              alt="Citrazin"
              className="w-full h-32 object-cover rounded"
            />
            <h2 className="text-2xl font-bold mt-4">Citrazin</h2>
            <div className="mt-4">
              <label
                htmlFor="citrazin-dosage"
                className="text-gray-700 block mb-2"
              >
                Select Dosage:
              </label>
              <select
                id="citrazin-dosage"
                value={citrazinDosage}
                onChange={updateCitrazinDetails}
                className="bg-white border border-gray-300 rounded shadow-sm px-4 py-2 text-gray-700 w-full"
              >
                <option value="10mg">10mg</option>
                <option value="20mg">20mg</option>
                <option value="30mg">30mg</option>
              </select>
            </div>
            <div className="text-gray-700 mt-4">
              {citrazinDosage === '10mg' && (
                <div>
                  <p>Dosage: 10mg</p>
                  <p>Age Group: 6+</p>
                  <p>Usage: Allergy relief</p>
                  <p>Side Effects: Drowsiness, headache</p>
                  <p>Warnings: Avoid operating machinery</p>
                </div>
              )}
              {citrazinDosage === '20mg' && (
                <div>
                  <p>Dosage: 20mg</p>
                  <p>Age Group: 12+</p>
                  <p>Usage: Allergy relief</p>
                  <p>Side Effects: Drowsiness, headache</p>
                  <p>Warnings: Avoid operating machinery</p>
                </div>
              )}
              {citrazinDosage === '30mg' && (
                <div>
                  <p>Dosage: 30mg</p>
                  <p>Age Group: 18+</p>
                  <p>Usage: Allergy relief</p>
                  <p>Side Effects: Drowsiness, headache</p>
                  <p>Warnings: Avoid operating machinery</p>
                </div>
              )}
            </div>
            <button
              onClick={() => toggleMoreDetails('citrazin')}
              className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
            >
              {showMoreDetails.citrazin ? 'Hide Details' : 'More Details'}
            </button>
            {showMoreDetails.citrazin && (
              <div className="mt-4 text-gray-700">
                <p>
                  Citrazin is an antihistamine used to relieve allergy symptoms
                  such as watery eyes, runny nose, itching eyes/nose, sneezing,
                  hives, and itching.
                </p>
                <p>
                  <strong>Mechanism of action:</strong> Blocks histamine, a
                  substance in the body that causes allergic symptoms.
                </p>
                <p>
                  <strong>Safety profile:</strong> Generally safe, but may cause
                  drowsiness in some individuals.
                </p>
                <p>
                  <strong>Contraindications:</strong> Consult a doctor if you
                  have kidney or liver disease.
                </p>
                <p>
                  <strong>Interactions:</strong> May interact with alcohol and
                  other sedatives, increasing drowsiness.
                </p>
              </div>
            )}
          </div>

            {/* Azithromycin card */}
         <div className="bg-white shadow-lg rounded p-6">
            <img
              src="https://via.placeholder.com/150"
              alt="Citrazin"
              className="w-full h-32 object-cover rounded"
            />
            <h2 className="text-2xl font-bold mt-4">Azithromycin</h2>
            <div className="mt-4">
              <label
                htmlFor="Azithromycin-dosage"
                className="text-gray-700 block mb-2"
              >
                Select Dosage:
              </label>
              <select
                id="Azithromycin-dosage"
                value={setAzithromycinDosage}
                onChange={updateCitrazinDetails}
                className="bg-white border border-gray-300 rounded shadow-sm px-4 py-2 text-gray-700 w-full"
              >
                <option value="250mg">250mg</option>
                <option value="500mg">500mg</option>
                
              </select>
            </div>
            <div className="text-gray-700 mt-4">
              {azithromycinDosage === '10mg' && (
                <div>
                  <p>Dosage: 10mg</p>
                  <p>Age Group: 6+</p>
                  <p>Usage: Antibiotic</p>
                  <p>Side Effects: fever,swelling</p>
                  <p>Warnings: Avoid operating machinery</p>
                </div>
              )}
              {citrazinDosage === '20mg' && (
                <div>
                  <p>Dosage: 20mg</p>
                  <p>Age Group: 12+</p>
                  <p>Usage: Allergy relief</p>
                  <p>Side Effects: Drowsiness, headache</p>
                  <p>Warnings: Avoid operating machinery</p>
                </div>
              )}
              {citrazinDosage === '30mg' && (
                <div>
                  <p>Dosage: 30mg</p>
                  <p>Age Group: 18+</p>
                  <p>Usage: Allergy relief</p>
                  <p>Side Effects: Drowsiness, headache</p>
                  <p>Warnings: Avoid operating machinery</p>
                </div>
              )}
            </div>
            <button
              onClick={() => toggleMoreDetails('citrazin')}
              className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
            >
              {showMoreDetails.citrazin ? 'Hide Details' : 'More Details'}
            </button>
            {showMoreDetails.citrazin && (
              <div className="mt-4 text-gray-700">
                <p>
                  Citrazin is an antihistamine used to relieve allergy symptoms
                  such as watery eyes, runny nose, itching eyes/nose, sneezing,
                  hives, and itching.
                </p>
                <p>
                  <strong>Mechanism of action:</strong> Blocks histamine, a
                  substance in the body that causes allergic symptoms.
                </p>
                <p>
                  <strong>Safety profile:</strong> Generally safe, but may cause
                  drowsiness in some individuals.
                </p>
                <p>
                  <strong>Contraindications:</strong> Consult a doctor if you
                  have kidney or liver disease.
                </p>
                <p>
                  <strong>Interactions:</strong> May interact with alcohol and
                  other sedatives, increasing drowsiness.
                </p>
              </div>
            )}
          </div>

        </div>
      </main>
    </div>
  );
}

export default Dispensation;
