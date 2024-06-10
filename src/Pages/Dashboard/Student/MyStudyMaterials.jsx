import useUser from "../../../Hooks/useUser";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaDownload, FaGoogleDrive } from "react-icons/fa";
import JsFileDownloader from "js-file-downloader";
import { useState } from "react";

const MyStudyMaterials = () => {
  const { showImage, setShowImage } = useState(false);
  const axiosSecure = useAxiosSecure();
  const { user } = useUser();

  const { isLoading, data: bookedSessionmaterials = {} } = useQuery({
    queryKey: ["bookedSessionmaterials"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/bookedSessionMaterials/${user.email}`
      );
      return res;
    },
  });

  console.log(bookedSessionmaterials.data);

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
          <h1 className=" px-6 py-3 bg-gray-50 text-2xl text-center leading-4 font-medium text-gray-500 uppercase tracking-wider ">
          My Materials
        </h1>
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Session Title</th>
                <th className="py-2 px-4 border-b">Tutor Email</th>
                <th className="py-2 px-4 border-b ">Drive Links</th>
                <th className="py-2 px-4 border-b">Action</th>
              </tr>
            </thead>
            <tbody>
              {bookedSessionmaterials?.data?.map((material) => (
                <tr key={material.sessionID}>
                  <td className="py-2 px-4 border-b text-center">
                    {material?.materialTitle}
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    <h1>{material?.tutorEmail}</h1>

                    {/* <div className="chat">
                      <div className="chat-bubble">
                        <img className="h-60" src={material?.URL} alt="" />
                      </div>
                    </div> */}
                  </td>
                  <td className="py-2 px-4 border-b text-center">
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
                  <td className="py-2 px-4 border-b flex justify-center">
                    {" "}
                    <button
                      onClick={() =>
                        new JsFileDownloader({
                          url: material?.URL,
                        })
                      }
                      className="btn btn-link text-black"
                    >
                      Download Image <FaDownload />
                    </button>
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

export default MyStudyMaterials;
