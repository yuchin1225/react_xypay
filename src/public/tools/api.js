import axios from "axios";

const carplateRequest = axios.create({
    baseURL: "http://60.248.122.31:8999/xy_pay/request",
    headers: {
        "Content-Type": "multipart/form-data"
    }
});

const getCarplate = (path, data) => {
    return carplateRequest.post(path, data);
}


export default getCarplate;