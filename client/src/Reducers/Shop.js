import * as actionType from "../Action/Type";
const initalState =({
    slideImg:[],
    MenProduct:[],
    womenProduct:[],
    idProduct:{},
    productDetail:{},
    productViewMoreMen:[],
    productViewMoreWomen:[],
    error:{}
});

const Shop=(state=initalState, action)=>{
    switch(action.type){
        case actionType.FETCH_SLIDE_IMG_SUCCESS:
            return{
                ...state,
                slideImg: action.payload
            }
        case actionType.FETCH_SLIDE_IMG_ERROR:
            return{
                ...state,
                error: action.payload
            }
        case actionType.FETCH_PRODUCT_MAN_SUCCESS:
            return{
                ...state,
                MenProduct: action.payload
            }
        case actionType.FETCH_PRODUCT_MAN_ERROR:
            return{
                ...state,
                error: action.payload
            }
        case actionType.FETCH_PRODUCT_WOMEN_SUCCESS:
            return{
                ...state,
                womenProduct: action.payload
            }
        case actionType.FETCH_PRODUCT_WOMEN_ERROR:
            return{
                ...state,
                error: action.payload
            }
        case actionType.GET_PRODUCT_ID:
            return{
                ...state,
                idProduct: action.payload
            }
        case actionType.FETCH_PRODUCT_DETAIL_SUCCESS:
            return{
                ...state,
                productDetail: action.payload
            }
        case actionType.FETCH_PRODUCT_DETAIL_ERROR:
            return{
                ...state,
                error: action.payload
            }
        case actionType.FETCH_PRODUCT_DETAIL_VIEW_MORE_SUCCESS:
            return{
                ...state,
                productViewMoreMen: action.payload
            }
        case actionType.FETCH_PRODUCT_DETAIL_VIEW_MORE_SUCCESS_WOMEN:
            return{
                ...state,
                productViewMoreWomen: action.payload
            }
        default:
            return state
    }
}

export default Shop;