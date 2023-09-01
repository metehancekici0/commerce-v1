import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ToastProvider = ({ children }) => {
    return (
      <div>
        <ToastContainer />
        {children}
      </div>
    );
  };