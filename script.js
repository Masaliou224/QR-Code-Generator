document.getElementById('qr-form').addEventListener('submit', 
  function(event) {
    event.preventDefault();
    generateQRCode();
});

function generateQRCode() {
  const url = document.getElementById('url-input').value;
  if (url) {
    const qrCodeContainer = document.getElementById('qr-code');

    qrCodeContainer.innerHTML = ''; 

    const canvas = document.createElement('canvas');
    qrCodeContainer.appendChild(canvas);

    QRCode.toCanvas(canvas, url, { width: 200, height: 200 }, function (error) {
      if (error) {
        console.error(error);
      } else {
        console.log('Code QR créé avec succès.');

        const downloadLink = document.getElementById("download-link");
        downloadLink.href = canvas.toDataURL('image/png');
        downloadLink.style.display = 'block';
      }
    });
  } else {
    alert('Entrez un URL.');
  }
}