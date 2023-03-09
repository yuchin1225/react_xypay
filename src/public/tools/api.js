import axios from "axios";

const carplateRequest = axios.create({
    baseURL: "http://192.168.1.55/xy_pay/request",
    headers: {
        "Content-Type": "multipart/form-data"
    }
});


export default carplateRequest;