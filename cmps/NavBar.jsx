const { Switch, Route, NavLink } = ReactRouterDOM

export class NavBar extends React.Component {
    render() {
        return (
            <nav className="main-nav flex">
                <NavLink activeClassName="active-nav-link" className="nav-link" exact to="/">Home</NavLink>
                <NavLink activeClassName="active-nav-link" className="nav-link" to="/keep">MissKeep</NavLink>
                <NavLink activeClassName="active-nav-link" className="nav-link" to="/mail/inbox">MisterEmail</NavLink>
            </nav>
        )
    }
}
