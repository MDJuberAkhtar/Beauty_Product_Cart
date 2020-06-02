import { ADD_PRODUCT_BASKET, REMOVE_PRODUCT_BASKET } from './types';

export const addBasket =()=>{
  return (dispatch)=>{
    console.log('Adding to Basket');
    dispatch({
      type: ADD_PRODUCT_BASKET
    });
  }
}

export const removeBasket =()=>{
  return (dispatch)=>{
    console.log('Adding to Basket');
    dispatch({
      type: REMOVE_PRODUCT_BASKET
    });
  }
}
