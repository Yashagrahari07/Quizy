import QRCode from 'qrcode';

export const generateUniqueUrl = () => {
  return Math.random().toString(36).substr(2, 9);
};

export const generateQrCode = async (url) => {
  try {
    const qrCode = await QRCode.toDataURL(url);
    return qrCode;
  } catch (error) {
    throw new Error('Error generating QR code');
  }
};
