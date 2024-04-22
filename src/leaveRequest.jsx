import React, { useState, useEffect } from 'react';
import facultyLeaveData from './FacultyLeaveData.json'; // Importing faculty leave data

function leaveRequest() {
  const [leaveApplications, setLeaveApplications] = useState([]);

  useEffect(() => {
    // Set faculty leave data when component mounts
    setLeaveApplications(facultyLeaveData);
  }, []);

  // Function to handle approving leave application
  const handleApprove = (id) => {
    setLeaveApplications(prevLeaveApplications =>
      prevLeaveApplications.map(application =>
        application.id === id ? { ...application, approved: true } : application
      )
    );
  };

  return (
    <div style={{ marginLeft: '320px' ,marginTop : '50px'}} >
      <h1>Faculty Leave Tracker</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {leaveApplications.map(application => (
          <div key={application.id} style={{ width: '300px', margin: '10px', border: '1px solid #ccc' }}>
            <h3 style={{ backgroundColor: 'grey', padding: '10px', margin: '0', color: 'white' }}>
              {application.faculty_name}'s Leave Application
            </h3>
            <div style={{ padding: '10px' }}>
              <p>Faculty ID: {application.faculty_id}</p>
              <p>Reason for Leave: {application.reason_for_leave}</p>
              <p>Start Date: {application.start_date}</p>
              <p>End Date: {application.end_date}</p>
              <p>Approved: {application.approved ? 'Yes' : 'No'}</p>
              {!application.approved && (
                <button onClick={() => handleApprove(application.id)}>Approve</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default leaveRequest;
