import React from 'react';

const ImageComponent = ({ data }) => {
  return <img src={data.url} className="max-w-3xl mx-auto" />;
};

export default ImageComponent;
