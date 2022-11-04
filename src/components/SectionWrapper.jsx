import {
  faArrowDown,
  faArrowUp,
  faPenToSquare,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const SectionWrapper = ({ id, moveUp, moveDown, deleteSection, children }) => {
  const [show, setShow] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setShow(!show);
  };

  return (
    <div
      onClick={handleClick}
      className="hover:ring-2 hover:ring-pink-500 hover:ring-offset-8 rounded transition-ring duration-200 mt-14 relative"
    >
      <div
        className={`${
          show ? 'block' : 'hidden'
        } absolute -top-10 right-0 bg-stone-200 rounded`}
      >
        <FontAwesomeIcon
          onClick={() => moveUp(id)}
          className="cursor-pointer mx-1 hover:text-sky-400"
          icon={faArrowUp}
        />
        <FontAwesomeIcon
          onClick={() => moveDown(id)}
          className="cursor-pointer mx-1 hover:text-sky-400"
          icon={faArrowDown}
        />
        <FontAwesomeIcon
          onClick={() => deleteSection(id)}
          className="cursor-pointer mx-1 hover:text-red-600"
          icon={faTrash}
        />
        <FontAwesomeIcon
          className="cursor-pointer mx-1 hover:text-green-400"
          icon={faPenToSquare}
        />
      </div>
      {children}
    </div>
  );
};

export default SectionWrapper;
