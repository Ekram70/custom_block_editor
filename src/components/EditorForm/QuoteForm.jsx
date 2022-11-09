import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Alert } from '@mantine/core';
import { useState } from 'react';

const QuoteForm = ({ setData, setShow, onSearchChange }) => {
  const [value, setValue] = useState({
    text: '',
    author: '',
    designation: '',
  });
  const [opened, setOpened] = useState(false);

  const handleChange = (e) => {
    setValue((value) => {
      return {
        ...value,
        [e.target.name]: e.target.value,
      };
    });
    setOpened(true);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (value.text) {
      setData((data) => {
        return [
          ...data,
          {
            item: 'quote',
            data: {
              text: value.text,
              author: value.author,
              designation: value.designation,
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
        <label className="block mb-2 text-sm font-medium text-gray-400">
          Enter Quote Text
        </label>
        <textarea
          value={value.text}
          name="text"
          onChange={handleChange}
          className="block p-2.5 w-full h-20 text-sm text-gray-900 bg-blue-50 rounded-lg border-dashed border-2 border-sky-500 focus-visible:outline-none font-semibold"
        ></textarea>
      </div>

      <br />

      {!value.text && opened && (
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

      <div className="flex justify-between">
        <div className="w-1/2 mr-2">
          <label className="block mb-2 text-sm font-medium text-gray-400">
            Author Name (Optional)
          </label>
          <input
            type="text"
            value={value.author}
            onChange={handleChange}
            name="author"
            className="block p-2.5 w-full h-10 text-sm text-gray-900 bg-blue-50 rounded-lg border-dashed border-2 border-sky-500 focus-visible:outline-none font-semibold"
            placeholder="Enter Author Name"
          />
        </div>

        <div className="w-1/2 ml-2">
          <label className="block mb-2 text-sm font-medium text-gray-400">
            Author Designation (Optional)
          </label>
          <input
            type="text"
            value={value.designation}
            onChange={handleChange}
            name="designation"
            className="block p-2.5 w-full h-10 text-sm text-gray-900 bg-blue-50 rounded-lg border-dashed border-2 border-sky-500 focus-visible:outline-none font-semibold"
            placeholder="Enter Author Designation"
          />
        </div>
      </div>

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

export default QuoteForm;
