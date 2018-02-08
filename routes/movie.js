const router = require("Express").Router()
const queries = require('../db/queries')

router.get('/', (req, res) => {
  queries.movie.list()
  .then((data) => res.json(data))
})

router.delete('/:id', (req, res) => {
  queries.movie
  .delete(req.params.id)
  .then(() => res.sendStatus(202))
})

router.get('/:id', (req, res) => {
  queries.movie.read(req.params.id)
  .then((movie) => res.json(movie))
})

router.post('/', (req, res) => {
  queries.movie.create(req.body)
  .then((movie) => res.json(movie))
})

router.put('/:id', (req, res) => {
  queries.movie.update(req.params.id, req.body)
  .then((movie) => res.send(200))
})




module.exports = router