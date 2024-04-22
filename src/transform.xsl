<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
  <xsl:template match="/">
    <html>
      <head>
        <title>Faculty Information</title>
        <style>
          table {
            width: 100%;
            border-collapse: collapse;
          }
          th, td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
          }
          th {
            background-color: #f2f2f2;
          }
        </style>
        <script>
          function editRow(email) {
            // Here you can implement your edit functionality, for example:
            // Redirect to an edit page with the email as a parameter
            window.location.href = "edit_faculty.php?email=" + encodeURIComponent(email);
          }
        </script>
      </head>
      <body>
        <h1>Faculty Details</h1>
        <table>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Designation</th>
            <th>Action</th> <!-- New column for edit button -->
          </tr>
          <xsl:apply-templates/>
        </table>
      </body>
    </html>
  </xsl:template>

  <xsl:template match="faculty">
    <tr>
      <td><xsl:value-of select="name"/></td>
      <td><a href="mailto:{email}"><xsl:value-of select="email"/></a></td>
      <td><xsl:value-of select="designation"/></td>
      <td><button onclick="editRow('{email}')">Edit</button></td> <!-- Edit button with onclick event -->
    </tr>
  </xsl:template>
</xsl:stylesheet>
