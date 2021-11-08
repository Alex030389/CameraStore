import FilterPriceContainer from "../FilterPrice";
import FilterBrands from "../FilterBrands";

const Sidebar = (props) => {
  return (
    <div className="filter">
      <p className="filter__number-prod">Товаров 143</p>
      <h2 className="filter__title">Камеры</h2>
      <div className="filter__list">
        <div className="filter__item">
          <p className="filter__item-title">Цена, ₽</p>
          <div className="filter__price">
            <FilterPriceContainer />
          </div>
        </div>
        <div className="filter__item">
          <p className="filter__item-title">Бренд</p>
          <div className="filter__brands">
            <FilterBrands />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;