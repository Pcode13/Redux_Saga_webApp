import { addToCart, emptyCart, removeFromCart } from "../redux/action/action";
import { useDispatch,useSelector } from "react-redux";
import { productList } from "../redux/action/ProductAction";
import { useEffect } from "react";

function Main() {
    const data = useSelector((state) => state.ProductData);
    const dispatch = useDispatch();
      console.log("Main Product List  from saga    ....", data);
  
  useEffect(() => {
    dispatch(productList())
  }, []);

  return (
    <div>
      {/* <div>
        <button onClick={() => dispatch(addToCart(item))}>
          Add To Cart
        </button>
      </div>

      <div>
        <button onClick={() => dispatch(removeFromCart(item.id))}>
          Remove from Cart
        </button>
      </div> */}

      <div>
        <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
      </div>
      {/* <div>
        <button onClick={() => dispatch(productList(product))}>
          Get Product List
        </button>
      </div> */}
      <div className="product-container">
        {data.map((item) => (
          <div key={item.id} className="product-item">
            <img src={item.photo} alt="" />
            <div>Name: {item.name}</div>
            <div>price: {item.price}</div>
            <div>Color: {item.color}</div>
            <div>Brand: {item.brand}</div>
            <div>Category: {item.category}</div>
            <div>
              <button onClick={() => dispatch(addToCart(item))}>
                Add To Cart
              </button>
              <button onClick={() => dispatch(removeFromCart(item.id))}>
                Remove from Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;
