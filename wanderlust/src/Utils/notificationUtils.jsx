import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const notifyError = (error) => {
    toast.error(`${error}`);
};

export const notifySuccess = (message) => {
    toast.info(`${message}`);
};

export const ToastContainerWrapper = () => {
    return (
        <ToastContainer
            autoClose={3000}
            theme="colored"
        />
    );
};
