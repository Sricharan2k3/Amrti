import React, { useState, useEffect } from "react";

const AllReports = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    fetchReports();
  }, []);

  const fetchReports = async () => {
    try {
      // Replace this with your actual API endpoint
      const response = await fetch('https://amrti-main-backend.vercel.app/api/v1/amrti/products/getbatches');
      const data = await response.json();
      console.log(data)
      setReports(data.data.batches);
    } catch (error) {
      console.error('Error fetching reports:', error);
    }
  };

  return (
    <div className="container mx-auto">
      <table className="table-auto w-full text-left">
        <thead>
        <tr>
              <th className="px-4 py-2">Batch No</th>
              <th className="px-4 py-2">Product Name</th>
              <th className="px-4 py-2">Quantity</th>
              <th className="px-4 py-2">QR Code</th>
            </tr>
        </thead>
        <tbody>
          {reports.map((item) => (
            <tr key={item._id}>
              <td className="border px-4 py-2">{item.batchNo}</td>
                <td className="border px-4 py-2">{item.productName}</td>
                <td className="border px-4 py-2">{item.quantity}</td>
                <td className="border px-4 py-2"><a target="_blank"  rel="noreferrer" href={item.qrCode}>QR URL</a></td>
              {/* <td className="border px-4 py-2">
                <img
                  src={item.qrCode}
                  alt={`QR code for ${item.batchNo}`}
                  className="w-16 h-16"
                />
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllReports;









