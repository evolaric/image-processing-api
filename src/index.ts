// BASE APPLICATION FILE
import express from 'express';
import api from './routes/api';
import topLevel from './routes';
import image from './routes/api/image';
import doDirectoriesExist from './util/doDirectoriesExist';
import getRawImages from './util/getRawImages';

const port = 3000;
const app = express();
app.use(doDirectoriesExist);
app.use(getRawImages);
app.use(topLevel);
app.use(api);
app.use(image);

app.listen(port, (): void => {
  console.log(`App listening on port ${port}`);
});

export default app;
