import {useState} from 'react';

export default function useSnackbar() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');

  const openSnackbar = (message='') => {
    setOpen(true);
    setMessage(message);
  };

  const closeSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const snackbarProps = {
    open,
    autoHideDuration: 6000,
    onClose: closeSnackbar,
  };
 
  return { openSnackbar, closeSnackbar, snackbarProps, message };
}
