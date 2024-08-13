import axios from "axios";

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer 13|XIGZ7Xv3FLGk4gJt7Tmjq0QdH5iQL1doOLE3or0u2f75d8d6`
    }
})

export default axiosInstance;