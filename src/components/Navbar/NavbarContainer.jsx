import Navbar from "./Navbar";

function NavbarContainer(props) {

    let state = props.store.getState().navbarPage;

    return (
        <Navbar state={state}/>
    );
}

export default NavbarContainer;