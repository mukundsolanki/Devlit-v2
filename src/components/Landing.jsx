import React from "react";

function Landing({ handleClick }) {
    return (
        <div className="landing-page">
            <div className="background-text"> WELCOME! </div>
            <div className="content">
                <h1>Welcome to <span>Devl!t</span></h1>
                <button onClick={handleClick} className="google-button">Sign in With Google</button>
            </div>
        </div>
    );
}

export default Landing;
