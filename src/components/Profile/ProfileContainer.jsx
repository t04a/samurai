import Profile from "./Profile";
import react from "react";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends react.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
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

let UrlDataProfileContainer = withRouter(ProfileContainer)

export default connect(MapStateToProps,{setUserProfile})(UrlDataProfileContainer);