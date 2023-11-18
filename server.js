import express from "express";
import { resolve } from 'path';

const app = express();
const PORT = 3000;
const __dirname = resolve();

app.use(express.static("./dist"));

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`);
});
