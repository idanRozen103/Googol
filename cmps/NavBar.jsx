const { Switch, Route, NavLink } = ReactRouterDOM

export class NavBar extends React.Component {
    render() {
        return (
            <nav className="main-nav flex">
                <NavLink className="nav-link" exact to="/">Home</NavLink>
                <NavLink className="nav-link" to="/about">About Us</NavLink>
                <NavLink className="nav-link" to="/book">MissBooks</NavLink>
                <NavLink className="nav-link" to="/keep">MissKeep</NavLink>
                <NavLink className="nav-link" to="/mail">Mail</NavLink>
            </nav>
        )
    }
}
