import styles from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.jsx'
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile(props) {
    return (
        <div className={styles.content}>
            <ProfileInfo/>
            {/*<MyPosts posts={props.state.posts} addPost={props.addPost}/>*/}
            <MyPosts profilePageState={props.profilePageState} addPost={props.addPost}
                     updateNewPostText={props.updateNewPostText}/>
        </div>
    );
}

export default Profile;