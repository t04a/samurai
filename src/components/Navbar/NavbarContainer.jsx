import Navbar from "./Navbar";
import {connect} from "react-redux";

function f1(state) {
    return {
        state: state.navbarPage,
    }
}

export default connect(f1)(Navbar)