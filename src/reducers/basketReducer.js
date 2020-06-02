import { ADD_PRODUCT_BASKET, GET_NUMBERS_BASKET, REMOVE_PRODUCT_BASKET } from '../actions/types';

const initialState ={
  basketNumbers : 0,
  cartCost : 0
}

export default (state= initialState, action)=>{
  switch(action.type){
    case ADD_PRODUCT_BASKET:
      return {
         basketNumbers: state.basketNumbers + 1
       }
    case GET_NUMBERS_BASKET:
       return{
         ...state
       }
       case REMOVE_PRODUCT_BASKET:
       if(state.basketNumbers === 0){
         return state
       }
          return{
             basketNumbers: state.basketNumbers - 1
          }
    default:
        return state;
  }
}
