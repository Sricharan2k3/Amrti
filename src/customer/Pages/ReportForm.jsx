// ReportForm.js
import React, { useState } from "react";
import axios from "axios";

import api, { API_BASE_URL } from "../../config/api";
function ReportForm() {
  const [batchNo, setBatchNo] = useState("");
  const [details, setDetails] = useState("");
  const qrCodeUrl =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAYAAAB1PADUAAAAAklEQVR4AewaftIAAASySURBVO3BQY4cSRIEQdNA/f/Lun30UwCJ9GoOuSaCP1K15KRq0UnVopOqRSdVi06qFp1ULTqpWnRSteikatFJ1aKTqkUnVYtOqhadVC06qVr0yUtAfpOaGyA3aiYgk5obIDdqboDcqJmA/CY1b5xULTqpWnRSteiTZWo2AXlCzQ2QN9S8oeYNNZuAbDqpWnRSteikatEnXwbkCTVPAPkmIJOaCcikZgJyo+YNIE+o+aaTqkUnVYtOqhZ98o9T84aaJ4BMam6ATGr+ZidVi06qFp1ULfrkHwfkm9Q8AeRfdlK16KRq0UnVok++TM2/DMgTaiYgb6j5LzmpWnRSteikatEny4D8SWomIJOaCcikZgIyqZmATGomIJuA/JedVC06qVp0UrXok5fU/E2A3ACZ1ExAJjU3aiYgT6j5m5xULTqpWnRSteiTl4BMaiYgm9RMap5Q8wSQJ4A8oeYGyCY133RSteikatFJ1SL8kReAvKFmAjKpeQPIE2pugPxJaiYgk5ongExq3jipWnRSteikatEnL6mZgExqJiA3aiYgk5o/Sc0NkEnNG0AmIJvUbDqpWnRSteikahH+yAtAnlAzAZnU3ACZ1HwTkEnNBGRS8waQGzVvAJnUbDqpWnRSteikatEnL6l5AsgNkBs1N0AmNW+oeQPIpGYCMql5A8iNmm86qVp0UrXopGrRJy8BuVFzo+YNIJOaGyCTmgnIE2pu1ExAboC8oWYCcgNkUvPGSdWik6pFJ1WLPvkyIE8AuVFzA+QJIG8AmdRMQCY1E5AbNTdA3lCz6aRq0UnVopOqRZ+8pOYGyKTmCTU3am6ATGomIDdqJiCTmk1qJiBvqJmATGo2nVQtOqladFK16JNlQG6APAFkUjMBmdQ8oeYGyDepuVEzAZnU3ACZ1HzTSdWik6pFJ1WL8EdeADKpeQPIpGYC8k1qboDcqLkB8iepmYBMat44qVp0UrXopGrRJ78MyI2aCcikZgIyqbkBMql5Qs0TQCY1TwCZ1NwAeULNppOqRSdVi06qFn3yZUAmNROQCcikZgIyqZmAbAIyqZmATGpugExq3gAyqbkBMqnZdFK16KRq0UnVIvyRF4BMam6ATGomIDdq3gAyqXkDyI2aGyCb1ExAnlDzxknVopOqRSdVi/BH/mJAJjU3QDapmYBMaiYgN2qeALJJzRsnVYtOqhadVC3CH3kByG9S801A/iQ1E5BJzQTkCTXfdFK16KRq0UnVok+WqdkE5AbIpOYGyBNqJiCTmieAPKHmDTW/6aRq0UnVopOqRZ98GZAn1HyTmgnIpGYCsknNBGQC8oaaCcgTat44qVp0UrXopGrRJ/9ngDyhZgIyAZnUTECeUHMDZFJzo+Y3nVQtOqladFK16JN/DJBJzRtAJjXfBOQJIDdqJiCTmk0nVYtOqhadVC365MvUfJOaGyCTmgnIG0AmNTdqJiCTmgnI3+SkatFJ1aKTqkWfLAPym4BMaiY1E5BJzQRkUnOj5g01N2omIJOaGyCTmm86qVp0UrXopGoR/kjVkpOqRSdVi06qFp1ULTqpWnRSteikatFJ1aKTqkUnVYtOqhadVC06qVp0UrXopGrR/wBZVSIy0BLFMwAAAABJRU5ErkJggg==";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_BASE_URL}/api/admin/reports`, {
        batchNo,
        details,
      });
      alert("Report added successfully!");
    } catch (error) {
    
      alert("Failed to add the report.");
    }
  };

  return (
    <div style={{ marginTop: "100px", paddingTop: "100px" }}>
      <form onSubmit={handleSubmit}>
        <label>
          Batch No:
          <input
            type="text"
            value={batchNo}
            onChange={(e) => setBatchNo(e.target.value)}
          />
        </label>
        <br />
        <label>
          Details:
          <textarea
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      {/* Conditionally rendering the QR code image if the URL is available */}

      <img src={qrCodeUrl} alt="QR Code" style={{ marginTop: "20px" }} />
    </div>
  );
}

export default ReportForm;
