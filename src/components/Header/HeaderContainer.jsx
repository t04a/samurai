import Header from "./Header";
import react from "react";
import {connect} from "react-redux";
import {logout} from "../../redux/auth-reducer";

class HeaderContainer extends react.Component {
    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

function mapStateToProps(state) {
    return {
        isAuth: state.auth.isAuth,
        id: state.auth.id,
        login: state.auth.login,
        email:state.auth.email,
    }
}

export default connect(mapStateToProps,{logout})(HeaderContainer);