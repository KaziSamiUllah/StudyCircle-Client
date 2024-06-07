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
import Swal from "sweetalert2";


const TutorMaterials = () => {
  const{user} = useUser()
  const axiosSecure = useAxiosSecure()
 
  const {refetch, isLoading,data: tutorMaterial = [] } = useQuery({

      queryKey: ["tutorMaterials"],
      queryFn: async () => {
        const res = await axiosSecure.get(`/materials/${user.email}`);
        return res;
     
      },
    });


    const handleDelete = async (id) => {
      console.log(id);
  
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          deleteMaterial(id);
  
          Swal.fire({
            title: "Deleted!",
            text: "Your material has been deleted.",
            icon: "success",
          });
        }
      });
    };
  
    const deleteMaterial = async (id) => {
      const res = await axiosSecure.delete(`/materials/${id}`);
      console.log(res.data);
      if (res.data.acknowledged === true) {
        refetch();
        console.log(res.data.acknowledged);
        
      }
    };



  



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
              {tutorMaterial?.data?.map((material, index) => (
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
                        onClick={() => handleDelete(material._id)}
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
