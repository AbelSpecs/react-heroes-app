import React, {useContext} from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types';


export const LoginScreen = ({history}) => {

    const {dispatch} = useContext(AuthContext);

    const handleLogin = () => {
        /* history.replace('/'); */ // usarlo para logins

        const lastpage = localStorage.getItem('lastpath');

        const user = {
           name: 'Topo'
       }

       const action = {
           type: types.login,
           payload: user
       }

       dispatch(action);
       history.replace(lastpage);

    }

    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr />

            <button 
                className="btn btn-primary"
                onClick={handleLogin}
            >
                Login
            </button>
        </div>
    )
}
