import React from 'react';
import DisplayXMLData from './DisplayXMLData';

function RemoveFaculty({ facultyXML }) {
    const [facultyData, setFacultyData] = useState(null);
    const [showXML, setShowXML] = useState(false);
  
    useEffect(() => {
      const storedData = localStorage.getItem('facultyXML');
      if (storedData) {
        setFacultyData(storedData);
        setShowXML(true);
      }
    }, []);
  
    return (
      <div className="modify-faculty-container">
        <h2 className="modify-faculty-title">Modify Faculty Data</h2>
        {showXML && facultyData && (
          <div className="faculty-data">
            <pre>{facultyData}</pre>
          </div>
        )}
        <DisplayXMLData xmlData={facultyData} />
      </div>
    );
}

export default RemoveFaculty;
