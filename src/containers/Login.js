import React, { useEffect, useState } from 'react';
import Layout from "../components/Layout";
import { useDispatch, useSelector } from 'react-redux';
import { login as loginAction } from '../redux/modules/login';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Login = () => {
        const dispatch = useDispatch();
        let history = useNavigate();
        const login = useSelector(state => state.login);
        const token = useSelector(state => state.token.token);
        const [email, setEmail] = useState('');
        const [password, setPassWord] = useState('');
        const [displayLoading, setDisplayLoading] = useState(false);
        const [loginStatus, setLoginStatus] = useState(false);

        console.log(token)

        // useEffect(() => {
        //     if (token) {
        //         return history({ pathname: '/profile' });
        //     }
        // }, [token]);
        //
        // if (token) {
        //     return history({ pathname: '/profile' })
        // }

        function handleSubmit(e) {
            e.preventDefault();
            dispatch(loginAction({ password: password, email: email }));
        }

        return (
            <Layout>
                <LoginWrapper>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address(it is for test enter
                                'eve.holt@reqres.in')</label>
                            <input type="email" className="form-control m-1" id="exampleInputEmail1"
                                   aria-describedby="emailHelp"
                                   placeholder="Enter email" onChange={e => setEmail(e.target.value)}/>
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
                                else.</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password (it is for test enter 'cityslicka')</label>
                            <input type="password" className="form-control m-1" id="exampleInputPassword1"
                                   placeholder="Password"
                                   onChange={e => setPassWord(e.target.value)}/>
                        </div>
                        <button type="submit" className="btn btn-primary m-1 te" onClick={() => {
                            setDisplayLoading(true)
                            setLoginStatus(false)
                            setTimeout(() => {
                                if (!token) {
                                    setDisplayLoading(false)
                                }
                            }, 2000)
                            setTimeout(() => {
                                if (!displayLoading) {
                                    setLoginStatus(true)
                                }
                            }, 4000)

                        }}>Submit
                        </button>
                    </form>
                    <button className='btn btn-info w-25 mt-3' onClick={() => history({ pathname: '/' })}>Home</button>
                    {displayLoading ?
                        <div className="spinner-border mt-3" role="status"/>
                        : ''}
                    {loginStatus ? <div>Login unsuccessful !</div> : ''}
                </LoginWrapper>
            </Layout>
        );
    }
;

export default Login;