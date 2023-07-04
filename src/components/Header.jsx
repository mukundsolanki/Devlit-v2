import React, { useEffect, useState } from "react";
import { auth } from "./config";

function Header() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const logout =()=>{
    localStorage.clear()
    window.location.reload()
}

  return (
    <div className="header">
      <div className="app-name">DEVLIT</div>
      {user && (
        <div className="user-profile">
          <img
            src={user.photoURL}
            alt="Profile"
            className="profile-picture"
          />
          {/* <span className="username">{user.displayName}</span> */}
          <button onClick={logout} className="google-button">Logout</button>
        </div>
      )}
    </div>
  );
}

export default Header;
