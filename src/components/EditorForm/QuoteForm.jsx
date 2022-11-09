import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { showNotification } from '@mantine/notifications';
import { useState } from 'react';
import styles from './constants';
import FormButtons from './FormButtons';

const QuoteForm = ({ setData, setShow, onSearchChange }) => {
  const [value, setValue] = useState({
    text: '',
    author: '',
    designation: '',
  });

  const handleChange = (e) => {
    setValue((value) => {
      return {
        ...value,
        [e.target.name]: e.target.value,
      };
    });
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
      showNotification({
        message: 'Please Enter Some Text',
        autoClose: 1500,
        color: 'red',
        icon: <FontAwesomeIcon icon={faXmark} />,
        radius: 'md',
      });
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
        <label className={styles.formLabel}>Enter Quote Text</label>
        <textarea
          value={value.text}
          name="text"
          onChange={handleChange}
          className={styles.formTextarea}
        ></textarea>
      </div>

      <br />

      <br />

      <div className="flex justify-between">
        <div className="w-1/2 mr-2">
          <label className={styles.formLabel}>Author Name (Optional)</label>
          <input
            type="text"
            value={value.author}
            onChange={handleChange}
            name="author"
            className={styles.formQuoteInput}
            placeholder="Enter Author Name"
          />
        </div>

        <div className="w-1/2 ml-2">
          <label className={styles.formLabel}>
            Author Designation (Optional)
          </label>
          <input
            type="text"
            value={value.designation}
            onChange={handleChange}
            name="designation"
            className={styles.formQuoteInput}
            placeholder="Enter Author Designation"
          />
        </div>
      </div>

      <br />

      <FormButtons handleClick={handleClick} handleCancel={handleCancel} />
    </form>
  );
};

export default QuoteForm;
