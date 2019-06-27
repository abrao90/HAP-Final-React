import { Alert } from "../actions/alerts";


const INITIAL_STATE ={
    sample: '',
}

export const  AlertReducers = ( state = {...INITIAL_STATE}, action)=>{
    switch (action.type) {
        case Alert.CLICK_ALERT:{
            alert("redux works");
            return Object.assign({}, state , { sample : action.payload})
        }
        default:
            return state
    }
}