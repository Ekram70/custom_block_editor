import { faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { showNotification } from '@mantine/notifications';
import { useEffect, useState } from 'react';
import ButtonGroup from './ButtonGroup';
import styles from './constants';
import FormButtons from './FormButtons';

const ListsForm = ({ setData, setShow, setPreviewData, onSearchChange }) => {
  const [list, setList] = useState('ordered');
  const [title, setTitle] = useState('');
  const [items, setItems] = useState(['']);

  useEffect(() => {
    if ((items.length > 0 && !items.includes('')) || title) {
      setPreviewData({
        item: 'lists',
        data: {
          title: title,
          type: list,
          items: items,
        },
      });
    } else {
      setPreviewData('');
    }
  }, [list, title, items]);

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

  const handleClick = (e) => {
    e.preventDefault();
    if (items.length > 0 && !items.includes('')) {
      setData((data) => {
        return [
          ...data,
          {
            item: 'lists',
            data: {
              title: title,
              type: list,
              items: items,
            },
          },
        ];
      });
      setShow(false);
      onSearchChange('');
    } else {
      showNotification({
        message: 'Please fill up the items',
        autoClose: 1500,
        color: 'red',
        icon: <FontAwesomeIcon icon={faXmark} />,
        radius: 'md',
      });
    }
  };

  const handleCancel = () => {
    setShow(false);
    onSearchChange('');
  };

  return (
    <form>
      <div>
        <div className="flex justify-between mb-2">
          <label className={styles.formLabel}>Enter List Type</label>
          <div className="flex gap-2">
            <ButtonGroup
              property={list}
              setProperty={setList}
              values={['ordered', 'unordered', 'unstyled', 'desccription']}
              texts={['ordered', 'unordered', 'unstyled', 'desccription']}
            />
          </div>
        </div>

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
      </div>

      <br />

      <br />

      <FormButtons
        handleClick={handleClick}
        handleCancel={handleCancel}
        setPreviewData={setPreviewData}
      />
    </form>
  );
};

export default ListsForm;
