import Navbar from "./Navbar";
import {connect} from "react-redux";

/*function NavbarContainer(props) {

    let state = props.store.getState().navbarPage;

    return (
        <Navbar state={state}/>
    );
}

export default NavbarContainer;*/

function f1(state) {
    return {
        state: state.navbarPage,
    }
}

export default connect(f1)(Navbar)