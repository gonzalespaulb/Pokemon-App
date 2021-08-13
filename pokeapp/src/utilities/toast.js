import {toast} from "react-toastify";

export const toaster = (badge) => {
    toast.dark(`Obtained ${badge}`, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
};