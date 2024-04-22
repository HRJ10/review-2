import React, { useEffect, useState } from 'react';

function DisplayXMLData() {
  const [xmlData, setXmlData] = useState('');

  useEffect(() => {
    // Retrieve XML data from local storage
    const storedXMLData = localStorage.getItem('facultyXML');
    if (storedXMLData) {
      setXmlData(storedXMLData);
    }
  }, []);

  return (
    <div>
      <h2>XML Data:</h2>
      <pre>{xmlData}</pre>
    </div>
  );
}

export default DisplayXMLData;
