import React, { useState } from "react";
import axios from "axios";

const UploadProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("image", image);

    const res = await axios.post(
      "http://localhost:5000/api/products/upload",
      formData,
      { headers: { "Content-Type": "multipart/form-data" } }
    );

    alert("Product Uploaded!");
    console.log(res.data);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Upload Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Product name"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="number"
          placeholder="Price"
          onChange={(e) => setPrice(e.target.value)}
        />
        <br />
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <br />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default UploadProduct;
