import React from 'react';
import Resume from '../../assets/files/my-resume.pdf';

const DownloadResume = () => {
  const file = Resume;

  return (
    <div className="resume-container">
      <a href={file} download={Resume} className="download-btn">
        Download Resume PDF
      </a>
    </div>
  );
};

export default DownloadResume;
