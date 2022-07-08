import {combineReducers} from "redux";
import auth from '../../modules/Auth/reducers'
import main from '../../navigation/Main/reducers'
import members from '../../modules/MembersScreen/reducers'
import messages from "../../modules/MessagesScreen/reducers";


const rootReducer = combineReducers({
    auth,
    main,
    members,
    messages,
})

export default rootReducer
