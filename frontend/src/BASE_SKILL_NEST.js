import Swal from "sweetalert2";

export const BASE_URL = "https://skill-nest-institute.onrender.com";
export const Toast = Swal.mixin({
  toast: true,
  position: "top-right",
  //   iconColor: "error",
  customClass: {
    popup: "colored-toast",
  },
  showConfirmButton: false,
  timer: 1500,
  timerProgressBar: true,
});
