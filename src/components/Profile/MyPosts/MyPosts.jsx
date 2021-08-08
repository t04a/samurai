import style from './MyPosts.module.css';
import Post from "./Post/Post";
import React from "react";

function MyPosts(props) {
    function onAddPost() {
        props.addPost();
    }

    function onUpdateNewPostText(e) {
        let newPostText = e.target.value;
        props.updateNewPostText(newPostText);
    }

    let postElements = props.state.posts.map(p => <Post message={p.message} likeCount={p.likesCount}/>)

    return (
        <div className={style.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onUpdateNewPostText} value={props.state.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>send</button>
                </div>
            </div>
            <div className={style.posts}>
                {postElements}
            </div>
        </div>
    );
}

export default MyPosts;