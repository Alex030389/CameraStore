import {connect} from "react-redux";
import {updateMaxPriceAC, updateMinPriceAC} from "../../redux/filterPriceReducer";
import FilterPrice from "./FilterPrice";

const mapStateToProps = (state) => {
  return {
    minPrice: state.filterPrice.minPrice,
    maxPrice: state.filterPrice.maxPrice,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateMinPrice: (number) => {
      dispatch(updateMinPriceAC(number));
    },
    updateMaxPrice: (number) => {
      dispatch(updateMaxPriceAC(number));
    }
  };
};

const FilterPriceContainer = connect(mapStateToProps, mapDispatchToProps)(FilterPrice);

export default FilterPriceContainer;