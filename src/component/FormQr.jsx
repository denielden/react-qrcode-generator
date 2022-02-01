import InputUrl from './InputUrl';
import CustomizeQR from './CustomizeQR';
import reactLogo from '../img/react-logo.svg';
import qrIcon from '../img/qr-icon.svg';

const FormQr = props => {
   const downloadQRCode = e => {
      e.preventDefault();

      const qrCanvas = props.qrRef.current.querySelector('canvas'),
            qrImage = qrCanvas.toDataURL("image/png"),
            qrAnchor = document.createElement('a'),
            fileName = props.url.replace(/^https?:\/\//, '').trim();
      qrAnchor.href = qrImage;
      qrAnchor.download = fileName+'_Your-QRCode.png';
      document.body.appendChild(qrAnchor);
      qrAnchor.click();
      document.body.removeChild(qrAnchor);
   
      props.handleQrReset();
   }

   return(
      <form onSubmit={downloadQRCode}>
        <InputUrl url={props.url} handleGenerate={props.handleGenerate} />

        <CustomizeQR label={'QR color'} id={'qrColor'} customColor={props.qrColor} handleQrCustom={props.handleQrCustom} />
        <CustomizeQR label={'background'} id={'qrBgColor'} customColor={props.qrBgColor} handleQrCustom={props.handleQrCustom} />

        <button type="submit">
          <img src={reactLogo} className="spin-animation" loading="lazy" alt="React logo" />
          <h2>Download</h2>
          <img src={qrIcon} loading="lazy" alt="Qr code icon" />
        </button>
      </form>
   );
}

export default FormQr;