import axios from 'axios';
import fs from 'fs';

let data = fs.readFileSync('./data.json', 'utf8');
data = JSON.parse(data);
data = data.map((d) => d.images);
data = data.flat();

data.forEach((link) => {
  const localFilePath = link.split('/').pop();
  axios({
    method: 'GET',
    url: 'https://elki.by' + link,
    responseType: 'stream',
  }).then((response) => {
    const w = response.data.pipe(
      fs.createWriteStream('./images/' + localFilePath)
    );
    w.on('finish', () => {
      console.log('Successfully downloaded file!');
    });
  });
});
