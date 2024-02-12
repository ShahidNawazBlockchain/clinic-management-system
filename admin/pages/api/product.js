import { Product } from "@/models/product";
import { mongooseConnect } from "@/lib/mongoose";

export default handle = async (req, res) => {
  const { method } = req;
  await mongooseConnect();
  if (method == "POST") {
    const { title, description, price } = req.body;
    const productDoc = await Product.create({
      title,
      description,
      price,
    });
  }
  res.json(productDoc);
};
