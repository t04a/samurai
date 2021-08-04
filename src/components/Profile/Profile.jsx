import styles from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.jsx'
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile(props) {
    return (
        <div className={styles.content}>
            <ProfileInfo/>
            <MyPosts profilePageState={props.profilePageState} dispatch={props.dispatch}/>
        </div>
    );
}

export default Profile;