import styles from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";

function Profile(props) {
    return (
        <div className={styles.content}>
            <ProfileInfo userProfile={props.profilePage.userProfile}
                         isOwner={props.isOwner}
                         uploadPhoto={props.uploadPhoto}
            />
            <ProfileStatusWithHooks profileStatus={props.profileStatus}
                                    updateProfileStatus={props.updateProfileStatus}/>
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;