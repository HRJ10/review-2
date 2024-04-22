import React, { useEffect, useState } from 'react';

function ModifyFaculty() {
  const [transformedHTML, setTransformedHTML] = useState('');

  useEffect(() => {
    applyXSLT();
  }, []);

  function applyXSLT() {
    // Load XML data
    var xmlHttpRequest = new XMLHttpRequest();
    xmlHttpRequest.open("GET", "data.xml", true);
    xmlHttpRequest.onreadystatechange = function() {
      if (xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200) {
        var xmlData = xmlHttpRequest.responseXML;

        // Load XSLT stylesheet
        var xsltHttpRequest = new XMLHttpRequest();
        xsltHttpRequest.open("GET", "transform.xsl", true);
        xsltHttpRequest.onreadystatechange = function() {
          if (xsltHttpRequest.readyState == 4 && xsltHttpRequest.status == 200) {
            var xsltData = xsltHttpRequest.responseXML;

            // Apply XSLT transformation
            if (window.ActiveXObject || "ActiveXObject" in window) { // IE
              var transformedHTML = xmlData.transformNode(xsltData);
              setTransformedHTML(transformedHTML);
            } else if (document.implementation && document.implementation.createDocument) { // Other browsers
              var xsltProcessor = new XSLTProcessor();
              xsltProcessor.importStylesheet(xsltData);
              var resultDocument = xsltProcessor.transformToDocument(xmlData);
              var serializer = new XMLSerializer();
              var transformedHTML = serializer.serializeToString(resultDocument);
              setTransformedHTML(transformedHTML);
            } else {
              setTransformedHTML("XSLT transformation is not supported in this browser.");
            }
          }
        };
        xsltHttpRequest.send();
      }
    };
    xmlHttpRequest.send();
  }

  return (
    <div id="output">
      {/* Transformed content will be displayed here */}
      {transformedHTML}
    </div>
  );
}

export default ModifyFaculty;
