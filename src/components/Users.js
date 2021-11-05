import { useEffect, useState } from 'react';
import { NavLink, Switch, Route, useRouteMatch } from 'react-router-dom';
import axios from "axios";
import User from "./User";

function Users() {
    const [loading, setLoading] = useState(true)

    const [users, setUsers] = useState([]);

    const { path, url } = useRouteMatch();

    useEffect(() => {
        axios("https://jsonplaceholder.typicode.com/users")
            .then((res) => setUsers(res.data))
            .finally(() => setLoading(false));
    }, []);

    return (
        <div>
            <h1>User</h1>
            {loading && <span style={{ fontSize: "90px", margin: "0 auto" }}>LOADING...</span>}
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <NavLink to={`${url}/${user.id}`} activeStyle={{ backgroundColor: "grey", color:"white", textDecoration:"none"}}>{user.name}</NavLink>
                    </li>
                ))}


                {/*<li>
                    <Link to="/user/1">User 1</Link>
                </li>*/}
                {/*<li>
                    <Link to="/user/2">User 2</Link>
                </li>*/}
                {/*<li>
                    <Link to="/user/3">User 3</Link>
                </li>*/}

            </ul>

            <Switch>
                <Route exact path={path}>
                    <h3>Please select a user.</h3>
                </Route>
                <Route path={`${path}/:id`}>
                    <User />
                </Route>
            </Switch>

        </div>
    )
}

export default Users
