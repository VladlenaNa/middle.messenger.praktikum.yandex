
import express from 'express';
import { resolve } from 'path';

const app = express();
const PORT = 3000;

app.use(express.static(resolve(__dirname, 'src')));

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}!`);
});
