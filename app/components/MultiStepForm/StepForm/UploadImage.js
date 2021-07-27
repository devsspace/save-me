import axios from "axios"
import React, { useState } from "react"

const UploadImage = ({ formData, setForm, navigation }) => {
  const { imgInfo } = formData
  const [imgURL, setImgURL] = useState(null)
  console.log(imgURL)
  // upload images
  const handleImageUpload = (e) => {
    const imgData = new FormData()
    imgData.set("key", "681354ee434466a79bb386e524a1ce29")
    imgData.append("image", e.target.files[0])

    axios
      .post("https://api.imgbb.com/1/upload", imgData)
      .then((response) => {
        setImgURL(response.data.data.display_url)
        alert("Image upload successfully")
      })
      .catch((error) => {
        console.log(error)
      })
  }
  return (
    <div>
      <label className="mt-3" htmlFor="">
        Upload Image
      </label>
      <input
        className="form-control"
        type="file"
        name=""
        id=""
        onChange={handleImageUpload}
      />
    </div>
  )
}

export default UploadImage
