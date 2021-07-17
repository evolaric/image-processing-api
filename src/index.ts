import express from 'express';

const port = 3000;
const app = express();

app.get('/', (req, res) => {
  res.send(`<h2>Api is up and running on port: ${port}</h2>`);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

export default app;
