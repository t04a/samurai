import Profile from "./Profile";
import react from "react";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";

class ProfileContainer extends react.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data);
            })
    }

    render() {
        return (
            <Profile {...this.props}/>
        )
    }
}

function MapStateToProps(state) {
    return {
        profilePage: state.profilePage,
    }
}

export default connect(MapStateToProps,{setUserProfile})(ProfileContainer);