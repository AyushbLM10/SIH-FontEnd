import React, { useState } from 'react';
import './style.css';
import Result from './Result'; 

function Validation() {
  const [showResult, setShowResult] = useState(false); // State to control whether to show the result

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform certificate validation here and set showResult accordingly
    // For now, I'll set it to true for demonstration purposes
    setShowResult(true);
  };

  return (
    <div className="container">
      <h2>Input Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="pwd">Certificate id</label>
          <input type="password" id="pwd" name="pwd" />
        </div>
        <div className="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>

      {showResult && <Result />} {/* Conditionally render the Result component */}
    </div>
  );
}

export default Validation;
