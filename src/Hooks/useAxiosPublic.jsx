import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Creating a public axios instance
export const axiosPublic = axios.create({
    baseURL: "https://study-circle-server-six.vercel.app/"
});

const useAxiosPublic = () => {
    // const navigate = useNavigate();

    return axiosPublic;
};

export default useAxiosPublic;
