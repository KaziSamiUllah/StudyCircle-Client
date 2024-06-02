import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";


export const uploadImage = async (image, apiKey, uploadData, setImageURL)=>{
    uploadData.append("key", apiKey);
    uploadData.append("image", image);
  
    axios
      .post("https://api.imgbb.com/1/upload", uploadData)
      .then((response) => {
        const data = response.data;
        if (data.success) {
          setImageURL(data.data.url);
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: `<a href="#">${data.error.message}</a>`,
          });
          console.error("Image upload failed:", data.error.message);
        }
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          footer: `<a href="#">${error.message}</a>`,
        });
        console.error("Image upload failed:", error.message);
      });

}


const useUploadImage = () => {
    const [imageURL, setImageURL] = useState();
    const apiKey = "0797d4ee38bdb9a92d846524045a5347";
    const uploadData = new FormData();
    
    uploadImage(apiKey, uploadData, setImageURL, )

  return { imageURL }
};

export default useUploadImage;
