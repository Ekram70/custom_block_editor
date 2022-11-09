import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Alert } from '@mantine/core';
import { useState } from 'react';

const HeadingsForm = ({ setData, setShow, onSearchChange }) => {
  const [heading, setHeading] = useState('h1');
  const [value, setValue] = useState('');
  const [opened, setOpened] = useState(false);

  const handleChange = (e) => {
    setValue(e.target.value);
    setOpened(true);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (value) {
      setData((data) => {
        return [
          ...data,
          {
            item: 'headings',
            data: {
              headingName: heading,
              text: value,
            },
          },
        ];
      });
      setValue('');
      setShow(false);
      onSearchChange('');
    } else {
      setOpened(true);
    }
  };

  const handleCancel = () => {
    setValue('');
    setShow(false);
    onSearchChange('');
  };

  return (
    <form>
      <div>
        <div className="flex justify-between mb-2">
          <label className="block mb-2 text-sm font-medium text-gray-400">
            Enter Heading Text
          </label>
          <div className="flex justify-end rounded-md">
            <button
              type="button"
              onClick={() => setHeading('h1')}
              className={`${
                heading === 'h1'
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-white text-gray-900 hover:bg-blue-700 hover:text-white'
              } py-1 px-2 text-sm font-medium rounded-l-lg border border-gray-200`}
            >
              h1
            </button>
            <button
              type="button"
              onClick={() => setHeading('h2')}
              className={`${
                heading === 'h2'
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-white text-gray-900 hover:bg-blue-700 hover:text-white'
              } py-1 px-2 text-sm font-medium border-t border-b border-gray-200`}
            >
              h2
            </button>
            <button
              type="button"
              onClick={() => setHeading('h3')}
              className={`${
                heading === 'h3'
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-white text-gray-900 hover:bg-blue-700 hover:text-white'
              } py-1 px-2 text-sm font-medium border-t border-b border-gray-200`}
            >
              h3
            </button>
            <button
              type="button"
              onClick={() => setHeading('h4')}
              className={`${
                heading === 'h4'
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-white text-gray-900 hover:bg-blue-700 hover:text-white'
              } py-1 px-2 text-sm font-medium border-t border-b border-gray-200`}
            >
              h4
            </button>
            <button
              type="button"
              onClick={() => setHeading('h5')}
              className={`${
                heading === 'h5'
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-white text-gray-900 hover:bg-blue-700 hover:text-white'
              } py-1 px-2 text-sm font-medium border-t border-b border-gray-200`}
            >
              h5
            </button>
            <button
              type="button"
              onClick={() => setHeading('h6')}
              className={`${
                heading === 'h6'
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-white text-gray-900 hover:bg-blue-700 hover:text-white'
              } py-1 px-2 text-sm font-medium rounded-r-md border border-gray-200`}
            >
              h6
            </button>
          </div>
        </div>

        <textarea
          value={value.text}
          name="text"
          onChange={handleChange}
          className="block p-2.5 w-full h-20 text-sm text-gray-900 bg-blue-50 rounded-lg border-dashed border-2 border-sky-500 focus-visible:outline-none font-semibold"
        ></textarea>
      </div>

      <br />

      {!value && opened && (
        <Alert
          icon={<FontAwesomeIcon icon={faCircleExclamation} />}
          title="Danger alert!"
          color="red"
          radius="md"
          variant="outline"
          onClose={() => setOpened(false)}
          withCloseButton
        >
          Please Enter Some Text.
        </Alert>
      )}

      <br />

      <div className="flex justify-end">
        <button
          onClick={handleClick}
          className="text-white bg-gradient-to-br from-green-500 to-blue-400 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Done
        </button>
        <button
          onClick={handleCancel}
          className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default HeadingsForm;
