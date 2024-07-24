import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";

export default function Header() {
    const {setUserInfo, userInfo} = useContext(UserContext);
    useEffect(() => {
        fetch('http://localhost:4000/profile', {
            credentials: 'include',
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch user profile');
            }
            return response.json();
        })
        .then(userInfo => {
            setUserInfo(userInfo);
        })
        .catch(error => {
            console.error('Error fetching user profile:', error);
            setUserInfo(null); // Ensure username is null if fetch fails
        });
    }, []);

    function logout() {
      fetch('http://localhost:4000/logout', {
        credentials: 'include',
        method: 'POST'
      });
      setUserInfo(null);
    }

    const username = userInfo?.username;

    return (
        <header>
            <Link to="/" className="logo">AkieThinks</Link>
            <nav>
                {username ? (
                    <>
                        <Link to="/create">Create New Post</Link>
                        <a onClick={logout}>Logout</a>
                    </>
                ) : (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </>
                )}
            </nav>
        </header>
    );
}
