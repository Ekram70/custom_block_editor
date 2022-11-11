import {
  faArrowDown,
  faArrowUp,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useClickOutside } from '@mantine/hooks';
import React, { useState } from 'react';
import styles from './constants';

const SectionWrapper = ({ id, data, setData, children }) => {
  const [show, setShow] = useState(false);

  const ref = useClickOutside(() => {
    setShow(false);
  });

  const handleClick = (e) => {
    e.preventDefault();
    setShow(!show);
  };

  // moveUp, moveDown, deleteSection for wrapper Section
  const moveUp = (id) => {
    if (data.length >= 2) {
      if (id > 0) {
        const currentItem = data[id];
        setData((data) => {
          data.splice(id - 1, 0, currentItem);
          data.splice(id + 1, 1);
          return [...data];
        });
      }
    }
  };

  const moveDown = (id) => {
    if (id + 1 < data.length) {
      moveUp(id + 1);
    }
  };

  const deleteSection = (id) => {
    setData((data) => {
      data.splice(id, 1);
      return [...data];
    });
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
