import "./DetailsProduct.css";
function DetailsProduct(props) {
  const { product } = props;
  return (
    <>
      <div className="card myCard">
        <img src={product.image} className="card-img-top" alt={product.title} />
        <div className="card-body myBody">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.description}</p>
          <p>
            Price: <s>{product.price} </s>&nbsp;
            {product.price - 1}$
          </p>
        </div>
      </div>
    </>
  );
}
export default DetailsProduct;
