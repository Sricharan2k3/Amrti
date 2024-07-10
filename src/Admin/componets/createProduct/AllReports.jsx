import React, { useState, useEffect } from "react";
import { findAllReport } from "../../../State/Report/Action";
import { useDispatch, useSelector } from "react-redux";

const AllReports = () => {
  const dispatch = useDispatch();
  const { report } = useSelector((store) => store);
  useEffect(() => {
    dispatch(findAllReport());
  }, []);
    return (
      <div className="container mx-auto">
        <table className="table-auto w-full text-left">
          <thead>
            <tr>
              <th className="px-4 py-2">Batch No</th>
              <th className="px-4 py-2">Product Name</th>
              <th className="px-4 py-2">QR Code</th>
            </tr>
          </thead>
          <tbody>
            {report?.payload?.map((item) => (
              <tr key={item._id}>
                <td className="border px-4 py-2">{item.batchNo}</td>
                <td className="border px-4 py-2">{item.detail1}</td>
                <td className="border px-4 py-2">{item.detail3}</td>
                <td className="border px-4 py-2">
                  <img
                    src={item.qrCode}
                    alt={`QR code for ${item.batchNo}`}
                    className="w-16 h-16"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
};

export default AllReports;
