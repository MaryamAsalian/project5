import React from 'react';
import google from '../assets/google.svg';
import styles from "./Login.module.css";
import firebase from 'firebase/app';
import { auth } from '../firebase';

const LoginPage = () => {
    return (
        <div className={styles.loginPage}>
            <div className={styles.loginCard}>
                <h2>welcome to chatMax! !</h2>
                <div className={styles.button} onClick={()=>{auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}}>
                    <img src={google} alt="google"/>sign in with google
                </div>
            </div>
            
        </div>
    );
};

export default LoginPage;