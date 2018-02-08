const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 8800;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors());

const routes = {
  movie: require('./routes/movie')
}

app.use('/movie', routes.movie)

app.listen(PORT, () => console.log(`listening on port ${PORT}`))