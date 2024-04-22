import React, { useState } from 'react';
import xmlbuilder from 'xmlbuilder'; // Import xmlbuilder library
import './AddFaculty.css';

function AddFaculty({ navigateToModifyFaculty }) {
  const [facultyName, setFacultyName] = useState('');
  const [email, setEmail] = useState('');
  const [designation, setDesignation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      faculty: {
        name: facultyName,
        email: email,
        designation: designation
      }
    };

    const xmlData = xmlbuilder.create(formData).end({ pretty: true });

    // Generate a unique filename for each faculty
    const fileName = `${facultyName.replace(/\s+/g, '-')}-${Date.now()}.xml`;

    // Create a Blob object containing the XML data
    const blob = new Blob([xmlData], { type: 'application/xml' });

    // Save the Blob as a file
    saveAs(blob, fileName);

    // Reset form fields after submission
    setFacultyName('');
    setEmail('');
    setDesignation('');
  };

  const saveAs = (blob, fileName) => {
    // Use FileSaver.js to trigger file download
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = fileName;
    link.click();
  };

  return (
    <div className="add-faculty-container">
      <h2 className="add-faculty-title">Add Faculty</h2>
      <form className="add-faculty-form" onSubmit={handleSubmit}>
        {/* Form inputs */}
        <div>
          <label className="add-faculty-label">Faculty Name:</label>
          <input
            type="text"
            className="add-faculty-input"
            placeholder="Enter faculty name"
            value={facultyName}
            onChange={(e) => setFacultyName(e.target.value)}
          />
        </div>
        {/* Add other input fields as needed */}
        <div>
          <label className="add-faculty-label">Email Address:</label>
          <input
            type="email"
            className="add-faculty-input"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label className="add-faculty-label">Designation:</label>
          <input
            type="text"
            className="add-faculty-input"
            placeholder="Enter designation"
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
          />
        </div>

        <button type="submit" className="add-faculty-button">Add Faculty</button>
      </form>

      {/* Button to navigate to ModifyFaculty component */}
      {/* <button onClick={navigateToModifyFaculty} className="show-xml-button">Modify Faculty</button> */}
    </div>
  );
}

export default AddFaculty;
