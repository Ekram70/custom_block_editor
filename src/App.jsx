import { Select } from '@mantine/core';
import { useState } from 'react';
import styles from './components/constants';
import ShowForm from './components/ShowForm';
import ShowSection from './components/ShowSection';

function App() {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);
  const [searchValue, onSearchChange] = useState('');

  const handleClick = (e) => {
    e.preventDefault();
    setShow(!show);
    onSearchChange('');
  };

  return (
    <div className="container mx-auto max-w-6xl py-6">
      <ShowSection data={data} setData={setData} />

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

      <ShowForm
        searchValue={searchValue}
        setData={setData}
        setShow={setShow}
        onSearchChange={onSearchChange}
      />
    </div>
  );
}

export default App;
