import React, { useRef, useState } from 'react';
import FormQr from './component/FormQr';
import QRCode from './component/QRCode';
import './App.css';

const App = () => {
  const qrRef = useRef();

  const [url, setUrl] = useState(''),
        handleGenerate = e => setUrl(e.target.value);

  const [qrColor, setQrColor] = useState('#ffffff'),
        [qrBgColor, setQrBgColor] = useState('#2c7dfa');
  /*
  const handleQrCustom = e => {
    const inputId = e.target.id,
          newColor = e.target.value;
    inputId === 'qrColor' ? setQrColor(newColor) : setQrBgColor(newColor);
  };
  */
  const handleQrCustom = color => {
    const newColor = color.hex;
    setQrColor(newColor);
  };

  const handleQrReset = () => {
    setUrl('');
    setQrColor('#ffffff');
    setQrBgColor('#2c7dfa');
  }
  
  return (
    <>
      <FormQr
        qrRef={qrRef}
        url={url}
        handleGenerate={handleGenerate}
        qrColor={qrColor}
        qrBgColor={qrBgColor}
        handleQrCustom={handleQrCustom}
        handleQrReset={handleQrReset}
      />

      <div className="card">
          <div className="qr-box" ref={qrRef} style={{backgroundColor: qrBgColor}}>
            <QRCode url={url} fgColor={qrColor} bgColor={qrBgColor} />
          </div>
          <h1>Improve your front-end skills by building projects</h1>
          <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
      </div>
    </>
  );
}

export default App;