import { useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import useAxiosSecure from './useAxiosSecure';

const useUploadUserData = () => {
  const [error, setError] = useState(null);
  const axiosSecure = useAxiosSecure();


  const uploadUserData = async (userData) => {
    setError(null);
    try {
      const response = await axiosSecure.post('/users', userData);
      console.log('Response:', response.data);
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Successfully Signed UP',
        showConfirmButton: false,
        timer: 1500,
      });
     
    } catch (err) {
      console.error('Error:', err);
      setError(err);
    }
  };

  return { uploadUserData, error };
};

export default useUploadUserData;
