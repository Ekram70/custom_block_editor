import { Select } from '@mantine/core';
import { useState } from 'react';
import { Headings, Paragraph, Quote, SectionWrapper } from './components';
import {
  HeadingsForm,
  ParagraphForm,
  QuoteForm,
} from './components/EditorForm';

import styles from './components/constants';

function App() {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const [searchValue, onSearchChange] = useState('');

  const handleClick = (e) => {
    e.preventDefault();
    setShow(!show);
    onSearchChange('');
  };

  // moveUp, moveDown, deleteSection for wrapper Section
  const moveUp = (id) => {
    if (data.length >= 2) {
      if (id > 0) {
        const currentItem = data[id];
        setData((data) => {
          data.splice(id - 1, 0, currentItem);
          data.splice(id + 1, 1);
          return [...data];
        });
      }
    }
  };

  const moveDown = (id) => {
    if (id + 1 < data.length) {
      moveUp(id + 1);
    }
  };

  const deleteSection = (id) => {
    setData((data) => {
      data.splice(id, 1);
      return [...data];
    });
  };

  return (
    <div className="container mx-auto max-w-6xl py-6">
      {/* Store data shown first */}
      <div>
        {data.map((singleData, idx) => {
          if (singleData.item === 'paragraph') {
            return (
              <SectionWrapper
                key={idx}
                id={idx}
                moveUp={moveUp}
                moveDown={moveDown}
                deleteSection={deleteSection}
              >
                <Paragraph data={singleData.data} />
              </SectionWrapper>
            );
          }
          if (singleData.item === 'quote') {
            return (
              <SectionWrapper
                key={idx}
                id={idx}
                moveUp={moveUp}
                moveDown={moveDown}
                deleteSection={deleteSection}
              >
                <Quote data={singleData.data} />
              </SectionWrapper>
            );
          }
          if (singleData.item === 'headings') {
            return (
              <SectionWrapper
                key={idx}
                id={idx}
                moveUp={moveUp}
                moveDown={moveDown}
                deleteSection={deleteSection}
              >
                <Headings data={singleData.data} />
              </SectionWrapper>
            );
          }
        })}
      </div>
      <br />

      {/* add section btn */}
      <div className="text-center">
        <button onClick={handleClick} className={styles.addSectionBtn}>
          Add Section
        </button>
      </div>
      <br />

      {/* this is the dropdown for section selection */}
      {show && (
        <Select
          placeholder="Pick one"
          transition="pop-top-left"
          transitionDuration={80}
          transitionTimingFunction="ease"
          variant="filled"
          radius="md"
          searchable
          onSearchChange={onSearchChange}
          searchValue={searchValue}
          nothingFound="No options"
          data={[
            { value: 'paragraph', label: 'Paragraph' },
            { value: 'quote', label: 'Quote' },
            { value: 'headings', label: 'Headings' },
          ]}
          className="flex justify-center"
        />
      )}

      <br />
      <br />

      {/* Showing Forms upon section selection */}

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
}

export default App;
