const FilterPrice = ({minPrice, maxPrice, updateMinPrice, updateMaxPrice}) => {

  const checkNumber = (number) => {
    const regex=/^[0-9]+$/;
    if (number.match(regex)) {
      return number
    }
  };

  const onMinPriceChange = (evt) => {
    if (checkNumber(evt.target.value) || evt.target.value === '') {
      updateMinPrice(evt.target.value);
    }
  };

  const onMaxPriceChange = (evt) => {
    if (checkNumber(evt.target.value) || evt.target.value === '') {
      updateMaxPrice(evt.target.value);
    }
  };

  return (
    <div className="filter-price">
      <input className="filter-price__control"
             value={minPrice}
             onChange={(onMinPriceChange)}
             placeholder="от"
             type="text"
      />
      <input className="filter-price__control"
             value={maxPrice}
             onChange={onMaxPriceChange}
             placeholder="до"
             type="text"
      />
    </div>
  );
};

export default FilterPrice;