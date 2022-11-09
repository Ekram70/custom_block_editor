import { NotificationsProvider } from '@mantine/notifications';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './main.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NotificationsProvider
      position="bottom-center"
      containerWidth={300}
      zIndex={2077}
    >
      <App />
    </NotificationsProvider>
  </React.StrictMode>
);
