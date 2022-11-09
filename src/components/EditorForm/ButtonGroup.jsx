import React from 'react';

const ButtonGroup = ({ property, setProperty, values, texts }) => {
  return (
    <div className="flex rounded-md">
      {values.map((val, idx) => {
        let borderRadius = '';
        if (idx === 0) {
          borderRadius = 'rounded-l-lg';
        }
        if (idx === values.length - 1) {
          borderRadius = 'rounded-r-md';
        }

        return (
          <button
            key={idx}
            type="button"
            onClick={() => setProperty(val)}
            className={`${
              property === val
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-white text-gray-900 hover:bg-blue-700 hover:text-white'
            } py-1 px-2 text-sm font-medium border border-gray-200 ${borderRadius}`}
          >
            {texts[idx]}
          </button>
        );
      })}
    </div>
  );
};

export default ButtonGroup;
