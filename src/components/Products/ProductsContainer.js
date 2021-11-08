import {connect} from "react-redux";
import {setProductsAC} from "../../redux/productsReducer";
import Products from "./Products";

const mapStateToProps = (state) => {
  return {
    products: state.products.products
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setProducts: (products) => {
      dispatch(setProductsAC(products))
    }
  };
};

const ProductsContainer = connect(mapStateToProps, mapDispatchToProps)(Products);

export default ProductsContainer;