import { useState, useEffect } from 'react';
import useAxiosSecure from './useAxiosSecure';

const useMatchUser = (email) => {
  const [exists, setExists] = useState(null);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    const checkUser = async () => {
      try {
        console.log(email);
        const response = await axiosSecure.get(`/users/${email}`);
        console.log(response?.data);
        if (response?.data) {
          setExists(true);

        } else {
          setExists(false);
        }
      } catch (error) {
        console.error('Error checking user:', error);
        setExists(false);
      }
    };

    if (email) {
      checkUser();
    } else {
      setExists(null); // Reset if email is empty
    }
  }, [email, axiosSecure]);

  return exists;
};

export default useMatchUser;
