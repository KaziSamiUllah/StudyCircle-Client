import useUser from "../../../Hooks/useUser";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaDownload, FaGoogleDrive } from "react-icons/fa";
import JsFileDownloader from "js-file-downloader";
import { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";

const AllMaterials = () => {
  const { showImage, setShowImage } = useState(false);
  const axiosSecure = useAxiosSecure();
  const { user } = useUser();

  const { isLoading, data: materials = {}, refetch } = useQuery({
    queryKey: ["allMaterials"],
    queryFn: async () => {
      const res = await axiosSecure.get("/materials");
      return res;
    },
  });
  const handleDeleteMaterial = async (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
      });
      swalWithBootstrapButtons.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
           const res = deleteMaterial(id)
            if (res?.data?.acknowledged === true) {
                refetch();               
              }
          swalWithBootstrapButtons.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your imaginary file is safe :)",
            icon: "error"
          });
        }
      });




const deleteMaterial = async (id)=>{
    const res = await axiosSecure.delete(`/materials/${id}`);
    console.log(res.data);
    if (res.data.acknowledged === true) {
      refetch();
      console.log(res.data.acknowledged);
      return res
    }}
  };

  console.log(materials.data);

  return (
    // <div>
    //   {bookedSessionmaterials?.data?.length > 0 &&
    //     bookedSessionmaterials?.data?.map((material, idx) => (
    //       <h1 key={idx}>{material.materialTitle}</h1>
    //     ))}
    // </div>
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
                <th className="py-2 px-2 border-b">Session Title</th>
                <th className="py-2 px-2 border-b">Tutor Email</th>
                <th className="py-2 px-2 border-b ">Drive Links</th>
                <th className="py-2 px-2 border-b">Download Image</th>
                <th className="py-2 px-2 border-b">Delete</th>
              </tr>
            </thead>
            <tbody>
              {materials?.data?.map((material) => (
                <tr key={material.sessionID}>
                  <td className="py-2 px-2 border-b text-center">
                    {material?.materialTitle}
                  </td>
                  <td className="py-2 px-2 border-b text-center">
                    <h1>{material?.tutorEmail}</h1>
                  </td>
                  <td className="py-2 px-2 border-b text-center">
                    {" "}
                    <a
                      href={material?.link}
                      className="flex justify-center items-center gap-2"
                    >
                      {" "}
                      <FaGoogleDrive />
                      <span className="text-blue-600 underline font-semibold">
                        {" "}
                        Link
                      </span>
                    </a>
                  </td>
                  <td className="py-2 px-2 border-b flex justify-center">
                    {" "}
                    <button
                      onClick={() =>
                        new JsFileDownloader({
                          url: material?.URL,
                        })
                      }
                      className="btn btn-link text-black"
                    >
                      <div className="flex lg:flex-row flex-col gap-2"><h1>Download Image</h1> <FaDownload className="bg-red mx-auto my-2 lg:my-0 "/></div>
                    </button>
                  </td>
                  <td className="text-center"><button onClick={()=>{handleDeleteMaterial(material._id)}} className=" btn-sm btn btn-ghost text-3xl text-red-500"><MdDeleteForever/></button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AllMaterials;
