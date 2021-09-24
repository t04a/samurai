import style from './Header.module.css';
import {NavLink} from "react-router-dom";

function Header(props) {
  return (
    <header className={style.header}>
        <div className={style.logo}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/BMW_logo_%28gray%29.svg/1024px-BMW_logo_%28gray%29.svg.png' alt='' />
        </div>
        <div className={style.auth}>
            {props.isAuth ?
                <div>
                    <NavLink to={"/profile/"}>{props.login} ({props.email}) - </NavLink>
                    <button onClick={props.logout}>Logout</button>
                </div> :
                <NavLink to={"/login/"}>Login</NavLink>
            }
        </div>
    </header>
  );
}

export default Header;