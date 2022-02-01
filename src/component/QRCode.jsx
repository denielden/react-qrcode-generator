import QrCode from 'qrcode.react';

const QRCode = props => {
   return (
      <QrCode
         size={250}
         value={props.url}
         bgColor={props.bgColor}
         fgColor={props.fgColor}
         level='H'
         includeMargin
      />
   );
}

export default QRCode;