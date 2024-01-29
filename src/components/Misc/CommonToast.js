import toast from "react-hot-toast";

const commonToasts = {
  errorToast,
  successToast,
};
export default commonToasts;

function errorToast(data) {
  toast.error(data, {
    duration: 3000,
    position: "top-right",
    className: "text-danger toast-danger",
  });
}

function successToast(data) {
  toast.success(data, {
    duration: 3000,
    position: "top-right",
    className: "text-green toast-success",
  });
}
