import styles from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

function Profile() {
    return (
        <div className={styles.content}>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;