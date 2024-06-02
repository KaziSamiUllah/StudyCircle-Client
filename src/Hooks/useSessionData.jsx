import { useQuery } from '@tanstack/react-query';
import useUser from './useUser';
import { axiosSecure } from './useAxiosSecure';

const useSessionData = () => {
  const {user} = useUser()
    const { isLoading, refetch, data = {} } = useQuery({

        queryKey: ["tutorSessionData"],
        queryFn: async () => {
          const res = await axiosSecure.get(`/sessions/${user.email}`);
          return res;
        },
      });
    return {tutorSessions: data.data, isLoading, refetch};
};

export default useSessionData;



