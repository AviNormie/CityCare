import React, { useState } from 'react';

function App() {
  // States for dosages
  const [paracetamolDosage, setParacetamolDosage] = useState('500mg');
  const [citrazinDosage, setCitrazinDosage] = useState('10mg');
  const [azithromycinDosage, setAzithromycinDosage] = useState('250mg');
  const [amoxicillinDosage, setAmoxicillinDosage] = useState('250mg');
  const [metronidazoleDosage, setMetronidazoleDosage] = useState('500mg');
  const [ibuprofenDosage, setIbuprofenDosage] = useState('200mg');
  const [metforminDosage, setMetforminDosage] = useState('500mg');
  const [ranitidineDosage, setRanitidineDosage] = useState('150mg');
  const [omeprazoleDosage, setOmeprazoleDosage] = useState('20mg');

  // State to show/hide more details
  const [showMoreDetails, setShowMoreDetails] = useState({
    paracetamol: false,
    citrazin: false,
    azithromycin: false,
    amoxicillin: false,
    metronidazole: false,
    ibuprofen: false,
    metformin: false,
    ranitidine: false,
    omeprazole: false,
  });

  const toggleMoreDetails = (medicine) => {
    setShowMoreDetails((prevState) => ({
      ...prevState,
      [medicine]: !prevState[medicine],
    }));
  };

  // Function to update dosage state
  const updateDosage = (setDosage) => (e) => {
    setDosage(e.target.value);
  };

  // Medication card component
  const MedicineCard = ({
    medicineName,
    imgSrc,
    dosage,
    setDosage,
    dosageOptions,
    medicineKey,
    description,
    moreDetails,
  }) => (
    <div className="bg-white shadow-lg rounded p-6">
      <img
        src={imgSrc}
        alt={medicineName}
        className="w-full h-32 object-cover rounded"
      />
      <h2 className="text-2xl font-bold mt-4">{medicineName}</h2>
      <div className="mt-4">
        <label htmlFor={`${medicineName}-dosage`} className="text-gray-700 block mb-2">
          Select Dosage:
        </label>
        <select
          id={`${medicineName}-dosage`}
          value={dosage}
          onChange={updateDosage(setDosage)}
          className="bg-white border border-gray-300 rounded shadow-sm px-4 py-2 text-gray-700 w-full"
        >
          {dosageOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="text-gray-700 mt-4">{description}</div>
      <button
        onClick={() => toggleMoreDetails(medicineKey)}
        className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
      >
        {showMoreDetails[medicineKey] ? 'Hide Details' : 'More Details'}
      </button>
      {showMoreDetails[medicineKey] && <div className="mt-4 text-gray-700">{moreDetails}</div>}
    </div>
  );

  return (
    <div className="bg-white">
      {/* Navbar */}
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
            <button className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition duration-300 shadow-md">
              EMERGENCY
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Medicine Cards */}
          <MedicineCard
            medicineName="Paracetamol"
            imgSrc="https://via.placeholder.com/150"
            dosage={paracetamolDosage}
            setDosage={setParacetamolDosage}
            dosageOptions={['250mg', '500mg', '600mg']}
            medicineKey="paracetamol"
            description={<p>Dosage: {paracetamolDosage}</p>}
            moreDetails={
              <div>
                <p>Used for pain relief and fever reduction.</p>
                <p>Do not exceed 4g per day to avoid liver damage.</p>
              </div>
            }
          />
          <MedicineCard
            medicineName="Citrazin"
            imgSrc="https://via.placeholder.com/150"
            dosage={citrazinDosage}
            setDosage={setCitrazinDosage}
            dosageOptions={['10mg', '20mg', '30mg']}
            medicineKey="citrazin"
            description={<p>Dosage: {citrazinDosage}</p>}
            moreDetails={
              <div>
                <p>Used to relieve allergy symptoms.</p>
                <p>May cause drowsiness; avoid operating machinery.</p>
              </div>
            }
          />
          <MedicineCard
            medicineName="Azithromycin"
            imgSrc="https://via.placeholder.com/150"
            dosage={azithromycinDosage}
            setDosage={setAzithromycinDosage}
            dosageOptions={['250mg', '500mg']}
            medicineKey="azithromycin"
            description={<p>Dosage: {azithromycinDosage}</p>}
            moreDetails={
              <div>
                <p>Antibiotic used to treat infections.</p>
                <p>May cause stomach upset; take with food if needed.</p>
              </div>
            }
          />
          <MedicineCard
            medicineName="Amoxicillin"
            imgSrc="https://via.placeholder.com/150"
            dosage={amoxicillinDosage}
            setDosage={setAmoxicillinDosage}
            dosageOptions={['250mg', '500mg']}
            medicineKey="amoxicillin"
            description={<p>Dosage: {amoxicillinDosage}</p>}
            moreDetails={
              <div>
                <p>Antibiotic used for bacterial infections.</p>
                <p>Consult your doctor if allergic to penicillin.</p>
              </div>
            }
          />
          <MedicineCard
            medicineName="Metronidazole"
            imgSrc="https://via.placeholder.com/150"
            dosage={metronidazoleDosage}
            setDosage={setMetronidazoleDosage}
            dosageOptions={['500mg', '750mg']}
            medicineKey="metronidazole"
            description={<p>Dosage: {metronidazoleDosage}</p>}
            moreDetails={
              <div>
                <p>Used to treat bacterial and parasitic infections.</p>
                <p>Avoid alcohol while taking this medication.</p>
              </div>
            }
          />
          <MedicineCard
            medicineName="Ibuprofen"
            imgSrc="https://via.placeholder.com/150"
            dosage={ibuprofenDosage}
            setDosage={setIbuprofenDosage}
            dosageOptions={['200mg', '400mg', '600mg']}
            medicineKey="ibuprofen"
            description={<p>Dosage: {ibuprofenDosage}</p>}
            moreDetails={
              <div>
                <p>Used for pain relief, inflammation, and fever.</p>
                <p>Take with food to reduce stomach upset.</p>
              </div>
            }
          />
          <MedicineCard
            medicineName="Metformin"
            imgSrc="https://via.placeholder.com/150"
            dosage={metforminDosage}
            setDosage={setMetforminDosage}
            dosageOptions={['500mg', '850mg', '1000mg']}
            medicineKey="metformin"
            description={<p>Dosage: {metforminDosage}</p>}
            moreDetails={
              <div>
                <p>Used to manage blood sugar levels in type 2 diabetes.</p>
                <p>Monitor kidney function while on this medication.</p>
              </div>
            }
          />
          <MedicineCard
            medicineName="Ranitidine"
            imgSrc="https://via.placeholder.com/150"
            dosage={ranitidineDosage}
            setDosage={setRanitidineDosage}
            dosageOptions={['150mg', '300mg']}
            medicineKey="ranitidine"
            description={<p>Dosage: {ranitidineDosage}</p>}
            moreDetails={
              <div>
                <p>Used to reduce stomach acid production.</p>
                <p>Consult your doctor if symptoms persist.</p>
              </div>
            }
          />
          <MedicineCard
            medicineName="Omeprazole"
            imgSrc="https://via.placeholder.com/150"
            dosage={omeprazoleDosage}
            setDosage={setOmeprazoleDosage}
            dosageOptions={['20mg', '40mg']}
            medicineKey="omeprazole"
            description={<p>Dosage: {omeprazoleDosage}</p>}
            moreDetails={
              <div>
                <p>Reduces stomach acid and treats ulcers.</p>
                <p>Long-term use may affect calcium absorption.</p>
              </div>
            }
          />
        </div>
      </main>
    </div>
  );
}

export default App;
