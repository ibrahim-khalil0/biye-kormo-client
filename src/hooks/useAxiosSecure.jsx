import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'https://biye-kormo-server.vercel.app'
})

const useAxiosSecure = () => {
    return axiosSecure
};

export default useAxiosSecure;