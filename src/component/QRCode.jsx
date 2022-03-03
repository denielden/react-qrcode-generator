import QrCode from 'qrcode.react';

const QRCode = ({ url, bgColor, fgColor}) => {
   return (
      <QrCode
         size={250}
         value={url}
         bgColor={bgColor}
         fgColor={fgColor}
         level='H'
         includeMargin
      />
   );
}

export default QRCode;