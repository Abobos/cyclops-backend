import express from 'express';
import bodyParser from 'body-parser';
import route from './routes';

const port = process.env.PORT || 3000;
const server = http.createServer(app);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

route(app);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default server;
