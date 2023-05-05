import { Link } from "react-router-dom";
import "./Product.css";

function Product(props) {
  // const { product, showButton } = props;
  const { product } = props;
  return (
    <>
      <div className="card">
        <img src={product.image} className="card-img-top" alt={product.title} />
        <div className="card-body">
          <h5 className="card-title">
            {product.title && product.title.slice(1, 30)}
          </h5>
          <p className="card-text">
            {product.description && product.description.slice(1, 100)}
          </p>
          <p>
            Price: <s>{product.price} </s>&nbsp;
            {product.price - 1}$
          </p>

          {/* /// we use it when i have one component  to show the Button */}
          {/* {showButton && (
            <Link className="myDbtn" to={`product/${product.id}`}>
              Details
            </Link>
          )} */}
          <Link className="myDbtn" to={`product/${product.id}`}>
            Details
          </Link>
        </div>
      </div>  
    </>
  );  
}
export default Product;
