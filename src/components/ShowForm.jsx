import React from 'react';
import {
  HeadingsForm,
  ImageForm,
  ListsForm,
  ParagraphForm,
  QuoteForm,
} from './EditorForm';

const ShowForm = ({
  searchValue,
  setData,
  setShow,
  setPreviewData,
  onSearchChange,
}) => {
  return (
    <div>
      {searchValue === 'Paragraph' && (
        <ParagraphForm
          setData={setData}
          setShow={setShow}
          setPreviewData={setPreviewData}
          onSearchChange={onSearchChange}
        />
      )}
      {searchValue === 'Quote' && (
        <QuoteForm
          setData={setData}
          setShow={setShow}
          setPreviewData={setPreviewData}
          onSearchChange={onSearchChange}
        />
      )}
      {searchValue === 'Headings' && (
        <HeadingsForm
          setData={setData}
          setShow={setShow}
          setPreviewData={setPreviewData}
          onSearchChange={onSearchChange}
        />
      )}
      {searchValue === 'Lists' && (
        <ListsForm
          setData={setData}
          setShow={setShow}
          setPreviewData={setPreviewData}
          onSearchChange={onSearchChange}
        />
      )}
      {searchValue === 'Image' && (
        <ImageForm
          setData={setData}
          setShow={setShow}
          setPreviewData={setPreviewData}
          onSearchChange={onSearchChange}
        />
      )}
    </div>
  );
};

export default ShowForm;
