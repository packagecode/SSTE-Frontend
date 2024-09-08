import React from "react";
import GoogleDocsViewer from "react-google-docs-viewer";

const ShowPDF = ({ pdfUrl }) => {
  const modifiedUrl = pdfUrl.replace(/view(\?usp=sharing)?/, 'preview'); // replace view with preview

  return (
    <div>
      {/* <GoogleDocsViewer width="600px" height="780px" fileUrl={googleViewerUrl} /> */}
      <iframe
      src={modifiedUrl}
      className="w-full h-screen my-10"
      title="Google PDF Viewer"
      frameBorder="0"
    />
    </div>
  );
};

export default ShowPDF;
