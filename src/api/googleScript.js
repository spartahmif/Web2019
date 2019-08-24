import Axios from "axios";

export const googleScript = Axios.create({
  baseURL:
    "https://script.google.com/macros/s/AKfycbw_-JXee7qJ_i-S4UsbxpQTHPBzr5cv4fZVpI5Lj6graGTFZ0SJ/exec"
});
