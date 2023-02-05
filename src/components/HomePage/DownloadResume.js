import React from 'react';
import Resume from '../../assets/files/my-resume.pdf';

const DownloadResume = () => {
  const file = Resume;

  return (
    <div className="resume-container">
      <a href={file} download={Resume} className="download-btn">
        Download Resume PDF
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABIUlEQVR4nO2WLVIDQRBGO+BSSM4QlQPgOQKaO6CRKKowiUehOARqIjgAAkNRcXgu8FKpagGbn4VN785M5Xu6a6Zf9dezayYqgsIwiTilJMOyHRAEEjm2iQBT4A34Bh6A886XHdBHhMgjv7m3SkWeGyLzPbVnwJJ2FjlEnhpN3AWIpBwit40mrjtfdkAfESJj4MPLXoETq1FkDTDzshvrCfoUAU6BK+DLy96BS2BUzbIDF974NtYRm1Sx7MBnSzMvnS/dQm8iQ4NEHE0kGBQtR9GqIVr8/cPW+uXecdaiFpHUclYaRCQHSMTRRIKhoGXfeIlqfbXSP0TSICI5QCKOJhIMBS37T/SvZdlGGgR6tRxNJBgULUfRKjVapWBHLyJseFYMsVutr+83bgAAAABJRU5ErkJggg==" alt="resume icon" className="resume-icon" />
      </a>
    </div>
  );
};

export default DownloadResume;
