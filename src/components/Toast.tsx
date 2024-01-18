// Toast.js
import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toast = ({ message, type }) => {
  const showToast = () => {
    const toastOptions = {
      position: 'bottom-right',
      autoClose: 3000, // Close the toast after 3000 milliseconds (3 seconds)
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    };

    // Customize the appearance based on the type (success or error)
    if (type === 'success') {
      toast.success(message, { ...toastOptions, style: { background: 'green', color: '#fff' } });
    } else if (type === 'error') {
      toast.error(message, { ...toastOptions, style: { background: 'red', color: '#fff' } });
    }
  };

  return (
    <div>
      <button onClick={showToast}>Show Toast</button>
    </div>
  );
};

export default Toast;
