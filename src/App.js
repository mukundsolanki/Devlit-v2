import { useState } from 'react';
import { useFirebase } from './context/Firebase';
import './App.css';

function App() {

  const firebase = useFirebase();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="App">
      <h1>SIGN UP</h1>
      <input value={email}
        onChange={(e) => { setEmail(e.target.value) }}
        type="email" placeholder='enter email here'
      />

      <input
        value={password}
        onChange={(e) => { setPassword(e.target.value) }}
        type="password" placeholder='enter password here'
      />

      <button onClick={() => firebase.signupUserWithEmailAndPassword(email,password) }>Sign UP</button>
    </div>
  );
}

export default App;
