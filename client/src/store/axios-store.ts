import axios from "axios";

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer 16|wVXTSHX0DG36AXdHstv3dFtlksTbX19XquY6HKiS66138e9c`
    }
})

export default axiosInstance;