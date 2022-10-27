import React from 'react';
import QRCode from 'react-qr-code';

const QRCodeComponent = () => {
  return (
    <div className='flex justify-center p-8'>
      <QRCode
        value='ethereum:0xad6561e9e306c923512b4ea7af902994bebd99b8?value=1'
        size={164}
      />
    </div>
  );
};

export default QRCodeComponent;
