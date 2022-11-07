import {
  faArrowDown,
  faArrowUp,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useClickOutside } from '@mantine/hooks';
import React, { useState } from 'react';

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
    <div
      onClick={handleClick}
      ref={ref}
      className="hover:ring-2 hover:ring-slate-300 hover:ring-offset-8 rounded-sm transition-ring duration-200 mt-16 relative"
    >
      <div
        className={`${
          show ? 'block' : 'hidden'
        } absolute -top-12 right-0 bg-stone-200 rounded`}
      >
        <div className="inline-flex rounded-md shadow-sm">
          <button
            type="button"
            onClick={() => moveUp(id)}
            className="py-1 px-2 text-sm font-medium text-gray-900 bg-white rounded-l-lg border border-gray-200 hover:text-sky-400"
          >
            <FontAwesomeIcon icon={faArrowUp} />
          </button>
          <button
            type="button"
            onClick={() => moveDown(id)}
            className="py-1 px-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:text-sky-400"
          >
            <FontAwesomeIcon icon={faArrowDown} />
          </button>
          <button
            type="button"
            onClick={() => deleteSection(id)}
            className="py-1 px-2 text-sm font-medium text-gray-900 bg-white rounded-r-md border border-gray-200 hover:text-red-600"
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
