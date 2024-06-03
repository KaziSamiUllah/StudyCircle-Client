
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useMaterialByID = (ID) => {
    const axiosSecure = useAxiosSecure()
   
    const { isLoading, refetch, data = {} } = useQuery({
  
        queryKey: ["tutorMaterials"],
        queryFn: async () => {
          const res = await axiosSecure.get(`/materialsbyID/${ID}`);
          return res;
       
        },
      });
    
    return { material: data.data, isLoading, refetch}
};

export default useMaterialByID;