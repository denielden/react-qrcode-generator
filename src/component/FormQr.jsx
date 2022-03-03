import InputUrl from './InputUrl';
import CustomizeQR from './CustomizeQR';
import reactLogo from '../img/react-logo.svg';
import qrIcon from '../img/qr-icon.svg';

const FormQr = ({ qrRef, url, qrColor, qrBgColor, handleQrCustom, handleGenerate, handleQrReset }) => {
   const downloadQRCode = e => {
      e.preventDefault();

      const qrCanvas = qrRef.current.querySelector('canvas'),
            qrImage = qrCanvas.toDataURL("image/png"),
            qrAnchor = document.createElement('a'),
            fileName = url.replace(/^https?:\/\//, '').trim();
      qrAnchor.href = qrImage;
      qrAnchor.download = fileName+'_Your-QRCode.png';
      document.body.appendChild(qrAnchor);
      qrAnchor.click();
      document.body.removeChild(qrAnchor);
   
      handleQrReset();
   }

   return(
      <form onSubmit={downloadQRCode}>
        <InputUrl url={url} handleGenerate={handleGenerate} />

        <CustomizeQR label={'QR color'} id={'qrColor'} customColor={qrColor} handleQrCustom={handleQrCustom} />
        <CustomizeQR label={'background'} id={'qrBgColor'} customColor={qrBgColor} handleQrCustom={handleQrCustom} />

        <button type="submit">
          <img src={reactLogo} className="spin-animation" alt="React logo" />
          <span>Download</span>
          <img src={qrIcon} alt="Qr code icon" />
        </button>
      </form>
   );
}

export default FormQr;