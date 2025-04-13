import React, { useState } from "react";

export default function App() {
  const [formStatus, setFormStatus] = useState({
    form1: false,
    form2: false,
    form3: false,
  });

  const handleFormSubmit = (formName) => {
    setFormStatus((prevStatus) => ({
      ...prevStatus,
      [formName]: true,
    }));
  };

  const countFilledForms = Object.values(formStatus).filter(Boolean).length;

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h2 className="mb-4 text-lg font-bold">Forms</h2>

      {/* Form 1 */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleFormSubmit("form1");
        }}
        className="w-full max-w-md p-6 mb-4 bg-white rounded shadow-md"
      >
        <label htmlFor="form1Input" className="block mb-1 text-sm font-medium text-gray-700">
          Form 1 Input
        </label>
        <input
          type="text"
          id="form1Input"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="px-4 py-2 mt-2 text-white transition bg-blue-500 rounded hover:bg-blue-600"
        >
          Submit Form 1
        </button>
      </form>

      {/* Form 2 */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleFormSubmit("form2");
        }}
        className="w-full max-w-md p-6 mb-4 bg-white rounded shadow-md"
      >
        <label htmlFor="form2Input" className="block mb-1 text-sm font-medium text-gray-700">
          Form 2 Input
        </label>
        <input
          type="text"
          id="form2Input"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="px-4 py-2 mt-2 text-white transition bg-blue-500 rounded hover:bg-blue-600"
        >
          Submit Form 2
        </button>
      </form>

      {/* Form 3 */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleFormSubmit("form3");
        }}
        className="w-full max-w-md p-6 mb-4 bg-white rounded shadow-md"
      >
        <label htmlFor="form3Input" className="block mb-1 text-sm font-medium text-gray-700">
          Form 3 Input
        </label>
        <input
          type="text"
          id="form3Input"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="px-4 py-2 mt-2 text-white transition bg-blue-500 rounded hover:bg-blue-600"
        >
          Submit Form 3
        </button>
      </form>

      {/* Display Count */}
      <div className="mt-4 text-gray-700">
        Number of forms filled: <strong>{countFilledForms}</strong>
      </div>
    </div>
  );
}
