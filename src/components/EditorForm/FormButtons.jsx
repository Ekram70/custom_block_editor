import React from 'react';
import styles from './constants';

const FormButtons = ({ handleClick, handleCancel }) => {
  return (
    <div className="flex justify-end">
      <button onClick={handleClick} className={styles.formDoneButton}>
        Done
      </button>
      <button onClick={handleCancel} className={styles.formCancelButton}>
        Cancel
      </button>
    </div>
  );
};

export default FormButtons;
