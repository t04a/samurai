import style from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";

function MyPosts(props) {
    function addNewPost(values) {
        console.log(values);
        props.addPost(values.newPostText);
    }

    let postElements = props.state.posts.map(p => <Post message={p.message} likeCount={p.likesCount}/>)

    return (
        <div className={style.postsBlock}>
            <h3>My posts</h3>
            <ReduxNewPostForm onSubmit={addNewPost}/>
            <div className={style.posts}>
                {postElements}
            </div>
        </div>
    );
}

function NewPostForm(props) {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'textarea'} name={'newPostText'}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

let ReduxNewPostForm = reduxForm({form: 'NewPostForm'})(NewPostForm)

export default MyPosts;