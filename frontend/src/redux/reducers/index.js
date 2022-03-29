import {combineReducers} from "redux";
import auth from '../../modules/Auth/reducers'
import main from '../../navigation/Main/reducers'


const rootReducer = combineReducers({
    auth,
    main,
})

export default rootReducer
