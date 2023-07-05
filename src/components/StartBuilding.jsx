import React, { useState } from 'react'; import Header from './Header'
export default function StartBuilding() {

  const [htmlCode, setHtmlCode] = useState('');
  const [cssCode, setCssCode] = useState('');
  const [jsCode, setJsCode] = useState('');
  const [output, setOutput] = useState('');

  const handleCodeChange = (event, codeType) => {
    const code = event.target.value;
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

  return (

    <div>
      <Header />

      <div className="code-editor">
        <div className="code-editor__input">
          <label htmlFor="">HTML</label>
          <textarea
            value={htmlCode}
            onChange={(event) => handleCodeChange(event, 'html')}
            placeholder="Enter HTML code"
          ></textarea>

          <label htmlFor="">CSS</label>
          <textarea
            value={cssCode}
            onChange={(event) => handleCodeChange(event, 'css')}
            placeholder="Enter CSS code"
          ></textarea>

          <label htmlFor="">JS</label>
          <textarea
            value={jsCode}
            onChange={(event) => handleCodeChange(event, 'js')}
            placeholder="Enter JavaScript code"
          ></textarea>
        </div>

        <div className="code-editor__output">
        <button onClick={handleRunCode} className="run-button google-button">Run</button>
          <iframe id="output-iframe" title="Output"></iframe>
        </div>
      </div>
    </div>
  )
}
