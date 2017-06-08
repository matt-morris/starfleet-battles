import * as express from 'express';

const PORT = process.env.PORT || 1701;

const app = express();

app.get('/', function(req, res) {
  res.send("Space. The final frontier....");
});

app.listen(PORT, function() {
  console.log(`Listening on port ${PORT}...`);
});
