import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import styles from './constants';

const UnorderedListForm = ({ setPreviewData, setListObj }) => {
  const [title, setTitle] = useState('');
  const [items, setItems] = useState(['']);

  useEffect(() => {
    if ((items.length > 0 && !items.includes('')) || title) {
      setPreviewData({
        item: 'lists',
        data: {
          type: 'unordered',
          title: title,
          items: items,
        },
      });

      setListObj({
        item: 'lists',
        data: {
          type: 'unordered',
          title: title,
          items: items,
        },
      });
    } else {
      setPreviewData('');
    }
  }, [title, items]);

  const handleItems = (e) => {
    const newValues = [];
    for (let i = 0; i < items.length; i++) {
      if (i !== Number(e.target.id)) {
        newValues.push(items[i]);
      } else {
        newValues.push(e.target.value);
      }
    }
    setItems([...newValues]);
  };

  const handleIncrement = (e) => {
    e.preventDefault();
    setItems((values) => {
      return [...values, ''];
    });
  };

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        name="title"
        className={styles.formQuoteInput}
        placeholder="Enter List Title (Optional)"
      />
      <br />
      {items.map((item, idx) => {
        return (
          <div key={idx}>
            <input
              type="text"
              value={item}
              id={idx}
              onChange={handleItems}
              className={styles.formQuoteInput}
              placeholder="Enter List Item"
            />
            <br />
          </div>
        );
      })}
      <div className="text-center">
        <button
          type="button"
          onClick={handleIncrement}
          className="text-white bg-blue-400 hover:bg-blue-500 rounded-full p-2.5 inline-flex items-center  active:scale-95"
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
    </div>
  );
};

export default UnorderedListForm;
