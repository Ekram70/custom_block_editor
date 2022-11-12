import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { showNotification } from '@mantine/notifications';
import { useEffect, useState } from 'react';
import ButtonGroup from './ButtonGroup';
import styles from './constants';
import DescriptionListForm from './DescriptionListForm';
import FormButtons from './FormButtons';
import OrderedListForm from './OrderedListForm';
import UnorderedListForm from './UnorderedListForm';
import UnstyledListForm from './UnstyledListForm';

const ListsForm = ({ setData, setShow, setPreviewData, onSearchChange }) => {
  const [list, setList] = useState('ordered');
  const [listObj, setListObj] = useState({});

  useEffect(() => {
    setPreviewData('');
  }, [list]);

  const handleClick = (e) => {
    e.preventDefault();
    if (listObj?.data?.items.length) {
      setData((data) => {
        return [...data, listObj];
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
              values={['ordered', 'unordered', 'unstyled', 'description']}
              texts={['ordered', 'unordered', 'unstyled', 'description']}
            />
          </div>
        </div>
        {list === 'ordered' && (
          <OrderedListForm
            setPreviewData={setPreviewData}
            setListObj={setListObj}
          />
        )}

        {list === 'unordered' && (
          <UnorderedListForm
            setPreviewData={setPreviewData}
            setListObj={setListObj}
          />
        )}

        {list === 'unstyled' && (
          <UnstyledListForm
            setPreviewData={setPreviewData}
            setListObj={setListObj}
          />
        )}

        {list === 'description' && (
          <DescriptionListForm
            setPreviewData={setPreviewData}
            setListObj={setListObj}
          />
        )}
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
