import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";

function LoginForm(props) {
    debugger
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'login'}
                       type="text"
                       placeholder={'login'}
                       component={Input}
                       validate={[required]}/>
            </div>
            <div>
                <Field type="text"
                       placeholder={'password'}
                       name={'password'}
                       component={Input}
                       validate={[required]}
                />
            </div>
            <div>
                <label>
                    <Field type="checkbox" component={Input} name={'rememberMe'}/>
                    remember me
                </label>
            </div>
            <div>
                <button type={'submit'}>Login</button>
            </div>
        </form>
    )
}

let ReduxLoginForm = reduxForm({
    form: 'login'
})(LoginForm)

function Login(props) {
    function onSubmit(values) {
        console.log(values)
    }
    return (
        <div>
            <h1>LOGIN</h1>
            <ReduxLoginForm onSubmit={onSubmit}/>
        </div>
    )
}

export default Login;