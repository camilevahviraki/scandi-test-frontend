import axios from 'axios';
import linkURL from './link';

const ADD_PRODUCTS = 'redux/store/addProductsReducer/ADD_PRODUCTS';
const CLEAR_RESPONSE = 'redux/store/addProductsReducer/CLEAR_RESPONSE';

const addProductReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_PRODUCTS: {
      return action.data;
    }case  CLEAR_RESPONSE:{
      return {}
    }
    default:
      return state;
  }
};

export const addProduct = (data) => (dispatch) => {
  axios.post(`${linkURL}/newProduct`, { data: JSON.stringify(data) }, {
    headers: {
      'Content-Type': 'multipart/form-data',
    }
  })
    .then((response) => {
      dispatch(
        {
          type: ADD_PRODUCTS,
          data: response.data,
        },
      );
    }).catch(_err => dispatch({
      type: ADD_PRODUCTS,
      data: {error: 'Error'},
    },));
};

export const clearResponse = () => ({type: CLEAR_RESPONSE});


export default addProductReducer;
