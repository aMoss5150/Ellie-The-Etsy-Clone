import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks'
import './LoginForm.css';

function LoginFormPage() {
    const history = useHistory()
    const dispatch = useAppDispatch();
    const sessionUser = useAppSelector(state => state.session.user);
    const [credential, setCredential] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    if (sessionUser) return (
        <Redirect to="/" />
    );

    const handleSubmit = (e: React.SyntheticEvent<EventTarget>) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({ credential, password }))

            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors)
            }).then(() => {
                //*ADDED DOT THEN TO CHAIN A REDIRECT TO PREVIOUS PAGE
                if (!errors) {
                    history.goBack();
                }
            });

    }

    return (
        <form className="login__form" onSubmit={handleSubmit}>
            <ul>
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
            <label>
                Username or Email
                <input className="email__field input"
                    type="text"
                    value={credential}
                    onChange={(e) => setCredential(e.target.value)}
                    required
                />
            </label>
            <label>
                Password
                <input className="password__field input"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </label>
            <button className="submit__button button" type="submit">Log In</button>
        </form>
    );
}

export default LoginFormPage;