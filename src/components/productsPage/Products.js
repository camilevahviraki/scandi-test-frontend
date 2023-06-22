import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getProducts, deleteProducts } from '../../redux/getProductsReducer';
import { useDispatch, useSelector } from 'react-redux';
import Product from './product';
import './Products.css';

const Products = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const productsList = useSelector(state => state.getProductReducer);
  const [checkedProduct, setCheckedProduct] = useState([]);
  const checkProduct = (id) => {
    if (!checkedProduct.includes(id)) {
      setCheckedProduct([...checkedProduct, id]);
    } else {
      const newData = checkedProduct.filter((el) => el != id);
      setCheckedProduct(newData);
    }
  }

  return (
    <div className='products_page'>
      <div className='header-wrapp'>
        <h4>Products List</h4>
        <div className='buttons-wrapp'>
          <Link to={'../add_product'} className='button-add'>ADD</Link>
          <button
            className='button-add'
            id="delete-product-btn"
            onClick={() => checkedProduct.length > 0 ? dispatch(deleteProducts(checkedProduct)) : null }
          >MASS DELETE</button>
        </div>
      </div>
      <div className='products-container'>
        {
          productsList.products.length > 0 ? (<>
            {
              productsList.products.map((product) => (
                <Product
                  key={product.sku}
                  data={product}
                  checkProduct={checkProduct}
                  selectedProducts={checkedProduct}
                />
              ))
            }
          </>) : (<div>

          </div>)
        }
      </div>
    </div>
  )
}

export default Products;