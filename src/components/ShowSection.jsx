import React from 'react';
import { Headings, Paragraph, Quote, SectionWrapper } from './';

const ShowSection = ({ data, setData }) => {
  return (
    <div>
      {data.map((singleData, idx) => {
        if (singleData.item === 'paragraph') {
          return (
            <SectionWrapper key={idx} id={idx} data={data} setData={setData}>
              <Paragraph data={singleData.data} />
            </SectionWrapper>
          );
        }
        if (singleData.item === 'quote') {
          return (
            <SectionWrapper key={idx} id={idx} data={data} setData={setData}>
              <Quote data={singleData.data} />
            </SectionWrapper>
          );
        }
        if (singleData.item === 'headings') {
          return (
            <SectionWrapper key={idx} id={idx} data={data} setData={setData}>
              <Headings data={singleData.data} />
            </SectionWrapper>
          );
        }
      })}
    </div>
  );
};

export default ShowSection;
