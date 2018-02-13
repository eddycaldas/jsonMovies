const knex = require('./')


module.exports = {
  movie: {
    list() {
      return knex('movie')
    },
    delete(id) {
      return knex('movie').where({id}).del()
    },
    read(id) {
      return knex('movie').where({id}).first()
    },
    create(body) {
      return knex('movie').insert(body)
    },
    update(id, body) {
      return knex('movie').where({id}).update(body)
    },
  }
}