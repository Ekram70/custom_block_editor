import { useState } from 'react';

const ParagraphForm = ({ setData, setShow, onSearchChange }) => {
  const [value, setValue] = useState('');
  const [first, setFirst] = useState(true);
  const [fontSize, setFontSize] = useState('text-base');
  const [textAlign, setTextAlign] = useState('text-left');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (value) {
      setData((data) => {
        return [
          ...data,
          {
            item: 'paragraph',
            data: {
              fontSize: fontSize,
              textAlign: textAlign,
              text: value,
            },
          },
        ];
      });
      setValue('');
      setShow(false);
      onSearchChange('');
    } else {
      setFirst(false);
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
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
            Enter Paragraph Text
          </label>
          <div className="flex gap-2">
            <div className="flex justify-end rounded-md">
              <button
                type="button"
                onClick={() => setTextAlign('text-left')}
                className={`${
                  textAlign === 'text-left'
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-white text-gray-900 hover:bg-blue-700 hover:text-white'
                } py-1 px-2 text-sm font-medium rounded-l-lg border border-gray-200`}
              >
                left
              </button>
              <button
                type="button"
                onClick={() => setTextAlign('text-center')}
                className={`${
                  textAlign === 'text-center'
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-white text-gray-900 hover:bg-blue-700 hover:text-white'
                } py-1 px-2 text-sm font-medium border-t border-b border-gray-200`}
              >
                center
              </button>
              <button
                type="button"
                onClick={() => setTextAlign('text-right')}
                className={`${
                  textAlign === 'text-right'
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-white text-gray-900 hover:bg-blue-700 hover:text-white'
                } py-1 px-2 text-sm font-medium rounded-r-md border border-gray-200`}
              >
                right
              </button>
            </div>
            <div className="flex justify-end rounded-md">
              <button
                type="button"
                onClick={() => setFontSize('text-xs')}
                className={`${
                  fontSize === 'text-xs'
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-white text-gray-900 hover:bg-blue-700 hover:text-white'
                } py-1 px-2 text-sm font-medium rounded-l-lg border border-gray-200`}
              >
                xs
              </button>
              <button
                type="button"
                onClick={() => setFontSize('text-sm')}
                className={`${
                  fontSize === 'text-sm'
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-white text-gray-900 hover:bg-blue-700 hover:text-white'
                } py-1 px-2 text-sm font-medium border-t border-b border-gray-200`}
              >
                sm
              </button>
              <button
                type="button"
                onClick={() => setFontSize('text-base')}
                className={`${
                  fontSize === 'text-base'
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-white text-gray-900 hover:bg-blue-700 hover:text-white'
                } py-1 px-2 text-sm font-medium border-t border-b border-gray-200`}
              >
                base
              </button>
              <button
                type="button"
                onClick={() => setFontSize('text-lg')}
                className={`${
                  fontSize === 'text-lg'
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-white text-gray-900 hover:bg-blue-700 hover:text-white'
                } py-1 px-2 text-sm font-medium border-t border-b border-gray-200`}
              >
                lg
              </button>
              <button
                type="button"
                onClick={() => setFontSize('text-xl')}
                className={`${
                  fontSize === 'text-xl'
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-white text-gray-900 hover:bg-blue-700 hover:text-white'
                } py-1 px-2 text-sm font-medium rounded-r-md border border-gray-200`}
              >
                xl
              </button>
            </div>
          </div>
        </div>
        <textarea
          value={value}
          onChange={handleChange}
          className="block p-2.5 w-full h-44 text-sm text-gray-900 bg-blue-50 rounded-lg border-dashed border-2 border-sky-500 focus-visible:outline-none font-semibold "
        ></textarea>
      </div>

      <br />

      <div>
        {!value && !first && (
          <div
            className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
            role="alert"
          >
            <span className="font-medium">Danger alert!</span> Please Enter Some
            Text.
          </div>
        )}
      </div>

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

export default ParagraphForm;
