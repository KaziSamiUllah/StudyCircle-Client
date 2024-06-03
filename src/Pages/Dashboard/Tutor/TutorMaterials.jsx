import axios from "axios";
import useSessionData from "../../../Hooks/useSessionData";
import useUser from "../../../Hooks/useUser";
import { useEffect } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FcViewDetails } from "react-icons/fc";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";


const TutorMaterials = () => {
  const{user} = useUser()
  const axiosSecure = useAxiosSecure()
 
  const { isLoading, refetch, data = [] } = useQuery({

      queryKey: ["tutorMaterials"],
      queryFn: async () => {
        const res = await axiosSecure.get(`/materials/${user.email}`);
        return res;
     
      },
    });



  



  return (
    <div className="w-full">
      {isLoading ? (
        <div className=" flex justify-center items-center min-h-screen text-center">
          <span className="loading loading-ring loading-lg"></span>
        </div>
      ) : (
        <div>
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Material Title</th>
                <th className="py-2 px-4 border-b">session Title</th>
                <th className="py-2 px-4 border-b">File Links</th>
                <th className="py-2 px-4 border-b">Action</th>
              </tr>
            </thead>
            <tbody>
              {data?.data?.map((material, index) => (
                <tr key={index}>
                  <td className="py-2 px-4 border-b text-center">
                    {material.materialTitle}
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    {material.sessionTitle}
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    <div  className="flex gap-2 w-fit mx-auto">
                      {material?.link? <a className="text-blue-500 underline" href={material?.link}>Drive Link</a> : ""}
                      {material?.URL? <a className="text-blue-500 underline" href={material?.URL}>Image Image</a> : ""}
                    </div>
                  </td>
                  <td className="py-2 px-4 border-b ">
                    <div className="text-center">
                      <button
                        title="Add Materials"
                        className="btn btn-ghost btn-sm   m-1 w-fit mx-auto text-2xl"
                      >
                        <Link to={`/dashboard/updateMaterials/${material._id}`}>
                          {" "}
                          <FaRegEdit />
                        </Link>
                      </button>
                      <button
                        // onClick={() => handleDelete(session._id)}
                        className="btn btn-ghost btn-sm  text-red-500 m-1 w-fit mx-auto text-2xl"
                      >
                        <MdDelete />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default TutorMaterials;
