import React from 'react';

const Headings = ({ data }) => {
  if (data.headingName === 'h1') {
    return (
      <h1 className={`${data.textAlign} text-6xl font-extrabold`}>
        {data.text}
      </h1>
    );
  }
  if (data.headingName === 'h2') {
    return (
      <h2 className={`${data.textAlign} text-5xl font-extrabold`}>
        {data.text}
      </h2>
    );
  }
  if (data.headingName === 'h3') {
    return (
      <h3 className={`${data.textAlign} text-4xl font-extrabold`}>
        {data.text}
      </h3>
    );
  }
  if (data.headingName === 'h4') {
    return (
      <h4 className={`${data.textAlign} text-3xl font-extrabold`}>
        {data.text}
      </h4>
    );
  }
  if (data.headingName === 'h5') {
    return (
      <h5 className={`${data.textAlign} text-2xl font-extrabold`}>
        {data.text}
      </h5>
    );
  }
  if (data.headingName === 'h6') {
    return (
      <h6 className={`${data.textAlign} text-xl font-extrabold`}>
        {data.text}
      </h6>
    );
  }
};

export default Headings;
