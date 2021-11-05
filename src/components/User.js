import { useParams, NavLink } from 'react-router-dom';
import { useEffect, useState} from 'react';
import axios from "axios";



function User() {

    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState({});

    const {id} = useParams();



    useEffect(() => {
        axios(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => setUser(res.data))
        .finally(() => setLoading(false));
    }, [id]);


    return (
    
        <div>
            <h2>User Deatil</h2>
            {loading && <div style={{fontSize:"90px", paddingLeft:"80px"}}>LOADING...</div>}

            {!loading && <code>{JSON.stringify(user)}</code>}
            {/*id: {id}*/}
            <br/><br/>
            <NavLink to={`/users/${parseInt(id) + 1}`} className="linkin">Next User({parseInt(id) + 1})</NavLink>
        </div>
    )
}

export default User
