import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { findReportById } from "../../State/Report/Action";
function convertToPreviewUrl(sharingUrl) {
  // Regular expression to extract the file ID from the URL
  const fileIdRegex = /\/d\/([a-zA-Z0-9_-]+)/;

  // Find the file ID using the regex match
  const match = sharingUrl.match(fileIdRegex);

  if (match && match[1]) {
    // If a file ID is found, construct the preview URL
    const fileId = match[1];
    return `https://drive.google.com/file/d/${fileId}/preview`;
  } else {
    // Optionally handle URLs that don't match the expected format
    console.error("Invalid Google Drive sharing URL");
    return null;
  }
}
const Report = () => {
    const dispatch = useDispatch();
    const [previewUrl, setPreviewUrl] = useState("");
     const { report } = useSelector((store) => store);
     const { reportId } = useParams();
     console.log("pr",reportId)
     useEffect(() => {
       const data = { reportId: reportId };
       dispatch(findReportById(data));
       console.log("report", report);
     }, []);
      useEffect(() => {
        if (report?.payload?.detail2) {
          const url = convertToPreviewUrl(report.payload.detail2);
          setPreviewUrl(url);
        }
      }, [report]);
  const pdfUrl = `https://drive.google.com/file/d/1TpO1_v_cUlXkpFWxMhM9Htvc1qXoPupW/preview`;
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen p-4"
      style={{ marginTop: "50px" }}
    >
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-8">
        Quality Report for {report?.payload?.detail1}
      </h1>
      <div
        className=" h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px] 2xl:h-[900px] bg-white shadow-md overflow-hidden"
        style={{ width: "70%" }}
      >
        <iframe
          src={previewUrl}
          className="w-full h-full"
          frameBorder="0"
          title="Quality Report PDF"
        ></iframe>
      </div>
      <div style={{ height: "100px" }}></div>
    </div>
  );
};

export default Report;
