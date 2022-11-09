import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Alert } from '@mantine/core';
import React from 'react';

const DangerAlert = ({ setOpened }) => {
  return (
    <Alert
      icon={<FontAwesomeIcon icon={faCircleExclamation} />}
      className="text-red-700 bg-red-100"
      title="Danger alert!"
      color="red"
      radius="md"
      variant="outline"
      onClose={() => setOpened(false)}
      withCloseButton
    >
      Please Enter Some Text.
    </Alert>
  );
};

export default DangerAlert;
