import { Select } from '@mantine/core';
import { useState } from 'react';
import styles from './components/constants';
import PreviewSection from './components/PreviewSection';
import ShowForm from './components/ShowForm';
import ShowSection from './components/ShowSection';

function App() {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const [previewData, setPreviewData] = useState('');
  const [searchValue, onSearchChange] = useState('');

  const handleClick = (e) => {
    e.preventDefault();
    setShow(!show);
    onSearchChange('');
  };

  return (
    <div className="container mx-auto max-w-6xl py-6">
      <ShowSection data={data} setData={setData} />
      <PreviewSection previewData={previewData} />
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
            { value: 'lists', label: 'Lists' },
          ]}
          className="flex justify-center"
        />
      )}
      <br />
      <br />

      {/* Showing Forms upon section selection */}
      <ShowForm
        searchValue={searchValue}
        setData={setData}
        setShow={setShow}
        setPreviewData={setPreviewData}
        onSearchChange={onSearchChange}
      />
    </div>
  );
}

export default App;
