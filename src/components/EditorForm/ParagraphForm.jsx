import { useState } from 'react';
import ButtonGroup from './ButtonGroup';
import styles from './constants';
import DangerAlert from './DangerAlert';
import FormButtons from './FormButtons';

const ParagraphForm = ({ setData, setShow, onSearchChange }) => {
  const [value, setValue] = useState('');
  const [textAlign, setTextAlign] = useState('text-left');
  const [fontSize, setFontSize] = useState('text-base');
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
          <label className={styles.formLabel}>Enter Paragraph Text</label>
          <div className="flex gap-2">
            <ButtonGroup
              property={textAlign}
              setProperty={setTextAlign}
              values={['text-left', 'text-center', 'text-right']}
              texts={['left', 'center', 'right']}
            />
            <ButtonGroup
              property={fontSize}
              setProperty={setFontSize}
              values={['text-xs', 'text-sm', 'text-base', 'text-lg', 'text-xl']}
              texts={['xs', 'sm', 'base', 'lg', 'xl']}
            />
          </div>
        </div>
        <textarea
          value={value}
          onChange={handleChange}
          className={styles.formTextarea}
        ></textarea>
      </div>

      <br />

      {!value && opened && <DangerAlert setOpened={setOpened} />}

      <br />

      <FormButtons handleClick={handleClick} handleCancel={handleCancel} />
    </form>
  );
};

export default ParagraphForm;
