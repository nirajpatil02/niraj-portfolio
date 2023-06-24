import React from 'react';
import styles from "./styles.module.css";

const ResumeButton = () => {
    const handleDownload = () => {
        window.open("./documents/Niraj's Resume_2.pdf", '_blank');
      };
      return (
        <button onClick={handleDownload} className={styles.nav_resume_btn}>Download Resume</button>
      );
  };


export default ResumeButton;
