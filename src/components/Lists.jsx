import React from 'react';

const Lists = ({ data }) => {
  console.log(data);
  return (
    <div>
      <h2 class="mb-2 text-2xl font-semibold text-gray-900">{data.title}</h2>
      <ol className="pl-5 mt-2 space-y-1 list-decimal list-inside marker:font-bold text-lg font-medium">
        {data.items.map((item) => {
          if (item) {
            return <li>{item}</li>;
          }
        })}
      </ol>
    </div>
  );
};

export default Lists;
