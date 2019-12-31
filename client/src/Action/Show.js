import * as actionType from "./Type";

export const fetchShow =()=>({
        type:actionType.FETCH_SHOW_IMG
});
export const fetchShowSuccess =(payload)=>({
    type:actionType.FETCH_SHOW_IMG_SUCCESS,
    payload
});
export const fetchShowError =(payload)=>({
    type:actionType.FETCH_SHOW_IMG_ERROR,
    payload
});
