import style from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);

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
                <Field component={Textarea} name={'newPostText'} validate={[required, maxLength10]} placeholder={'Post message'}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

let ReduxNewPostForm = reduxForm({form: 'NewPostForm'})(NewPostForm)

export default MyPosts;