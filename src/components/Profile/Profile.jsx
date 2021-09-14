import styles from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileStatus from "./ProfileStatus/ProfileStatus";

function Profile(props) {

    return (
        <div className={styles.content}>
            <ProfileInfo userProfile={props.profilePage.userProfile}/>
            <ProfileStatus status={'This my life'}/>
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;