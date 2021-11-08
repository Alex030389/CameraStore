const UPDATE_MIN_PRICE = 'UPDATE_MIN_PRICE';
const UPDATE_MAX_PRICE = 'UPDATE_MAX_PRICE';

let initialState = {
  minPrice: '',
  maxPrice: ''
};

const filterPriceReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_MIN_PRICE:
      return {
        ...state,
        minPrice: action.text
      };
    case UPDATE_MAX_PRICE:
      return {
        ...state,
        maxPrice: action.text
      };
    default:
      return state
  }
};

export const updateMinPriceAC = (number) => {
  return {type: UPDATE_MIN_PRICE, text: number};
};

export const updateMaxPriceAC = (number) => {
  return {type: UPDATE_MAX_PRICE, text: number};
};

export default filterPriceReducer;