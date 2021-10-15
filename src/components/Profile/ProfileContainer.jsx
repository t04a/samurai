import Profile from "./Profile";
import react from "react";
import {connect} from "react-redux";
import {getProfileStatus, getUserProfile, updateProfileStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends react.Component {

    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push('/login')
            }
        }

        this.props.getUserProfile(userId);
        this.props.getProfileStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile();
        }
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
        profileStatus: state.profilePage.profileStatus,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth,
    }
}

// let UrlDataProfileContainer = withRouter(redirectedComponent)

// export default connect(MapStateToProps,{getUserProfile})(UrlDataProfileContainer);

export default compose(
    connect(mapStateToProps,{getUserProfile, getProfileStatus, updateProfileStatus}),
    withRouter)(ProfileContainer);