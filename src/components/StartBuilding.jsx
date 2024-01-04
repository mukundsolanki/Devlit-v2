import React from "react";
import { useEffect, useState } from "react";
import Header from './Header'
import MonacoEditor from 'react-monaco-editor';
import Footer from './Footer';
import { auth } from "./config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from '../components/config';
import { Link } from "react-router-dom";

export default function StartBuilding() {

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

  const [htmlCode, setHtmlCode] = useState('');
  const [cssCode, setCssCode] = useState('');
  const [jsCode, setJsCode] = useState('');
  // const [output, setOutput] = useState('');

  const handleCodeChange = (code, codeType) => {
    // const code = event.target.value;
    switch (codeType) {
      case 'html':
        setHtmlCode(code);
        break;
      case 'css':
        setCssCode(code);
        break;
      case 'js':
        setJsCode(code);
        break;
      default:
        break;
    }
  };

  const handleRunCode = () => {
    const iframe = document.getElementById('output-iframe');
    const iframeContent = `
      <html>
        <head>
          <style>${cssCode}</style>
        </head>
        <body>
          ${htmlCode}
          <script>${jsCode}</script>
        </body>
      </html>
    `;
    iframe.contentDocument.open();
    iframe.contentDocument.write(iframeContent);
    iframe.contentDocument.close();
  };

  const saveToFirebase = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "codes"), {
        userId: user.uid,
        htmlCode: htmlCode,
        cssCode: cssCode,
        jsCode: jsCode,
        timestamp: serverTimestamp(),
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (

    <div>
      <Header />

      <div className="code-editor">
        <div className="code-editor__input">
          <label htmlFor="">HTML</label>
          <MonacoEditor
            language="html"
            theme="vs-dark"
            value={htmlCode}
            onChange={(code) => handleCodeChange(code, 'html')}
            options={{ fontSize: 14 }} // You can customize the editor options here
          />

          <label htmlFor="">CSS</label>
          <MonacoEditor
            language="css"
            theme="vs-dark"
            value={cssCode}
            onChange={(code) => handleCodeChange(code, 'css')}
            options={{ fontSize: 14 }}
          />
          <label htmlFor="">JAVASCRIPT</label>
          <MonacoEditor
            language="javascript"
            theme="vs-dark"
            value={jsCode}
            onChange={(code) => handleCodeChange(code, 'js')}
            options={{ fontSize: 14 }}
          />
        </div>

        <div className="code-editor__output">
          <button onClick={handleRunCode} className="run-button google-button">Run</button>

          {
            user ? <button onClick={saveToFirebase} className="run-button google-button">Save</button>
              : <Link to="/">
                <button className="run-button google-button">Sign in to Save</button>
              </Link>
          }

          <iframe id="output-iframe" title="Output"></iframe>
        </div>
      </div>

      <Footer />
    </div>
  )
}
