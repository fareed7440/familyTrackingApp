import ActionTypes from "./actionTypes"
import { Actions } from 'react-native-router-flux';
import * as DB from '../../firebase/database'

function createCircleRequest(data) {
    console.log('datataa', data)
    return dispatch => {
        dispatch(LoginRequest());
        return DB.database.ref('Circle/').push(data).then(function(err,result){
            if(err){
                throw (err)
            }else{
                console.log(result)
                dispatch(CreateCircleRequestSuccess(result))
            Actions.logOutCon()
        
            }
        })
            
 }
}

function CreateCircleRequest() {
    return {
        type: ActionTypes.CREATE_CIRCLE_REQUEST
    }
}

function CreateCircleRequestSuccess(data) {
    return {
        type: ActionTypes.CREATE_CIRCLE_REQUEST_SUCCESS,
        data
    }
}


export default createCircleRequest