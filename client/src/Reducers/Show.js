import * as actionType from "../Action/Type";

const initialState={
     showImg:[],
     err:{}
};

const Show = (state=initialState,action)=>{
    switch(action.type){
    case actionType.FETCH_SHOW_IMG_SUCCESS:
        return{
            ...state,
            showImg:action.payload
        }
    case actionType.FETCH_SHOW_IMG_ERROR:
        return{
            ...state,
            err:action.payload
        }
    default:
        return state 
    }
}

export default Show;