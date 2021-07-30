import style from './MyPosts.module.css';
import Post from "./Post/Post";
import React from "react";

function MyPosts(props) {

    let newPostElement = React.createRef();

    function addPost() {
        props.addPost();
    }

    function updateNewPostText() {
        let newPostText = newPostElement.current.value
        props.updateNewPostText(newPostText);
    }

    let postElements = props.profilePageState.posts.map(p => <Post message={p.message} likeCount={p.likesCount}/>)

    return (
        <div className={style.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={updateNewPostText} ref={newPostElement} value={props.profilePageState.newPostText}/>
                </div>
                <div>
                    <button onClick={addPost}>send</button>
                </div>
            </div>
            <div className={style.posts}>
                {postElements}
            </div>
        </div>
    );
}

export default MyPosts;