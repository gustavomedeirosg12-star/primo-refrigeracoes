const http = require('http');
const https = require('https');
const fs = require('fs');
const url = require('url');

const file = fs.createWriteStream("src/assets/apresentacao.mp4");

function download(fileUrl) {
    const lib = fileUrl.startsWith('https') ? https : http;
    const request = lib.get(fileUrl, function(response) {
        if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
            console.log('Redirecting to:', response.headers.location);
            download(response.headers.location);
            return;
        }
        
        if (response.statusCode === 200) {
            response.pipe(file);
            file.on('finish', function() {
                file.close();
                console.log('Download completed');
            });
        } else {
             console.error('Failed to download: Status Code ' + response.statusCode);
             if(response.headers['set-cookie']) {
                console.log("cookies needed?", response.headers['set-cookie']);
             }
        }
    }).on('error', function(err) {
        fs.unlink("src/assets/apresentacao.mp4", () => {});
        console.error('Error downloading:', err.message);
    });
}
download('https://drive.google.com/uc?export=download&id=11sP1s0XXmcbuV0wIiVBD2Wve9XRwWecm');
