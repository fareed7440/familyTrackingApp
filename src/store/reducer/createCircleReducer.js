import ActionTypes from '../actions/actionTypes'

const initialState = {}

function CircleReducer(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.CREATE_CIRCLE_REQUEST_SUCCESS:
            return { ...state, circle: action.data }
        default: return state
    }
}


export default CircleReducer;