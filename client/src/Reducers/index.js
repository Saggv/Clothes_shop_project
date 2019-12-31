import {combineReducers} from "redux";
import Trend from "./Trend";
import Shop from "./Shop";
import Show from "./Show";
import Cart from "./Cart";
import SignIn from "./SignIn";
const rootReducer = combineReducers({
     Trend: Trend,
     Show: Show,
     Shop: Shop,
     Cart: Cart,
     SignIn: SignIn
});

export default rootReducer;