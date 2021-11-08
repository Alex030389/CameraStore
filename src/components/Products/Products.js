import Product from '../Product';
import * as axios from 'axios';

const Products = (props) => {
  // из функциональной компоненты нельзя обращаться к серверу
  if(props.products.length === 0) {
    axios.get('https://getlens-master.stage.dev.family/api/pages/obektivy')
    .then(response => {
      debugger
      props.setProducts(response.data.products);
    });
  }

  const products = props.products.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <li key={id} className="products__item">
        <Product {...itemProps} />
      </li>
    );
  });

  return (
    <section className="products">
      <h1 className="visually-hidden">Каталог товаров</h1>
      <ul className="products__list">
        { products }
      </ul>
    </section>
  );
};

export default Products;