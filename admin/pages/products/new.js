import Layout from "@/components/Layout";
import axios from "axios";
import { useState } from "react";

export default function NewProduct() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const sendData = async (e) => {
    e.preventDefault();
    console.log(title, description, price);
    const data = { title, description, price };
    await axios.post("/api/product", data);
  };

  return (
    <Layout>
      <h1 className="text-blue-900 mb-2 text-lg">New Product</h1>
      <form onSubmit={sendData}>
        <label>Product Name</label>
        <input
          type="text"
          name="name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="product name"
        />
        <label>Description</label>
        <textarea
          placeholder="description"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <label>Price (in USD)</label>
        <input
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          type="number"
          placeholder="price"
        />
        <button type="submit" className="btn-primary">
          Save
        </button>
      </form>
    </Layout>
  );
}
