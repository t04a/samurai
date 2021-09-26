import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import style from './../common/FormsControls/FormsControls.module.css'

function LoginForm(props) {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'email'}
                       type="text"
                       placeholder={'Email'}
                       component={Input}
                       validate={[required]}/>
            </div>
            <div>
                <Field type="password"
                       placeholder={'Password'}
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
            {props.error && <div className={style.formSummaryError}>
                {props.error}
            </div>}
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
    function onSubmit(formData) {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return (
        <div>
            <h1>LOGIN</h1>
            <ReduxLoginForm onSubmit={onSubmit}/>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        isAuth: state.auth.isAuth,
    }
}

export default connect(mapStateToProps, {login})(Login);