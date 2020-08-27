const Router = ReactRouterDOM.HashRouter
const { Switch, Route, NavLink } = ReactRouterDOM
import { Home } from './pages/Home.jsx'
import { BookApp } from './Books/BookApp.jsx'
import { KeepApp } from './Keep/KeepApp.jsx'
import { MailApp } from './Mail/MailApp.jsx'
import { About } from './pages/About.jsx'
import { Search } from './cmps/Search.jsx'
import { NavBar } from './cmps/NavBar.jsx'

export class App extends React.Component {

    state = {

    }

    render() {
        return (
            <Router>
                <div>
                    <header className="main-header">
                        <div className="nav-container flex container">
                            <h2 className="logo">Googol</h2>
                            <NavBar />
                        </div>
                    </header>
                    <main>
                        <Switch>
                            <Route component={MailApp} path="/mail" />
                            <Route component={BookApp} path="/book" />
                            <Route component={KeepApp} path="/keep" />
                            <Route component={About} path="/about" />
                            <Route component={Home} path="/" />
                        </Switch>
                    </main>
                </div>
            </Router>
        )
    }
}

