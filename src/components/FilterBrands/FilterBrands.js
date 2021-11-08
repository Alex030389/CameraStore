const FilterBrands = () => {
  return (
    <ul className="filter-brands list-reset">
      <li className="filter__brands-item">
        <div className="checkbox-group">
          <input className="checkbox-group__control visually-hidden" id="checkbox-1" name="canon" type="checkbox"/>
          <label className="checkbox-group__label" htmlFor="checkbox-1">Canon</label>
        </div>
      </li>
      <li className="filter__brands-item">
        <div className="checkbox-group">
          <input className="checkbox-group__control visually-hidden" id="checkbox-2" name="nikon" type="checkbox"/>
          <label className="checkbox-group__label" htmlFor="checkbox-2">Nikon</label>
        </div>
      </li>
    </ul>
  );
};

export default FilterBrands;