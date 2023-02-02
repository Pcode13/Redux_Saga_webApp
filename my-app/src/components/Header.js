import img from "../../src/assets/Image/trolley.png"
import { useSelector,useDispatch} from "react-redux";
import { Link } from "react-router-dom";

import { productSearch } from "../redux/action/ProductAction";

const Header = () => {
   
  const result = useSelector((state) => state.cartData)
  const dispatch = useDispatch();
    console.log("resulet",result)
    return (
      <div className="header">
        <Link to="/">
          <h1 className="logo">E-Comm</h1>
        </Link>
        <div className="serach-box">
          <input
            type="text"
            onChange={(event)=>dispatch(productSearch(event.target.value))}
            placeholder="Search Product"
          />
        </div>
        <Link to="/cart">
          <div className="cart-div">
            <span>{result.length}</span>
            <img src={img} alt="" />
          </div>
        </Link>
      </div>
    );
}


export default Header