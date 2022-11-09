import React from 'react';

const Paragraph = ({ data }) => {
  return (
    <p
      className={`${data.fontSize} ${data.textAlign} font-medium text-gray-900`}
    >
      {data.text}
    </p>
  );
};

export default Paragraph;
