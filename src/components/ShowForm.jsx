import React from 'react';
import { HeadingsForm, ParagraphForm, QuoteForm } from './EditorForm';

const ShowForm = ({ searchValue, setData, setShow, onSearchChange }) => {
  return (
    <div>
      {searchValue === 'Paragraph' && (
        <ParagraphForm
          setData={setData}
          setShow={setShow}
          onSearchChange={onSearchChange}
        />
      )}
      {searchValue === 'Quote' && (
        <QuoteForm
          setData={setData}
          setShow={setShow}
          onSearchChange={onSearchChange}
        />
      )}
      {searchValue === 'Headings' && (
        <HeadingsForm
          setData={setData}
          setShow={setShow}
          onSearchChange={onSearchChange}
        />
      )}
    </div>
  );
};

export default ShowForm;
