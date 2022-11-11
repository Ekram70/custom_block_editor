import React from 'react';
import styles from './constants';

const FormButtons = ({ handleClick, handleCancel, setPreviewData }) => {
  const handleDoneBtn = (e) => {
    e.preventDefault();
    handleClick(e);
    setPreviewData('');
  };

  const handleCancelBtn = (e) => {
    e.preventDefault();
    handleCancel(e);
    setPreviewData('');
  };

  return (
    <div className="flex justify-end">
      <button onClick={handleDoneBtn} className={styles.formDoneButton}>
        Done
      </button>
      <button onClick={handleCancelBtn} className={styles.formCancelButton}>
        Cancel
      </button>
    </div>
  );
};

export default FormButtons;
