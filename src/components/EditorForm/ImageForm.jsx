import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FileInput } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import axios from 'axios';
import { useEffect, useState } from 'react';
import styles from './constants';
import FormButtons from './FormButtons';

const ImageForm = ({ setData, setShow, setPreviewData, onSearchChange }) => {
  const [url, setUrl] = useState('');

  console.log(url);

  useEffect(() => {
    if (url) {
      setPreviewData({
        item: 'image',
        data: {
          url: URL.createObjectURL(url),
        },
      });
    } else {
      setPreviewData('');
    }
  }, [url]);

  const handleClick = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('image', url);
    axios.post('https://backend.miraibd.com/api', formData, {}).then((res) => {
      if (res) {
        console.log(res);
        setData((data) => {
          return [
            ...data,
            {
              item: 'image',
              data: {
                url: res.data,
              },
            },
          ];
        });

        setUrl('');
        setShow(false);
        onSearchChange('');
      } else {
        showNotification({
          message: 'Please Enter An Image',
          autoClose: 1500,
          color: 'red',
          icon: <FontAwesomeIcon icon={faXmark} />,
          radius: 'md',
        });
      }
    });
  };

  const handleCancel = () => {
    setUrl('');
    setShow(false);
    onSearchChange('');
  };

  return (
    <form>
      <div>
        <div className="flex justify-between mb-2">
          <label className={styles.formLabel}>Enter Image</label>
        </div>

        <FileInput
          placeholder="Upload image"
          name="image"
          url={url}
          onChange={setUrl}
          className={styles.formImage}
          accept="image/png,image/jpeg"
        />
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

export default ImageForm;
