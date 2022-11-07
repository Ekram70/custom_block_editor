import { Select } from '@mantine/core';
import { useState } from 'react';
import { Paragraph, Quote, SectionWrapper } from './components';
import { ParagraphForm, QuoteForm } from './components/EditorForm';

function App() {
  const [show, setShow] = useState(false);
  const [showIconGroup, setShowIconGroup] = useState(false);
  const [data, setData] = useState([]);
  const [searchValue, onSearchChange] = useState('');

  const handleClick = (e) => {
    e.preventDefault();
    setShow(!show);
    onSearchChange('');
  };

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
        })}
      </div>
      <br />
      <div className="text-center">
        <button
          onClick={handleClick}
          className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl shadow-lg shadow-cyan-500/50 active:scale-95 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
        >
          Add Section
        </button>
      </div>
      <br />
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
          ]}
          className="flex justify-center"
        />
      )}

      <br />
      <br />
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
    </div>
  );
}

export default App;
