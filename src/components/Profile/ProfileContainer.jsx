import Profile from "./Profile";
import react from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {getUserProfile} from "../../redux/profile-reducer";

class ProfileContainer extends react.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }

        // let userId = this.props.match.params.userId || 2

        this.props.getUserProfile(userId);
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

export default connect(MapStateToProps,{getUserProfile})(UrlDataProfileContainer);