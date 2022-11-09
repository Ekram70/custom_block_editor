import {
  faArrowDown,
  faArrowUp,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useClickOutside } from '@mantine/hooks';
import React, { useState } from 'react';
import styles from './constants';

const SectionWrapper = ({ id, moveUp, moveDown, deleteSection, children }) => {
  const [show, setShow] = useState(false);

  const ref = useClickOutside(() => {
    setShow(false);
  });

  const handleClick = (e) => {
    e.preventDefault();
    setShow(!show);
  };

  return (
    <div onClick={handleClick} ref={ref} className={styles.sectionWrapper}>
      <div
        className={`${
          show ? 'block' : 'hidden'
        } absolute -top-12 right-0 bg-stone-200 rounded`}
      >
        <div className="inline-flex rounded-md shadow-sm">
          <button
            type="button"
            onClick={() => moveUp(id)}
            className={`${styles.sectionWrapperBtn} hover:text-sky-400 rounded-l-lg`}
          >
            <FontAwesomeIcon icon={faArrowUp} />
          </button>
          <button
            type="button"
            onClick={() => moveDown(id)}
            className={`${styles.sectionWrapperBtn} hover:text-sky-400`}
          >
            <FontAwesomeIcon icon={faArrowDown} />
          </button>
          <button
            type="button"
            onClick={() => deleteSection(id)}
            className={`${styles.sectionWrapperBtn} hover:text-red-600 rounded-r-md`}
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </div>
      {children}
    </div>
  );
};

export default SectionWrapper;
