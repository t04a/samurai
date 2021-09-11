import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

export function withAuthRedirect(Component) {

    function RedirectedComponent(props) {
        if (!props.isAuth) return <Redirect to={"/login"}/>
        return <Component {...props}/>
    }

    function mapStateToProps(state) {
        return {
            isAuth: state.auth.isAuth
        }
    }

    return connect(mapStateToProps)(RedirectedComponent);
}