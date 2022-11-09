import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { showNotification } from '@mantine/notifications';
import { useState } from 'react';
import ButtonGroup from './ButtonGroup';
import styles from './constants';
import FormButtons from './FormButtons';

const HeadingsForm = ({ setData, setShow, onSearchChange }) => {
  const [heading, setHeading] = useState('h1');
  const [value, setValue] = useState('');
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
            item: 'headings',
            data: {
              headingName: heading,
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
        <div className="flex justify-between mb-2">
          <label className={styles.formLabel}>Enter Heading Text</label>
          <div className="flex gap-2">
            <ButtonGroup
              property={textAlign}
              setProperty={setTextAlign}
              values={['text-left', 'text-center', 'text-right']}
              texts={['left', 'center', 'right']}
            />
            <ButtonGroup
              property={heading}
              setProperty={setHeading}
              values={['h1', 'h2', 'h3', 'h4', 'h5', 'h6']}
              texts={['h1', 'h2', 'h3', 'h4', 'h5', 'h6']}
            />
          </div>
        </div>

        <textarea
          value={value.text}
          name="text"
          onChange={handleChange}
          className={styles.formTextarea}
        ></textarea>
      </div>

      <br />

      <br />

      <FormButtons handleClick={handleClick} handleCancel={handleCancel} />
    </form>
  );
};

export default HeadingsForm;
