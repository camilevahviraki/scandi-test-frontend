import axios from 'axios';
import linkURL from './link';

const GET_PRODUCTS = 'redux/store/getProductsReducer/GET_PRODUCTS';
const DELETE_PRODUCTS = 'redux/store/addProductsReducer/DELETE_PRODUCTS';

const getProductReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case GET_PRODUCTS: {
      return action.data;
    } case DELETE_PRODUCTS: {
      return action.data;
    }
    default:
      return state;
  }
};

export const getProducts = () => (dispatch) => {
  axios.get(`${linkURL}`)
    .then((response) => {
      dispatch(
        {
          type: GET_PRODUCTS,
          data: response.data,
        },
      );
    });
};

export const deleteProducts = (data) => (dispatch) => {
  axios.post(`${linkURL}`, { data, delete: 1 }, {
    headers: {
      'Content-Type': 'multipart/form-data',
    }
  })
    .then((response) => {
      dispatch(
        {
          type: DELETE_PRODUCTS,
          data: response.data,
        },
      );
    }).catch((_err) => {
      dispatch({
        type: DELETE_PRODUCTS,
        data: { products: [], error: "Error, Could\'nt delete products"  }
      })
    });
};

export default getProductReducer;
