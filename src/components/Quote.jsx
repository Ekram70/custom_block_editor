import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Quote = ({ data }) => {
  return (
    <figure className="mx-auto max-w-screen-md text-center text-red-400">
      <FontAwesomeIcon
        className="mx-auto mb-3 w-12 h-12 text-gray-400"
        icon={faQuoteLeft}
      />

      <blockquote>
        <p className="text-2xl italic font-medium text-gray-900">
          "{data.text}"
        </p>
      </blockquote>
      {data.author && data.designation && (
        <figcaption className="flex justify-center items-center mt-6 space-x-3">
          <img
            className="w-6 h-6 rounded-full"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
            alt="profile picture"
          />
          <div className="flex items-center divide-x-2 divide-gray-500">
            <cite className="pr-3 font-medium text-gray-900">
              {data.author}
            </cite>
            <cite className="pl-3 text-sm font-light text-gray-500">
              {data.designation}
            </cite>
          </div>
        </figcaption>
      )}
    </figure>
  );
};

export default Quote;
