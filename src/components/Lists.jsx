import React from 'react';

const Lists = ({ data }) => {
  {
    if (data.type === 'ordered') {
      return (
        <div>
          <h2 className="mb-2 text-2xl font-semibold text-gray-900">
            {data.title}
          </h2>
          <ol className="mt-2 space-y-1 list-decimal list-inside marker:font-bold text-lg font-medium">
            {data.items.map((item, idx) => {
              if (item) {
                return <li key={idx}>{item}</li>;
              }
            })}
          </ol>
        </div>
      );
    }

    if (data.type === 'unordered') {
      return (
        <div>
          <h2 className="mb-2 text-2xl font-semibold text-gray-900">
            {data.title}
          </h2>
          <ul className="mt-2 space-y-1 list-disc list-inside marker:font-bold text-lg font-medium">
            {data.items.map((item, idx) => {
              if (item) {
                return <li key={idx}>{item}</li>;
              }
            })}
          </ul>
        </div>
      );
    }

    if (data.type === 'unstyled') {
      return (
        <div>
          <h2 className="mb-2 text-2xl font-semibold text-gray-900">
            {data.title}
          </h2>
          <ul className="mt-2 space-y-1 list-none list-inside marker:font-bold text-lg font-medium">
            {data.items.map((item, idx) => {
              if (item) {
                return <li key={idx}>{item}</li>;
              }
            })}
          </ul>
        </div>
      );
    }

    if (data.type === 'description') {
      return (
        <div>
          <h2 className="mb-2 text-2xl font-semibold text-gray-900">
            {data.title}
          </h2>
          <dl>
            {data.items.map((item, idx) => {
              if (item) {
                return (
                  <div key={idx} className="flex flex-col">
                    <dt className="text-lg font-semibold">{item.dt}</dt>
                    <dd className="mb-1 text-gray-500 font-semibold">
                      {item.dd}
                    </dd>
                  </div>
                );
              }
            })}
          </dl>
        </div>
      );
    }
  }
};

export default Lists;
