import React from 'react';
import { Coffee, Book, GitBranch, Award } from 'lucide-react';

const MoringaReportViewer = ({ driveLink }) => {
  const bottomIcons = [
    { Icon: Coffee, label: 'Benefits' },
    { Icon: Book, label: 'Recepies' },
    { Icon: GitBranch, label: 'Traceability' },
    { Icon: Award, label: 'Quality' },
  ];

  // Function to convert Google Drive link to embed URL
  const getEmbedUrl = (url) => {
    const fileId = url.match(/[-\w]{25,}/);
    return fileId 
      ? `https://drive.google.com/file/d/${fileId[0]}/preview`
      : '';
  };

  return (
    <div className="flex flex-col mt-16 h-screen bg-gray-100">
      <div className="flex-1 overflow-hidden">
        <iframe
          src={getEmbedUrl(driveLink)}
          className="w-full h-full border-none"
          title="PDF Viewer"
          allowFullScreen
        />
      </div>
      <div className="flex fixed bottom-0 w-full justify-around items-center bg-white p-4 border-t border-gray-200">
        {bottomIcons.map(({ Icon, label }, index) => (
          <div key={index} className="flex flex-col items-center">
            <Icon className="w-6 h-6 mb-1" />
            <span className="text-xs">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoringaReportViewer;