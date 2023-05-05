import "./ProductList.css";
import Product from "./Product.js";
import { useEffect, useState } from "react";
//2-create a Fuction Component to hold your page
function ProductList() {
  // const api_url = "https://fakestoreapi.com/products";
  // const [product, setProducts] = useState([]);
  // useEffect(() => {
  //   fetch(api_url).then((response) =>
  //     response.json().then((data) => setProducts(data))
  //   );
  // }, []);
  //1-Choss a Faki API
  const api_url = "https://fakestoreapi.com/products";
  //3-use the useState() hook to create State varible for storing  ther responce data form fake API
  const [product, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  //4 use the useEffect() hook to make HTTP request to your chossen Api
  // useEffect(() => {
  //   //5 make HTTp requset by Fetch()
  //   fetch(api_url).then((response) =>
  //     //6 convert data from text to json
  //     response
  //       .json()
  //       //7 Retraive the response 'product=data' and store in the state varible using 'setProducts=setdata'
  //       .then((data) => setProducts(data))
  //   );
  // }, []);
  const getProducts = () => {
    fetch(api_url).then((response) =>
      response
        .json()

        .then((data) => setProducts(data))
    );
  };
  const getCatogries = () => {
    fetch(`${api_url}/categories`).then((response) =>
      response
        .json()

        .then((data) => setCategories(data))
    );
  };
  const getProductInCatogries = (catName) => {
    console.log(catName);
    fetch(`${api_url}/category/${catName}`).then((res) =>
      res
        .json()

        .then((data) => setProducts(data))
    );
  };
  useEffect(() => {
    getProducts();
    getCatogries();
  }, []);
  return (
    <>
      <h3 className="product-style">Our Products</h3>
      <div className="container">
        {/* {product.map((product) => {
            return (
              <div className="col-3" key={product.id}>
                <Product product={product} />
              </div>
            );
          })} */}
        {/*8 Use Stored data in youer component rendering logic to to display it on the page */}
        {/* NOTE: The curly braces ("{}") in JSX are used to dynamically render content based on the current state or props of a component. */}
        <div className="boot">
          <button
            className="mybtn "
            onClick={() => {
              getProducts();
            }}
          >
            All
          </button>

          {categories.map((cat) => {
            return (
              <button
                className="mybtn "
                key={cat}
                onClick={() => {
                  getProductInCatogries(cat);
                }}
              >
                {cat} 
              </button>
            );
          })}
        </div>

        <div className="row">
          {product.map((product) => {
            return (
              <div className="col-3" key={product.id}>
                {/* 9 make a props to product  */}
                <Product product={product} showButton={true} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default ProductList;
