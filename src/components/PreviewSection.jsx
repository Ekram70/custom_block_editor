import React from 'react';
import { Headings, Paragraph, Quote, Lists } from './';

const PreviewSection = ({ previewData }) => {
  if (previewData) {
    if (previewData.item === 'paragraph') {
      return (
        <div className="mt-16">
          <Paragraph data={previewData.data} />
        </div>
      );
    }
    if (previewData.item === 'quote') {
      return (
        <div className="mt-16">
          <Quote data={previewData.data} />
        </div>
      );
    }
    if (previewData.item === 'headings') {
      return (
        <div className="mt-16">
          <Headings data={previewData.data} />
        </div>
      );
    }
    if (previewData.item === 'lists') {
      return (
        <div className="mt-16">
          <Lists data={previewData.data} />
        </div>
      );
    }
  } else {
    return null;
  }
};

export default PreviewSection;
