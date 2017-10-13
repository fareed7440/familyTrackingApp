import CreateCircle from '../components/createCircle'
import { connect } from 'react-redux'
import createCircleRequest from '../store/actions/createCircleAct'
function mapStateToProps(state) {
    return {
        Circle : state.LoginReducer

    }

}

function mapDispatchToProps(dispatch) {
    return {
        circleData: (data) => dispatch(createCircleRequest(data))

    }
}



CreateCircleCon = connect(mapStateToProps, mapDispatchToProps)(CreateCircle)
export default CreateCircleCon;
