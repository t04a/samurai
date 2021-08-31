import Header from "./Header";
import react from "react";
import {connect} from "react-redux";
import axios from "axios";
import {setUserAuthData} from "../../redux/auth-reducer";

class HeaderContainer extends react.Component {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true})
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data;
                    this.props.setUserAuthData(id, login, email);
                }
            })
    }

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

export default connect(mapStateToProps,{setUserAuthData})(HeaderContainer);