import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import Product from "./Product";
import DetailsProduct from "./DetailsProduct";

function ProductDetails() {
  const [product, setProduct] = useState({});
  /* ////Product Route:2-useParams is hook help you to use parameter inside Url */
  const api_url = "https://fakestoreapi.com/products/";
  const params = useParams();
  console.log(params);
  useEffect(() => {
    fetch(`${api_url}/${params.productId}`).then((response) =>
      response.json().then((product) => setProduct(product))
    );
  }, []);
  return (
    <>
      {/* <Product product={product} showButton={false} /> */}
      <DetailsProduct product={product} />
    </>
  );
}
export default ProductDetails;
