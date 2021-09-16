import Profile from "./Profile";
import react from "react";
import {connect} from "react-redux";
import {getProfileStatus, getUserProfile, updateProfileStatus} from "../../redux/profile-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends react.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 19035;
        }

        // let userId = this.props.match.params.userId || 2

        this.props.getUserProfile(userId);
        this.props.getProfileStatus(userId)
    }

    render() {
        return (
            <Profile {...this.props}/>
        )
    }
}

// let redirectedComponent = withAuthRedirect(ProfileContainer);

function mapStateToProps(state) {
    return {
        profilePage: state.profilePage,
        profileStatus: state.profilePage.profileStatus
    }
}

// let UrlDataProfileContainer = withRouter(redirectedComponent)

// export default connect(MapStateToProps,{getUserProfile})(UrlDataProfileContainer);

export default compose(
    connect(mapStateToProps,{getUserProfile, getProfileStatus, updateProfileStatus}),
    withRouter,
    /*withAuthRedirect*/)(ProfileContainer);