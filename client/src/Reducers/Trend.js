
import * as actionType from "../Action/Type";
const initialState={
    trend:[],
    popularProduct: [],
    productMenHome: [],
    productWomenHome:[],
    error:{}
};

const trend = (state=initialState, action)=>{
    switch (action.type) {
        case actionType.FETCH_TREND:
            return{
                ...state
            }
        case actionType.FETCH_TREND_SUCCESS:
            return{
                ...state,
                trend: action.payload
            }
        case actionType.FETCH_TREND_ERROR:
            return{
                ...state,
                error: action.payload
            }
        case actionType.FETCH_POPULAR_PRODUCT_SUCCESS:
            return{
                ...state,
                popularProduct: action.payload
            }
        case actionType.FETCH_PRODUCT_MEN_HOME:
            return{
                ...state,
                productMenHome: action.payload
            }
        case actionType.FETCH_PRODUCT_WOMEN_HOME:
            return{
                ...state,
                productWomenHome: action.payload
            }
        default:
            return state;
    }
}

export default trend;