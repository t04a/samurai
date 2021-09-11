import Profile from "./Profile";
import react from "react";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {withRouter} from "react-router-dom";

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

let redirectedComponent = withAuthRedirect(ProfileContainer);

function MapStateToProps(state) {
    return {
        profilePage: state.profilePage,
    }
}

let UrlDataProfileContainer = withRouter(redirectedComponent)

export default connect(MapStateToProps,{getUserProfile})(UrlDataProfileContainer);