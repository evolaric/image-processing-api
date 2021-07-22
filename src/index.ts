// BASE APPLICATION FILE
import express from 'express';
import api from './routes/api';
import topLevel from './routes';
import image from './routes/api/image';

const port = 3000;
const app = express();

app.use(topLevel);
app.use(api);
app.use(image);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

export default app;
