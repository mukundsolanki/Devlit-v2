import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import { auth } from "./config";

function Home() {

    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });

        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <div>
            <Header />
            <div className="home-state center">
                {user ? (
                    <>
                    <div className="background-text">DEVL!T</div>
                        <img src={user.photoURL} alt="Profile" className="profile-picture-home" />
                        <h1>👋Hi, <span>{user.displayName}</span></h1>
                        {/* <h2>{user.email}</h2> */}
                    </>
                ) : (
                    <>
                        <h2>Hi, Guest</h2>
                        <p>Please sign in to continue</p>
                    </>
                )}
                <div>
                    <h2>
                        <Link to="/start-building" className="google-button">Start Building</Link>
                    </h2>
                    <h2>
                        <Link to="/about" className="google-button">About</Link>
                    </h2>
                    <h2>
                        <Link to="/profile" className="google-button">Profile</Link>
                    </h2>
                </div>
            </div>
        </div>
    );
}
export default Home;