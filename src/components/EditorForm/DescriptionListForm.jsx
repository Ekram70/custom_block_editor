import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import styles from './constants';

const DescriptionListForm = ({ setPreviewData, setListObj }) => {
  const [title, setTitle] = useState('');
  const [items, setItems] = useState([{}]);

  console.log(items);

  useEffect(() => {
    if (items.length > 0 || title) {
      setPreviewData({
        item: 'lists',
        data: {
          type: 'description',
          title: title,
          items: items,
        },
      });

      setListObj({
        item: 'lists',
        data: {
          type: 'description',
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
        const modifiedItem = items[i];
        if (e.target.name === 'dt') {
          modifiedItem.dt = e.target.value;
        }
        if (e.target.name === 'dd') {
          modifiedItem.dd = e.target.value;
        }
        newValues.push(modifiedItem);
      }
    }
    setItems([...newValues]);
  };

  const handleIncrement = (e) => {
    e.preventDefault();
    setItems((values) => {
      return [...values, {}];
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
              value={item.dt}
              id={idx}
              name="dt"
              placeholder="Enter Description Title"
              onChange={handleItems}
              className={styles.formQuoteInput}
            />
            <br />
            <textarea
              value={item.dd}
              id={idx}
              name="dd"
              placeholder="Enter Description Detail"
              onChange={handleItems}
              className={styles.formTextarea}
            ></textarea>
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

export default DescriptionListForm;
